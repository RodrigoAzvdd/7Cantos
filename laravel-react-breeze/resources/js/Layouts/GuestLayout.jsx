import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">

            <Link href='/' className='fixed top-10 left-10 px-7 py-2 bg-slate-700 rounded-lg text-white font-bold text-lg hover:bg-slate-500 transition duration-300 hover:scale-105'>
                Voltar
            </Link>

            <div>
                <h1 className='font-bold text-5xl'>Login</h1>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
