@extends('layouts/app')

@section('title', 'Create')

@section('content')
    <div class="container mt-5">
        <h1>Novo Jogo</h1>
        <form action="{{ route('jogos-store') }}" method="POST">
            @csrf
            <div class="form-group">
                <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input class="form-control" type="text" name="nome" placeholder="Nome">
                </div>
                <br>
                <div class="form-group">
                    <label for="cartegoria">Categoria:</label>
                    <input class="form-control" type="text" name="cartegoria" placeholder="Categoria">
                </div>
                <br>
                <div class="form-group">
                    <label for="ano_criacao">Ano Criação:</label>
                    <input class="form-control" type="number" name="ano_criacao" placeholder="Ano de Criação">
                </div>
                <br>
                <div class="form-group">
                    <label for="valor">Valor:</label>
                    <input class="form-control" type="number" name="valor" placeholder="Valor">
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