import UseTask from "@/hooks/UseTask";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";

export default function TaskTable() {

    const { removeTask, updateTasks, tasks } = UseTask()

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
                        <tr>
                            <td className={`px-6 py-4 whitespace-nowrap bg-white text-black`}>{task.id}</td>
                            <td className={`px-6 py-4 whitespace-nowrap bg-white text-black`}>{task.title}</td>
                            <td className={`px-6 py-4 whitespace-nowrap bg-white text-black`}>{task.description}</td>
                            <td className={`px-6 py-4 whitespace-nowrap bg-white text-black`}>{task.author}</td>
                            <td className={`px-6 py-4 whitespace-nowrap bg-white text-black flex gap-3`}>
                                <Link
                                    href={route('editTask', { taskId: task.id })}
                                    className="px-2 py-1 bg-blue-500 rounded-sm hover:scale-110 transition text-sm text-white"
                                >
                                    Editar
                                </Link>
                                <button
                                    type="button"
                                    className="px-2 py-1 bg-red-600 rounded-sm hover:scale-110 transition text-sm text-white"
                                    onClick={() => {
                                        removeTask(task.id)
                                        updateTasks()
                                    }
                                    }
                                >
                                    Deletar
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}
