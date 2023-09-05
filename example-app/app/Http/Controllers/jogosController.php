<?php

namespace App\Http\Controllers;

use App\Models\Jogo;
use Illuminate\Http\Request;

class jogosController extends Controller
{
    public function index()
    {
        $jogos = Jogo::all();
        return view('jogos.index', ['jogos' => $jogos]);
    }

    public function create()
    {
        return view('jogos.create');
    }

    public function store(Request $request)
    {
        Jogo::create($request->all());
        return redirect()->route('jogos-index');
    }

    public function edit($id)
    {
        $jogos = Jogo::where('id', $id)->first();
        if (empty($jogos)) {
            return redirect()->route('jogos-index');
        } else {
            return view('jogos.edit', ['jogos'=>$jogos]);
        }
    }
}
