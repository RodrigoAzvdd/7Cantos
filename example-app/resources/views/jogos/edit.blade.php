@extends('layouts/app')

@section('title', 'Editar')
    
@section('content')
    <div class="container mt-5">
        <h1>Editando: {{ $jogos->nome }}</h1>
        <form>
            @csrf
            <div class="form-group">
                <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input class="form-control" type="text" name="nome" placeholder="Nome" value="{{$jogos->nome}}">
                </div>
                <br>
                <div class="form-group">
                    <label for="cartegoria">Categoria:</label>
                    <input class="form-control" type="text" name="cartegoria" placeholder="Categoria" value="{{$jogos->cartegoria}}">
                </div>
                <br>
                <div class="form-group">
                    <label for="ano_criacao">Ano Criação:</label>
                    <input class="form-control" type="number" name="ano_criacao" placeholder="Ano de Criação" value="{{$jogos->ano_criacao}}">
                </div>
                <br>
                <div class="form-group">
                    <label for="valor">Valor:</label>
                    <input class="form-control" type="number" name="valor" placeholder="Valor" value="{{$jogos->valor}}">
                </div>
                <br>
                <div class="form-group">
                    <input class="btn btn-success" type="submit" name="submit">
                </div>
            </div>
        </form>
        <br>
        <a href="/jogos" class="btn btn-danger">Voltar</a>
    </div>
@endsection