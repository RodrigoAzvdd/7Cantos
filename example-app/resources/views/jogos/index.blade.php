@extends('layouts/app')

@section('title', 'Listagem')
    
@section('content')
    <div class="container">
      <h1>Listagem de Jogos</h1>
      <a class="btn btn-dark" href="{{ route('jogos-create') }}">Novo Jogo</a>
      <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Categoria</th>
              <th scope="col">Ano de Criaçao</th>
              <th scope="col">Valor</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            @foreach ($jogos as $jogo)
            <tr>
              <td>{{$jogo->id}}</td>
              <td>{{$jogo->nome}}</td>
              <td>{{$jogo->cartegoria}}</td>
              <td>{{$jogo->ano_criacao}}</td>
              <td>{{$jogo->valor}}</td>
              <td><a href="{{ route('jogos-edit', ['id'=>$jogo->id]) }}" class="btn btn-primary">Editar</a><td>
            </tr>
            @endforeach
          </tbody>
      </table>
    </div>
@endsection