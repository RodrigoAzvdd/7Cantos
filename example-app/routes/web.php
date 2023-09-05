<?php

use Illuminate\Support\Facades\Route;




// Route::view('/jogos', 'jogos');

// Route::get('/jogos', function() {
//     return "Curso de Laravel";
// });

// Route::view('/jogos', 'jogos', ['name' => 'gta']);

Route::get('jogos/{id?}/{name?}', function($name = null, $id = null) {
    return view('jogos', ['nomeJogo'=>$name, 'idJogo'=>$id]);
}) ->where(['name'=>'[A-Za-z]+', 'id'=>'[0-9]+']);

Route::get('/casa', function () {
    return view('welcome');
})->name('home-index');

Route::fallback(function() {
    return 'ERROR';
});