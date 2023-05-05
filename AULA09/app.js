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

var message = require('./controller/modulo/config.js')

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  app.use(cors());

  next();
});

//criando uma const para realizar o processo de padronização de dados que vao chegar no body da requisição
const bodyJSON = bodyParser.json();

var controllerAluno = require("./controller/controller_aluno.js");

//Endpoint: Retorna todos os dados de alunos
// v1/lion-school/aluno
app.get("/v1/lion-school/alunos", cors(), async function (request, response) {
  console.log("entrou no get");

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
  "/v1/lion-school/aluno/:id",
  cors(),
  async function (request, response) {}
);

//Endpoint: Inserir novo aluno
app.post(
  "/v1/lion-school/aluno",
  cors(),
  bodyJSON,
  async function (request, response) {
    let contentType = request.headers["content-type"];

    if (String(contentType).toLowerCase() == "application/json") {
      //recebe os dados encaminhados no body da requisição
      let dadosBody = request.body;

      let resultInsertDados = await controllerAluno.inserirAluno(dadosBody);

      //retorna o status code e a message
      response.status(resultInsertDados.status);
      response.json(resultInsertDados);
    } else {
      response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
      response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }
  }
);

//Endpoint: Atualiza um aluno pelo id
app.put(
  "/v1/lion-school/aluno/:id",
  cors(),
  bodyJSON,
  async function (request, response) {
    let dadosBody = request.body;

    let idAluno = request.params.id;

    let resultUpdateDados = await controllerAluno.atualizarAluno(
      dadosBody,
      idAluno
    );

    response.status(resultUpdateDados.status);
    response.json(resultUpdateDados);
  }
);

//Endpoint: Exclui um aluno pelo id
app.delete(
  "/v1/lion-school/aluno/:id",
  cors(),
  async function (request, response) {
    let idAluno = request.params.id;

    let resultDeleteDados = await controllerAluno.deletarAluno(idAluno);

    response.status(resultDeleteDados.status);
    response.json(resultDeleteDados);
  }
);

app.listen(8080, function () {
  console.log("Servidor aguardando requisições na porta 8080");
});
