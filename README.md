# Sobre o Sistema

> Este é um sistema de um website desenvolvido em React no frontend e Node.js no backend, utilizando MySQL como banco de dados. O sistema serve a uma empresa fictícia que se chama "Lince I.A.", que trata de reparações e preparações automotivas, tanto para pessoas físicas quanto para empresas.
> Neste site, há uma gama divercificada de objetos visuais e funções por trás, para facilitar o acesso ao website, que busca um público amplo e que, independente das situações pessoais, possa entender e utilizar dos serviços do site.

## Funcionalidades

- **Cadastro de Usuários:** Permite adicionar novos usuários ao sistema.
- **Listagem de Usuários:** Exibe uma lista de todos os usuários cadastrados.
- **Atualização de Usuários:** Permite atualizar as informações de um usuário existente.
- **Exclusão de Usuários:** Permite excluir um usuário do sistema.

- **Cadastro de Contatos:** Permite adicionar novos contatantes ao sistema.
- **Listagem de Contatos:** Exibe uma lista de todos os contatantes cadastrados.
- **Atualização de Contatos:** Permite atualizar as informações de um contatante existente.
- **Exclusão de Contatos:** Permite excluir um contatante do sistema.

## Senha e Email - necessario para Acessar a página de Adiministrador

- **Email:** admin@admin.com
- **Senha:** 12345

## Pré-requisitos

- Node.js.
- Node Package Manager (NPM).
- React.js.
- MySQL (+ Workbench).
- Visual Studio Code (VSCode) / ou qualquer outro Editor de Código Fonte.
- GitHub (+ Terminal GitBash)
- Axios (NPM)
- Router (NPM)
- Bootstrap (NPM)
- ...

> Utilize de ferramentas variadas como quiser para iniciar a aplicação, mas, cuidado com as extensões dos navegadores em que você trabalha, isso pode dificultar a vizualização de alguns elementos, tanto vizuais como mecânicos.

# Instalação

1. **Clone este repositório (GitBash):**

   ```gitbash
   git clone https://github.com/SouzinhaDEV/LinceIA.git

   ```

2. **Navegue até o diretório do projeto:**
    ````
   cd sistema-de-cadastro
   ````

4. **Instale as dependências (NPM) do frontend e do backend:**
   ````
   cd frontend
   npm install
   ````
   Após
   ````
   cd ../backend
   npm install
   ````

6. **Configuração do Banco de Dados:**
   > Execute o script SQL fornecido abaixo para criar as tabelas necessárias para o funcionamento do backend:

   ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
   CREATE DATABASE linceia;
   USE linceia;

   CREATE TABLE cadastros ( 
  	   idCadastro INT AUTO_INCREMENT NOT NULL,
  	   nome VARCHAR(150) NOT NULL,
  	   email VARCHAR(150) NOT NULL,
  	   senha VARCHAR(45) NOT NULL,
  	   telefone VARCHAR(20) NOT NULL,
  	   cpf VARCHAR(20) NOT NULL,
  	   CONSTRAINT `PRIMARY` PRIMARY KEY (idCadastro) 
   );

   CREATE TABLE contato (
	   idContato INT AUTO_INCREMENT NOT NULL,
	   nome VARCHAR(150) NOT NULL,
	   email VARCHAR(150) NOT NULL,
	   telefone VARCHAR (20) NOT NULL,
	   CONSTRAINT `PRIMARY` PRIMARY KEY (idContato)
   );
   ```````````````````````````````````````````````````````

7. Inicie o servidor backend:

   ````
   cd backend
   node server.js
   ````

9. Inicie o servidor frontend:

   ````
   cd frontend
   npm start
   ````

11. Acesse o sistema em http://localhost:3000.

## Tecnologias Utilizadas
   > - React
   > - Node.js
   > - Express
   > - MySQL
   > - Axios

## Estrutura de Arquivos Default (Base)

    sistema-de-cadastro/
    ├── backend/
    │   ├── db.js
    │   ├── routes.js
    │   └── server.js
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── CadastroForm.jsx
    │   │   │   ├── CadastroItem.jsx
    |   |   |   ├── Navegacao.jsx
    │   │   │   └── TabelaCadastro.jsx
    │   │   ├── App.js
    │   │   ├── index.js
    │   │   └── Routes.js
    │   └── ...
    └── README.md

# Criado e idealizado por
> William Reis, Rodrigo Alvarez e Enzo Patti. (BASE)
> Victor Garuti, Rodrigo Oliveira Pereira, Vitor Terribile dos Anjos, Gustavo de Souza Rodrigues, Pedro Arthur da Silva Motta. (COMPLEMENTO)

## Contribuição
> Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões de melhorias, por favor, abra uma "issue" ou envie um "pull request". Este projeto foi uma colaboração entre professores e alunos do Senai!

## Licença
> Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE.md para mais detalhes.

**---------------------------------------------------------------- AOS DEVS !!!**

# Database
> Atenção, o DataBase é o "linceia", tudo minúsculo. A tabela do MySQL para os cadastros dos usuários se chama "cadastros", no plural. Já o ID de cada cadastro é no singular "idCadastro". NÃO CONFUNDIR!!!

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

CREATE DATABASE linceia;
USE linceia;

CREATE TABLE cadastros ( 
  	idCadastro INT AUTO_INCREMENT NOT NULL,
  	nome VARCHAR(150) NOT NULL,
  	email VARCHAR(150) NOT NULL,
  	senha VARCHAR(45) NOT NULL,
  	telefone VARCHAR(20) NOT NULL,
  	cpf VARCHAR(20) NOT NULL,
  	CONSTRAINT PRIMARY KEY (idCadastro) 
);

CREATE TABLE contato (
	idContato INT AUTO_INCREMENT NOT NULL,
	nome VARCHAR(150) NOT NULL,
	email VARCHAR(150) NOT NULL,
   comentario VARCHAR (300) NOT NULL,
	CONSTRAINT PRIMARY KEY (idContato)
);

CREATE TABLE login (
   id INT AUTO_INCREMENT NOT NULL,
   email VARCHAR(150) NOT NULL,
   senha VARCHAR(45) NOT NULL,
   CONSTRAINT PRIMARY KEY (idLogin)
);

CREATE TABLE dataset (
   idDataset INT AUTO_INCREMENT,
   EngRPM INT(5),
   FuelP DECIMAL,
   LubOilP DECIMAL,
   LubOilT DECIMAL,
   AirP DECIMAL,
   AirT DECIMAL,
   CONSTRAINT PRIMARY KEY (idDataset)
);

````````````````````````````````````````````````````````````
