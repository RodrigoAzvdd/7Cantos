# Meu Projeto React

Este projeto foi criado usando Vite + TypeScript e consiste em uma aplicação de gerenciamento de tarefas. Ele utiliza um Context chamado TaskContext para armazenar e manipular as tarefas.

## Funcionalidades

- Adicionar uma tarefa
- Remover uma tarefa
- Armazenar as tarefas em um estado usando useState
- Utilizar o localStorage para simular um backend
- Cada tarefa possui os atributos: name, description, id e isFinished (para saber se a tarefa foi finalizada)

## Componentes

### Button

Este componente recebe as seguintes props:
- color: cor do botão
- text: texto do botão
- func: função que será acionada pelo evento onClick do botão

### Form

Este componente utiliza o contexto TaskContext para receber a função de adicionar uma tarefa. Ele utiliza inputs para que o usuário possa criar uma nova tarefa e passá-la para a função.

### TaskList

Este componente recebe a seguinte prop:
- tasks: array de tarefas que será utilizada para listar todas as tarefas em uma lista <ul>. Cada tarefa é renderizada como um componente TaskCard.

### TaskCard

Este componente recebe a seguinte prop:
- task: uma tarefa que será renderizada com seus respectivos valores (name e description)

Cada componente foi criado em pastas separadas e possui seu respectivo arquivo style.module.css para estilização.

## Arquivo App.tsx

No arquivo App.tsx, foram realizadas as seguintes ações:
- Utilização do contexto para receber a array de tarefas
- Criação de um estado com useState para armazenar o valor do select que será retornado pelo App
- Criação da variável 'filteredTasks' que filtra a array de tarefas com base no status de isFinished, retornando uma array filtrada
- O componente App.tsx retorna:
  - O componente <Form />
  - Um select que, com o evento onChange, altera o valor de filterOption
  - O componente TaskList, que recebe a array filteredTasks

## Executando o projeto

Para executar o projeto, siga os passos abaixo:
1. Execute o comando `npm install` para instalar as dependências
2. Execute o comando `npm run dev` para iniciar o projeto
