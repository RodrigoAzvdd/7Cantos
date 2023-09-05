<?php

use App\Http\Controllers\jogosController;
use Illuminate\Support\Facades\Route;




// Route::view('/jogos', 'jogos');

// Route::get('/jogos', function() {
//     return "Curso de Laravel";
// });

// Route::view('/jogos', 'jogos', ['name' => 'gta']);

Route::get('/jogos', [jogosController::class, 'index']);

Route::get('/casa', function () {
    return view('welcome');
})->name('home-index');

Route::fallback(function () {
    return 'ERROR';
});
