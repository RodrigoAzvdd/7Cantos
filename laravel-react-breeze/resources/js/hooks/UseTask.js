import axios from 'axios'
import { useEffect, useState } from 'react'

export default function UseTask() {
    const [tasks, setTasks] = useState([])
    const apiUrl = 'http://127.0.0.1:8000/api/tasks/'

    const updateTasks = async () => {
        try {
            const response = await axios.get(apiUrl);
            setTasks(response.data);
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
            throw error;
        }
    }


    useEffect(() => {
        updateTasks()
    }, [])

    const addTask = async (title, description, author) => {
        const newTask = {
            title: title,
            description: description,
            author: author
        }

        try {
            await axios.post(apiUrl, newTask)
            console.log('Tarefa criada com sucesso')
            updateTasks()
        } catch (error) {
            console.log('Erro ao criar tarefa: ', error)
        }
    }

    const removeTask = async (taskId) => {
        try {
            await axios.delete(`${apiUrl}${taskId}`);
            console.log('Tarefa excluída com sucesso');
            updateTasks();
        } catch (error) {
            console.log('Erro ao excluir tarefa: ', error);
        }
    }


    const updateTask = async (taskId, newTitle, newDescription, newAuthor) => {
        const updatedTask = {
            title: newTitle,
            description: newDescription,
            author: newAuthor
        }

        try {
            await axios.put(`${apiUrl}${taskId}`, updatedTask)
            console.log('Tarefa atualizada com sucesso')
            updateTasks()
        } catch (error) {
            console.log('Erro ao atualizar tarefa: ', error)
        }
    }

    const findTask = async (taskId) => {
        try {
            const response = await axios.get(`${apiUrl}${taskId}`);
            console.log('Tarefas encontrada com sucesso');
            return response.data
        } catch (error) {
            console.error('Erro ao buscar tarefa:', error);
            throw error;
        }
    }

    return { tasks, addTask, removeTask, updateTasks, updateTask, findTask }
}
