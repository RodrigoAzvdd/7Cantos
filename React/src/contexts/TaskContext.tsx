import { ReactNode, createContext, useEffect, useState } from "react"

interface TaskContextProps {
    children: ReactNode
}

type TaskContextType = {
    tasksArray: TaskType[]
    addTask: (name: string, description: string) => void
    removeTask: (id: number) => void
    toggleCheck: (id: number) => void
}

export type TaskType = {
    name: string
    description: string
    id: number
    isFinished?: boolean
}

export const TaskContext = createContext({} as TaskContextType);


export function TaskContextProvider({ children }: TaskContextProps) {

    useEffect(() => {
        const storedTasks = localStorage.getItem('stored-tasks')
        if (storedTasks) {
            setTasksArray(JSON.parse(storedTasks))
        }
    }, [])

    const [tasksArray, setTasksArray] = useState<TaskType[]>([])
    const [filteredTasks, setFilteredTasks] = useState<TaskType[]>([])

    const addTask = (name: string, description: string) => {
        if (name && description) {
            const id = Math.floor(Math.random() * 9999)
            const newTask: TaskType = {
                name: name,
                description: description,
                id: id,
                isFinished: false
            }
            const updatedTasks = [...tasksArray, newTask]
            setTasksArray(updatedTasks)
            localStorage.setItem('stored-tasks', JSON.stringify(updatedTasks))
        } else alert('Valores não definidos.')
    }

    const toggleCheck = (id: number) => {
        setTasksArray(tasks => {
            return tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        isFinished: !task.isFinished,
                    }
                }
                return task
            })
        })
    }

    const removeTask = (id: number) => {
        const updatedTasks = tasksArray.filter(task => task.id !== id)
        setTasksArray(updatedTasks)
        localStorage.setItem('stored-tasks', JSON.stringify(updatedTasks))
    }

    const values = {
        tasksArray,
        filteredTasks,
        addTask,
        removeTask,
        toggleCheck,
        setFilteredTasks,
    }

    return (
        <TaskContext.Provider value={values}>
            {children}
        </TaskContext.Provider>
    )
}