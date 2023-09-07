<?php

use App\Http\Controllers\taskController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/tasks');

Route::prefix('tasks')->group(function() {
    Route::get('/', [taskController::class, 'index'])->name('tasks-index');
    Route::get('/create', [taskController::class, 'create'])->name('tasks-create');
    Route::post('/', [taskController::class, 'store'])->name('tasks-store');
    Route::get('/{id}/edit', [taskController::class, 'edit'])->name('tasks-edit');
    Route::put('/{id}', [taskController::class, 'update'])->name('tasks-update');
    Route::delete('/{id}', [taskController::class, 'destroy'])->name('tasks-destroy');
});