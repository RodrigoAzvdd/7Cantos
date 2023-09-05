import { useContext } from 'react'
import styles from './style.module.css'
import { TaskContext, TaskType } from '../../contexts/TaskContext'
import Button from '../Button'

const TaskCard = ({ task }: {
    task: TaskType
}) => {
    const { removeTask, toggleCheck } = useContext(TaskContext)
    return (
        <section key={task.id} className={styles.card}>
            {task.isFinished ?
                <div className={styles.info}>
                    <h1 style={{ textDecoration: 'line-through' }}>Nome: <span>{task.name}</span></h1>
                    <p>Descricao: {task.description}</p>
                </div>
                :
                <div className={styles.info}>
                    <h1 style={{ textDecoration: 'none' }}>Nome: {task.name}</h1>
                    <p>Descricao: {task.description}</p>
                </div>
            }
            <div className={styles.btns}>
                <Button color='error' text="Deletar" func={() => removeTask(task.id)} />
                <Button color='success' func={() => toggleCheck(task.id)} text="Concluída" />
            </div>
        </section>
    )
}

export default TaskCard