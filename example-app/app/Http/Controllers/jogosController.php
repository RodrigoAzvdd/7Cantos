<?php

namespace App\Http\Controllers;

use App\Models\Jogo;
use Illuminate\Http\Request;

class jogosController extends Controller
{
    public function index()
    {
        $jogos = Jogo::all();
        return view('jogos.index', ['jogos'=>$jogos]);
    }
}
