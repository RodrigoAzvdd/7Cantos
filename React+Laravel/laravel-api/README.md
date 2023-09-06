# Laravel API README

Este README fornece uma visão geral de como criar uma API usando Laravel, passo a passo.

## Índice
- Introdução
- Pré-requisitos
- Começando
- Configuração do Banco de Dados
- Model e Migration
- Controller
- Rotas
- Executando a API
- Endpoint da API

## 1. Introdução
Este projeto de API Laravel demonstra a criação de uma API simples para gerenciar tarefas. A API permitirá que você realize operações básicas de CRUD (Create, Read, Update, Delete) em tarefas e retorne respostas JSON, que podem ser consumidas por um aplicativo frontend, como um aplicativo React.

## 2. Pré-requisitos
Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados:

- PHP
- Composer
- Laravel (instalado globalmente)
- MySQL (ou um banco de dados compatível)
- Um ambiente de desenvolvimento integrado (IDE) de sua escolha

## 3. Começando
Comece criando um novo projeto Laravel usando o Composer. Execute o seguinte comando:
    ```bash
    composer create-project laravel/laravel laravel-api
