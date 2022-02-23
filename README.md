# Desafio-Livraria-SoftDesign

Passos para rodar o backend:
1. Execute o comando `yarn` ou `npm -i`
2. Preencha o arquivo `ormconfig.json` com os dados do seu banco
3. Execute o comando `yarn seed-db` para preencher os dados do banco postgres
4. Execute o comando `yarn start` para rodar o servidor em `http://localhost:4000/`

Rotas
1. (get) - Rota -> `/`           Response -> `json` com a lista de livros
2. (get) - Rota -> `/book/:id`   Response -> `json` com as informações do livro com o `id` fornecido

-------------------------------

Passos para rodar o front:
1. Execute o comando `yarn` ou `npm -i`
2. Execute o comando `yarn dev`
3. Acessar o projeto em `http://localhost:3000/`
