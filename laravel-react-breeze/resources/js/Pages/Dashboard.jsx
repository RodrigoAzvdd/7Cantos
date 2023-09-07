import TaskTable from '@/Components/TaskTable'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import UseTask from '@/hooks/UseTask'
import { Head, Link } from '@inertiajs/react'
import { useEffect, useRef, useState } from 'react'

export default function Dashboard({ auth }) {
    const { } = UseTask()
    const select = useRef(null)

    const handleChange = () => {
        
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tarefas</h2>}
        >
            <Head title="Tarefas" />
            <div className="py-12">
                <div className="mx-auto px-28">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-10">
                        <div className='flex justify-between items-center py-6'>
                            <div className="text-gray-900 text-lg">Lista de Tarefas</div>
                            <div className='flex items-center gap-4'>
                                <div className="w-36">
                                    <select onChange={handleChange} ref={select} id="filter" name="filter" className="block w-full px-4 py-2 border border-gray-300 bg-white text-gray-800 rounded-md focus:outline-none focus:ring focus:ring-indigo-200">
                                        <option value="all">Ver Tudo</option>
                                        <option value="pending">Pendentes</option>
                                        <option value="completed">Concluídas</option>
                                    </select>
                                </div>
                                <Link
                                    className="px-3 py-2 bg-green-600 hover:bg-green-500 rounded-md text-white hover:scale-105 transition duration-300"
                                    href={route('createTask')}
                                >
                                    Nova Tarefa
                                </Link>
                            </div>
                        </div>
                        <TaskTable />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
