/*
para realizar a conexão com o banco de dados iremos utilizar o PRISMA
npm install prisma --save
npx prisma
npx prisma init
npm install @prisma/client
*/

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  app.use(cors());

  next();
});

//Endpoint: Retorna todos os dados de alunos
app.get("/aluno", cors(), async function (request, response) {
  let controllerAluno = require("./controller/controller_aluno.js");

  //solicita a controller que retorne todos os alunos do banco de dados
  let dados = await controllerAluno.selecionarTodosAlunos();

  if (dados) {
    response.json(dados);
    response.status(200);
  } else {
    response.json();
    response.status(404);
  }
});

//Endpoint: Retorna dados do aluno pelo id
app.get(
  "v1/lion-school/aluno/:id",
  cors(),
  async function (request, response) {}
);

//Endpoint: Inserir novo aluno
app.post("v1/lion-school/aluno", cors(), async function (request, response) {});

//Endpoint: Atualiza um aluno pelo id
app.put(
  "v1/lion-school/aluno/:id",
  cors(),
  async function (request, response) {}
);

//Endpoint: Exclui um aluno pelo id
app.delete(
  "v1/lion-school/aluno/:id",
  cors(),
  async function (request, response) {}
);

app.listen(8080, function () {
  console.log("Servidor aguardando requisições na porta 8080");
});
