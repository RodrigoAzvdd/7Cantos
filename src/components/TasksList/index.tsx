import { TaskType } from "../../contexts/TaskContext";
import TaskCard from "../TaskCard";

interface TasksListProps {
    filteredTasks: TaskType[]
}

export default function TasksList({ filteredTasks }: TasksListProps) {
    return (
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            borderTop: '1px solid #000',
            paddingTop: '3rem',
            marginTop: '3rem'
        }}>
            {filteredTasks.length > 0 ?
                filteredTasks.map(task => (
                    <li key={task.id}>
                        <TaskCard task={task} />
                    </li>
                ))
                :
                'Nenhuma Tarefa até o momento.'
            }
        </ul>
    )
}