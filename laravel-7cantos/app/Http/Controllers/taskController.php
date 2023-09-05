<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class taskController extends Controller
{
    public function index() {
        $task = Task::all();
        dd($task);
    }
}
