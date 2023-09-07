import TaskTable from '@/Components/TaskTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UseTask from '@/hooks/UseTask';
import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Dashboard({ auth }) {

    const { updateTasks } = UseTask()

    useEffect(() => {
        updateTasks()
    }, [])

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tarefas</h2>}
        >
            <Head title="Tarefas" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-10">
                        <div className='flex justify-between items-center py-6'>
                            <div className="text-gray-900 text-lg">Lista de Tarefas</div>
                            <Link
                                className="px-3 py-2 bg-green-600 hover:bg-green-500 rounded-md text-white hover:scale-105 transition duration-300"
                                href={route('createTask')}
                            >
                                Nova Tarefa
                            </Link>
                        </div>
                        <TaskTable />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
