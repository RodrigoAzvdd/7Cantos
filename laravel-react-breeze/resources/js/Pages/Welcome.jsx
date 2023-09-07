import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col justify-center items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <h1 className='text-6xl text-white'>Gerenciador de Tarefas</h1>
                <div className="p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="duration-300 bg-black px-4 py-2 rounded-md text-lg font-semibold text-white hover:text-black hover:bg-white transition :hover:text-white"
                        >
                            Tarefas
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="duration-300 bg-black px-4 py-2 rounded-md text-lg font-semibold text-white hover:text-black hover:bg-white transition :hover:text-white"
                            >
                                Entrar
                            </Link>

                            <Link
                                href={route('register')}
                                className="duration-300 bg-black px-4 py-2 rounded-md text-lg ml-4 font-semibold text-white hover:text-black hover:bg-white transition"
                            >
                                Registrar
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
