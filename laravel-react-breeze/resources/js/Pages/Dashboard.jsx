import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UseTask from '@/hooks/UseTask';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {

    const { tasks, removeTask } = UseTask()

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

                        <table className="min-w-full divide-gray-200 px-10">
                            <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-800">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-800 text-white">Título</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-800 text-white">Descrição</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-800 text-white">Responsável</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-800 text-white">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {tasks.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="py-2 text-center">Nenhuma Tarefa Cadastrada!</td>
                                    </tr>
                                ) : (
                                    tasks.map(task => (
                                        <tr key={task.id}>
                                            <td className="px-6 py-4 whitespace-nowrap bg-white text-black">{task.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap bg-white text-black">{task.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap bg-white text-black">{task.description}</td>
                                            <td className="px-6 py-4 whitespace-nowrap bg-white text-black">{task.author}</td>
                                            <td className="px-6 py-4 whitespace-nowrap bg-white text-black flex gap-3">
                                                <Link
                                                    href={route('editTask', { taskId: task.id })}
                                                    className="px-2 py-1 bg-blue-500 rounded-sm hover:scale-110 transition text-sm text-white"
                                                >
                                                    Editar
                                                </Link>
                                                <button
                                                    type="button"
                                                    className="px-2 py-1 bg-red-600 rounded-sm hover:scale-110 transition text-sm text-white"
                                                    onClick={() => removeTask(task.id)}
                                                >
                                                    Deletar
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
