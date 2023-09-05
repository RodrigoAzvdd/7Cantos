@extends('layouts.app')

@section('title', 'Cadastro Tarefa')

@section('content')
    <main>
        <div class="flex justify-between items-center">
            <h1 class="text-3xl font-semibold pb-5">Novo Formulário</h1>
        </div>
        <form method="POST" action="{{ route('tasks-store') }}">
            @csrf
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                    Título:
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title" name="title" type="text" placeholder="Título">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                    Descrição:
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description" name="description" type="text" placeholder="Descrição">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="author">
                    Responsável:
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" id="author" name="author" placeholder="Ex: Rodrigo Azevedo">
            </div>
            <div class="flex items-center gap-5">
                <button
                    class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Cadastrar
                </button>
            </div>
        </form>
    </main>
@endsection
