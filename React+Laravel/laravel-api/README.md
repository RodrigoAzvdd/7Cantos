# Laravel API README

Este README fornece uma visão geral de como criei uma API usando Laravel, passo a passo.

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
Este projeto de API Laravel demonstra a criação de uma API simples para gerenciar tarefas. A API permitirá que você realize operações básicas de CRUD (Create, Read, Update, Delete) em tarefas e retorne respostas JSON, que podem ser consumidas por um aplicativo frontend, usando o React, neste caso.

## 2. Pré-requisitos

- PHP
- Composer
- Laravel (instalado globalmente)
- MySQL

## 3. Começando
Comecei criando um novo projeto Laravel usando o Composer. Executei o seguinte comando:

    composer create-project laravel/laravel laravel-api

## 4. Configuração do Banco de Dados
Criei um banco de dados MySQL. Executei o seguinte comando no prompt de comando do MySQL:

    CREATE DATABASE api-tasks;

Atualizei o arquivo .env no diretório do projeto Laravel com os detalhes de conexão do banco de dados (DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD).

## 5. Model e Migration
Criei um modelo e sua respectiva migration para a entidade "Task". Executei os seguintes comandos:

    php artisan make:model Task -m

Isso irá gerar um modelo Task e um arquivo de migration. Editei o arquivo de migration para definir os atributos title, description e author para a tabela "tasks".

Executei a migration para criar a tabela no banco de dados:

    php artisan migrate

## 6. Controller
Criei um controller para gerenciar as tarefas. Executei o seguinte comando para gerar um controller com métodos CRUD:

    php artisan make:controller TaskController

No TaskController, você pode implementar a lógica para criar, ler, atualizar e deletar tarefas.

## 7. Rotas
Criei as rotas para a API no arquivo routes/api.php.

## 8. Executando a API
Para executar a API, executei o seguinte comando:

    php artisan serve

A API estará disponível em http://localhost:8000.

## 9. Endpoint da API
Acessei os endpoints da API para realizar operações CRUD nas tarefas. Por exemplo:

- GET /api/tasks: retorna todas as tarefas
- POST /api/tasks: cria uma nova tarefa
- GET /api/tasks/{id}: retorna uma tarefa específica
- PUT /api/tasks/{id}: atualiza uma tarefa existente
- DELETE /api/tasks/{id}: exclui uma tarefa
