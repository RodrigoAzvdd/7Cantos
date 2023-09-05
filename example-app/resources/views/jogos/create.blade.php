@extends('layouts/app')

@section('title', 'Create')

@section('content')
    <form action="{{ route('jogos-store') }}" method="POST">
        @csrf
        <input type="text" name="nome" placeholder="Nome">
        <input type="text" name="cartegoria" placeholder="Categoria">
        <input type="number" name="ano_criacao" placeholder="Ano de Criação">
        <input type="number" name="valor" placeholder="Valor">
        <input type="submit" name="submit">
    </form>
@endsection 
