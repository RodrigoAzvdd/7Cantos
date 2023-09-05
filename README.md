# Todo List

Bem-vindo ao projeto da Todo List da empresa 7Cantos! Este é um projeto de exemplo desenvolvido como parte do processo de seleção para a vaga de estágio na 7Cantos.

## Conteúdo

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)

## Visão Geral

Este projeto foi dividido em duas partes: React e Laravel. A explicação a seguir se concentra na parte React do projeto.

(Todo List) desenvolvida usando React, Vite e TypeScript. O objetivo é demonstrar minhas habilidades e conhecimentos como candidato à vaga de estágio na 7Cantos. A aplicação permite que os usuários criem, excluam e marquem tarefas como concluídas.

## Funcionalidades

- **TaskContext**: O contexto TaskContext gerencia tarefas e fornece funções para adicionar, remover e marcar tarefas como concluídas. Além disso, utiliza o Local Storage para persistência de valores.

- **Componentes**:
  - `Button`: Um componente reutilizável que recebe texto, função e cor como props e é usado para renderizar botões em vários lugares do aplicativo.
  - `Form`: Permite adicionar uma nova tarefa com base nos valores inseridos no formulário.
  - `TaskCard`: Renderiza tarefas individuais, permitindo a remoção e marcação de tarefas como concluídas.
  - `TaskList`: Exibe uma lista de tarefas com opções de filtragem (todas, concluídas ou não concluídas).

- **App.tsx**: Utiliza o contexto TaskContext para gerenciar as tarefas e exibi-las na interface do usuário. Ele inclui um estado para armazenar as tarefas filtradas com base em seu estado de conclusão.

## Instalação

Para começar, siga os passos abaixo:

1. Clone este repositório:

    ```bash
    git clone https://github.com/RodrigoAzvdd/7Cantos.git
    cd seu-projeto
2. Instale as dependências:

    ```bash
   npm install

## Executando o Projeto

Após a instalação, você pode iniciar o servidor de desenvolvimento local:

    npm run dev

Isso iniciará o aplicativo e estará acessível em http://localhost:3000.


# CRUD com Laravel

### Configuração Inicial

- Criei a aplicação Laravel com `composer create-project laravel/laravel laravel-7cantos`.
- Configurei o meu Banco de Dados (MySQL) com o arquivo `.env` do Laravel.

### Rotas e Controladores

- Na pasta `routes/web.php`, criei rotas para o CRUD, utilizando métodos para criação, atualização, leitura e exclusão de dados.

### Model e Controller

- Criei um Model de tarefas com os seguintes campos: `title`, `description` e `author`.
- Desenvolvi um Controller com os seguintes métodos:

#### `index`

- Responsável por listar as tarefas.

#### `store`

- Utilizado para criar uma nova tarefa a partir dos valores preenchidos pelo usuário no formulário e enviá-la para o banco de dados.

#### `update`

- Este método busca uma tarefa por meio de um ID passado por parâmetro, atualiza seus dados com base em um formulário e envia os dados atualizados para o banco de dados.

#### `delete`

- Responsável por buscar uma tarefa por meio de um ID passado por parâmetro e deletar essa tarefa do banco de dados.

### Interface com Tailwind CSS

- Utilizei o framework de design Tailwind CSS junto com as views do Laravel para proporcionar uma experiência de interação amigável com o usuário.







