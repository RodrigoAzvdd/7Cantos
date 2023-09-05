@extends('layouts.app')

@section('title', 'Tasks')

@section('content')
    <main>
        <div class="flex justify-between items-center">
            <h1 class="text-3xl font-semibold pb-5">Tarefas</h1>
            <a href="{{ route('tasks-create') }}"
                class="px-2 py-1 bg-green-600 rounded-sm hover:bg-green-500 transition text-white">Nova Tarefa</a>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
            <thead>
                <tr class="bg-gray-800 text-white">
                    <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                    <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Título</th>
                    <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Descrição</th>
                    <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Responsável</th>
                    <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Ações</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @if ($tasks->count() == 0)
                    <td class="pt-2">Nenhuma Tarefa Cadastrada!</td>
                @else
                    @foreach ($tasks as $task)
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">{{ $task->id }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ $task->title }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ $task->description }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ $task->author }}</td>
                            <td class="px-6 py-4 whitespace-nowrap flex gap-3">
                                <a href="{{ route('tasks-edit', ['id'=>$task->id])}}"
                                    class="px-2 py-1 bg-blue-500 rounded-sm hover:scale-110 transition text-sm text-white">Editar</a>
                                <form method="POST" action="{{ route('tasks-destroy', ['id' => $task->id]) }}">
                                    @csrf
                                    @method('delete')
                                    <button type="submit"
                                        class="px-2 py-1 bg-red-600 rounded-sm hover:scale-110 transition text-sm text-white">Deletar</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                @endif

            </tbody>
        </table>

    </main>
@endsection
