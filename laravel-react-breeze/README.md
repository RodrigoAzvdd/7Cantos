# Projeto React + Laravel com Autenticação Breeze

## Video Projeto:
https://github.com/RodrigoAzvdd/7Cantos/assets/103541108/63ff16b6-8ede-4138-a02f-cc6871f15959

## Imagens do Projeto:
### Página Inicial:
![firstPage](https://github.com/RodrigoAzvdd/7Cantos/assets/103541108/9c39b6fc-6857-444d-a72d-7f3660a52505)
### Página de Cadastro:
![LoginPage](https://github.com/RodrigoAzvdd/7Cantos/assets/103541108/eaa5ebe4-8270-4e6c-a532-b6e50285041b)
### Página de Login:
![RealLoginPage](https://github.com/RodrigoAzvdd/7Cantos/assets/103541108/17f9d703-257a-4edd-8874-a0e5a8d7c140)
### Dashboard:
![DashboardNoItems](https://github.com/RodrigoAzvdd/7Cantos/assets/103541108/0ac653ab-59d0-4c30-8286-1cf89dd9431c)
![DashboardItems](https://github.com/RodrigoAzvdd/7Cantos/assets/103541108/4cae0ca3-f3f0-435d-8531-3aea2fc8d9f8)
### Páginas Nova/Editar Tarefa:
![CreatePage](https://github.com/RodrigoAzvdd/7Cantos/assets/103541108/35fa47e3-44a8-4272-bca9-14724329b895)
![EditPage](https://github.com/RodrigoAzvdd/7Cantos/assets/103541108/405fbcf5-91ce-4a0c-9009-2a231b8ad0ba)
### Página do Usuário:
![ProfilePage](https://github.com/RodrigoAzvdd/7Cantos/assets/103541108/9581bcf3-0df9-4fb0-91b4-895e8a05d4f7)
### Banco de Dado MySQL:
![DataBase](https://github.com/RodrigoAzvdd/7Cantos/assets/103541108/5330e455-e9e5-4f10-be0e-e9b3ade55f9f)

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

# Interface React

O React deste projeto é responsável pela interface do usuário e pela interação com a API Laravel para gerenciar tarefas. Aqui estão os detalhes sobre como criei a Interface React:

### Custom Hook `UseTask.js`

Criei um hook personalizado chamado `UseTask.js`, que é responsável por gerenciar os métodos CRUD para as tarefas. Esse hook fornece as seguintes funcionalidades:

- `tasks`: Retorna um array de tarefas.
- Retorno de funções CRUD:
  - `addTask`: Adiciona uma nova tarefa.
  - `removeTask`: Remove uma tarefa.
  - `updateTask`: Atualiza uma tarefa.
  - `findTask`: Retorna uma tarefa específica.
  - `changeStatus`: Atualiza o status de uma tarefa específica.

### Gerenciamento de Requisições com Axios

Instalei a biblioteca Axios via npm para fazer requisições HTTP à API Laravel. Utilizei o Axios para realizar operações de GET, PUT, POST e DELETE nas tarefas.

### Páginas

Criei várias páginas React para gerenciar as tarefas:

#### 1. CreateTask

Esta página é responsável por coletar os dados do formulário e passá-los como parâmetro para a função `addTask`, criando uma nova tarefa.

#### 2. EditTask

A página `EditTask` possui uma rota dinâmica e é responsável por coletar os dados do formulário e atualizar a tarefa, passando os dados e o ID da tarefa como parâmetro da função `updateTask`.

#### 3. Dashboard

A página `Dashboard` é responsável por listar as tarefas em uma tabela. Cada linha da tabela exibe informações sobre a tarefa, incluindo ID, título, descrição, responsável e ações disponíveis.

As ações disponíveis em cada linha da tabela são:

- Editar: Redireciona o usuário para a rota da página `EditTask`, permitindo a edição da tarefa.
- Deletar: Deleta a tarefa por meio da função `removeTask`.

### Componentes

#### TaskTable

O componente `TaskTable` é responsável por exibir uma tabela que lista todas as tarefas cadastradas pelo usuário. Ele não recebe as tarefas como uma prop, mas sim obtém os dados diretamente do hook personalizado `UseTask`.

### Funcionalidades - TaskTable

- Renderiza uma tabela de tarefas.
- Exibe informações de cada tarefa, incluindo ID, título, descrição, responsável e ações disponíveis.
- Fornece ações para cada tarefa:
  - **Editar**: Permite ao usuário editar a tarefa, geralmente redirecionando para a página de edição correspondente.
  - **Deletar**: Permite ao usuário excluir a tarefa, acionando a função `removeTask` do hook `UseTask`.
  - **Marcar como concluída**: Permite ao usuário alterar o status da tarefa, acionando a função `changeStatus` do hook `UseTask`.

### Estilização

Para a estilização da Interface React, utilizei o framework Tailwind CSS para criar uma interface de usuário moderna e responsiva.

O React trabalha em conjunto com a API Laravel para fornecer uma experiência completa de gerenciamento de tarefas.
