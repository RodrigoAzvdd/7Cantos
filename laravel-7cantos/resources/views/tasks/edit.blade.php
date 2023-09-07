@extends('layouts.app')

@section('title', 'Editar Tarefa')

@section('content')
    <main>
        <div class="flex justify-between items-center">
            <h1 class="text-3xl font-semibold pb-5">Editar Tarefa</h1>
        </div>
        <form action="{{ route('tasks-update', ['id' => $task->id]) }}" method="POST">
            @csrf
            @method('PUT')
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                    Título:
                </label>
                <input required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title" name="title" type="text" value="{{ $task->title }}" placeholder="Título">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                    Descrição:
                </label>
                <input required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description" name="description" type="text" value="{{ $task->description }}"
                    placeholder="Descrição">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="author">
                    Responsável:
                </label>
                <input required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" id="author" name="author" value="{{ $task->author }}"
                    placeholder="Ex: Rodrigo Azevedo">
            </div>
            <div class="flex items-center gap-5">
                <input
                    class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" value="Atualizar">

            </div>
        </form>
    </main>
@endsection
