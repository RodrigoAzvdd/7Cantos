<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class taskController extends Controller
{
    public function index()
    {
        $task = Task::all();
        return view('tasks.index', ['tasks' => $task]);
    }

    public function create()
    {
        return view('tasks.create');
    }

    public function store(Request $request)
    {
        Task::create($request->all());
        return redirect()->route('tasks-index');
    }

    public function edit($id)
    {
        $task = Task::where('id', $id)->first();
        if (empty($task)) {
            return redirect()->route('tasks-index');
        } else {
            return view('tasks.edit', ['task' => $task]);
        }
    }

    public function update(Request $request, $id)
    {
        $data = [
            'title' => $request->title,
            'description' => $request->description,
            'author' => $request->author
        ];
        Task::where('id', $id)->update($data);
        return redirect()->route('tasks-index');
    }

    public function destroy($id)
    {
        Task::where('id', $id)->delete();
        return redirect()->route('tasks-index');
    }
}
