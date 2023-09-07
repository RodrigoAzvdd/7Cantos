import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UseTask from "@/hooks/UseTask"
import { useRef } from "react"
import { Head } from '@inertiajs/react';

export default function CreateTask({ auth }) {

    const { addTask } = UseTask()

    const title = useRef(null)
    const description = useRef(null)
    const author = useRef(null)

    const handleClick = () => {
        try {
            addTask(title.current.value, description.current.value, author.current.value)
            alert('Tarefa adicionada com sucesso.')
            window.location.href = '/dashboard';
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Nova Tarefa</h2>}
        >

            <Head title="Nova Tarefa" />

            <main className="flex flex-col min-h-screen px-40 pt-10">
                <form className="mb-4">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                            Título:
                        </label>
                        <input
                            required
                            ref={title}
                            type="text"
                            id="title"
                            name="title"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Título"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                            Descrição:
                        </label>
                        <input
                            required
                            ref={description}
                            type="text"
                            id="description"
                            name="description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Descrição"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
                            Responsável:
                        </label>
                        <input
                            required
                            ref={author}
                            type="text"
                            id="author"
                            name="author"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ex: Rodrigo Azevedo"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <button
                            type="button"
                            onClick={handleClick}
                            className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </main>
        </AuthenticatedLayout>
    )
}