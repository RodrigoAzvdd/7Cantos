# Gerenciador de Tarefas com Laravel

### Pré-requisitos
- PHP
- Composer
- Laravel (instalado globalmente)
- MySQL
### Configuração Inicial
- Criei a aplicação Laravel com `composer create-project laravel/laravel 
laravel-7cantos`.
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