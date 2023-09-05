<?php

use App\Http\Controllers\jogosController;
use Illuminate\Support\Facades\Route;


Route::prefix('jogos')->group(function() {
    Route::get('/', [jogosController::class, 'index'])->name('jogos-index');
    Route::get('/create', [jogosController::class, 'create'])->name('jogos-create');
    Route::post('/', [jogosController::class, 'store'])->name('jogos-store');
    Route::get('/{id}/edit', [jogosController::class, 'edit'])->where('id', '[0-9]+')->name('jogos-edit');
    Route::put('/{id}', [jogosController::class, 'update'])->where('id', '[0-9]+')->name('jogos-update');
    Route::delete('/{id}', [jogosController::class, 'destroy'])->where('id', '[0-9]+')->name('jogos-destroy');
});

Route::fallback(function () {
    return 'ERROR';
});
