# Projeto React + Laravel com Autenticação Breeze

Neste README, descreverei como executei a criação do projeto React + Laravel com autenticação Breeze, passo a passo.

## Configuração Inicial

Para começar, você precisa ter o Laravel, PHP, Composer e MySQL instalados em seu ambiente. Certifique-se de que todas essas dependências estejam configuradas antes de prosseguir.

### Passo 1: Criei o Projeto Laravel

Utilizei o seguinte comando para criar um novo projeto Laravel:

    php artisan breeze:install

### Passo 2: Executei a Migração do Banco de Dados

Executei a migração para criar as tabelas necessárias no banco de dados:

    php artisan migrate

### Passo 3: Instalei as Dependências do Frontend

Utilizei o npm para instalar as dependências do frontend:

    npm install

### Passo 4: Executei o Servidor de Desenvolvimento

Para iniciar o projeto, executei o servidor de desenvolvimento Vite:

    npm run dev

# Laravel API

Visão geral de como criei uma API usando Laravel, passo a passo.

## Índice
- Introdução
- Pré-requisitos
- Configuração do Banco de Dados
- Model e Migration
- Controller
- Rotas
- Executando a API
- Endpoint da API

## 1. Introdução
Este projeto de API Laravel demonstra a criação de uma API para gerenciar tarefas. A API permitirá que você realize operações de CRUD (Create, Read, Update, Delete) em tarefas e retorne respostas JSON, que podem ser consumidas por um aplicativo frontend, usando o React, neste caso.

## 2. Pré-requisitos

- PHP
- Composer
- Laravel (instalado globalmente)
- MySQL

## 3. Configuração do Banco de Dados
Criei um banco de dados MySQL. Executei o seguinte comando no prompt de comando do MySQL:

    CREATE DATABASE react-laravel

Atualizei o arquivo .env no diretório do projeto Laravel com os detalhes de conexão do banco de dados (DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD).

## 4. Model e Migration
Criei um modelo e sua respectiva migration para a entidade "Task". Executei os seguintes comandos:

    php artisan make:model Task -m

Isso irá gerar um modelo Task e um arquivo de migration. Editei o arquivo de migration para definir os atributos title, description e author para a tabela "tasks".

Executei a migration para criar a tabela no banco de dados:

    php artisan migrate

## 5. Controller
Criei um controller para gerenciar as tarefas. Executei o seguinte comando para gerar um controller com métodos CRUD:

    php artisan make:controller TaskController

No TaskController, implementei a lógica para criar, ler, atualizar e deletar tarefas.

## 6. Rotas
Criei as rotas para a API no arquivo routes/api.php.

## 7. Executando a API
Para executar a API, executei o seguinte comando:

    php artisan serve

A API estará disponível em http://localhost:8000.

## 8. Endpoint da API
Acessei os endpoints da API para realizar operações CRUD nas tarefas. Por exemplo:

- GET /api/tasks: retorna todas as tarefas
- POST /api/tasks: cria uma nova tarefa
- GET /api/tasks/{id}: retorna uma tarefa específica
- PUT /api/tasks/{id}: atualiza uma tarefa existente
- DELETE /api/tasks/{id}: exclui uma tarefa

