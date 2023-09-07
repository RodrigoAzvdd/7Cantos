import UseTask from "@/hooks/UseTask";
import { Link } from "@inertiajs/react";

export default function TaskTable() {

    const { removeTask, updateTasks, updateStatus, tasks } = UseTask()

    return (
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
                            <td className={`px-6 py-4 whitespace-nowrap bg-white text-black`}>{task.id}</td>
                            <td className={`px-6 py-4 whitespace-nowrap bg-white text-black`}>{task.title}</td>
                            <td className={`px-6 py-4 whitespace-nowrap bg-white text-black`}>{task.description}</td>
                            <td className={`px-6 py-4 whitespace-nowrap bg-white text-black`}>{task.author}</td>
                            <td className={`px-6 py-4 whitespace-nowrap bg-white text-black flex gap-3`}>
                                <Link
                                    href={route('editTask', { taskId: task.id })}
                                    className="flex items-center gap-2 px-2 py-2 bg-blue-500 rounded-sm hover:scale-110 transition text-sm text-white"
                                >
                                    <span>Editar</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                        </svg>
                                    </span>
                                </Link>
                                <button
                                    type="button"
                                    className="flex items-center gap-2 px-2 py-2 bg-red-600 rounded-sm hover:scale-110 transition text-sm text-white"
                                    onClick={() => {
                                        removeTask(task.id)
                                        updateTasks()
                                    }
                                    }
                                >
                                    <span>Deletar</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                        </svg>
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className={`flex items-center gap-1 px-2 py-2 rounded-sm hover:scale-110 transition text-sm text-white ${task.completed == false ? 'bg-yellow-500' : 'bg-green-400'}`}
                                    onClick={() => {
                                        updateStatus(task.id)
                                        updateTasks()
                                    }
                                    }
                                >
                                    {task.completed == false ? (
                                        <>
                                            <span>Não concluída</span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Concluída</span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
                                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                                                </svg>
                                            </span>
                                        </>
                                    )}
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}
