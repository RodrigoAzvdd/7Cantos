# Todo List - Estágio na 7Cantos

Bem-vindo ao projeto da Todo List da empresa 7Cantos! Este é um projeto de exemplo desenvolvido como parte do processo de seleção para a vaga de estágio na 7Cantos.

## Conteúdo

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)

## Visão Geral

Este projeto é uma aplicação de lista de tarefas (Todo List) desenvolvida usando React, Vite e TypeScript. O objetivo é demonstrar minhas habilidades e conhecimentos como candidato à vaga de estágio na 7Cantos. A aplicação permite que os usuários criem, excluam e marquem tarefas como concluídas.

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
    git clone https://github.com/seu-usuario/seu-projeto.git
    cd seu-projeto
2. Instale as dependências:

    ```bash
   npm install

## Executando o Projeto

Após a instalação, você pode iniciar o servidor de desenvolvimento local:

    npm run dev

Isso iniciará o aplicativo e estará acessível em http://localhost:3000.










