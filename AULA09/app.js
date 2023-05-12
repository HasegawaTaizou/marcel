/*******************************************************************************************
 * Objetivo: API para interagir com o Banco de Dados (GET, POST, DELETE, PUT)
 * Data: 14/04/2023
 * Autor: Camila Pinheiro
 * Versão: 1.0
 ********************************************************************************************/

/*
   Para realizar a conecxão com o Banco de Dados iremos utilizar o PRISMA 
       npm install prisma --save
       npx prisma 
       npx prisma init 
       npm install @prisma/client 
*/

// Import das bibliotecas do projeto
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { request, response } = require("express");

// Cria objeto app utilizando  a classe do express
const app = express();

// Configura as permissões do cors
app.use((request, response, next) => {
  // Permissões de origem da requisição
  response.header("Access-Control-Allow-Origin", "*");

  // Permissões de métodos que serão utilizados na API
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PUT, OPTIONS"
  );
  app.use(cors());

  // Continua para a leitura dos EndPoints
  next();
});

/**************************************************************************************************
 * EndPoint: Tabela de aluno
 * Versão: 1.0
 * Data: 14/04/2023
 ***************************************************************************************************/

// Criando uma const para realizar o processo de padronização de dados que irão chegar no body da requisição
const bodyJSON = bodyParser.json();

// Import da controller do aluno
const controllerAluno = require("./controller/controller_aluno.js");
var message = require("./controller/modulo/config.js");

//EndPoint: Retorna todos os dados de alunos
app.get("/v1/lion-school/aluno", cors(), async function (request, response) {
  // Solicita a controller que retorne todos os alunos do BD
  let dados = await controllerAluno.selecionarTodosAlunos();
  console.log(dados);

  // Valida se existem registros para retornar na requisição
  response.status(dados.status);
  response.json(dados);
});

//EndPoint: Retorna dados do aluno pelo ID
app.get(
  "/v1/lion-school/aluno/:id",
  cors(),
  async function (request, response) {

    // Recebe o id enviado na requisição 
    let idAluno = request.params.id;
    console.log(idAluno);
    

    // Solicita a controller que retorne todos os alunos do BD
    let dados = await controllerAluno.buscarIdAluno(idAluno);
    console.log(dados);

    // Valida se existem registros para retornar na requisição
    response.status(dados.status);
    response.json(dados);
  }
);

//EndPoint: Inserir um nome aluno
app.post(
  "/v1/lion-school/aluno",
  cors(),
  bodyJSON,
  async function (request, response) {
    let contentType = request.headers["content-type"];

    if (String(contentType).toLowerCase() == "application/json") {
      // recebe os dados encaminhados no body da requisição
      let dadosBody = request.body;

      // Envia os dados para a controller
      let resultInsertDados = await controllerAluno.inserirAluno(dadosBody);

      // Retorna o status code e a message
      response.status(resultInsertDados.status);
      response.json(resultInsertDados);
    } else {
      response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
      response.json(message.ERROR_INVALID_CONTENT_TYPE);
    }
  }
);

//EndPoint: Atualiza um aluno pelo ID
app.put(
  "/v1/lion-school/aluno/:id",
  bodyJSON,
  cors(),
  async function (request, response) {
    let dadosBody = request.body;

    console.log(dadosBody);

    // Rebece o id do aluno
    let idAluno = request.params.id;
    // console.log(idAluno);

    // Encaminhando os dados para serem atualizados
    let resultUpdateDados = await controllerAluno.atualizarAluno(
      dadosBody,
      idAluno
    );

    // console.log(resultUpdateDados);

    response.status(resultUpdateDados.status);
    response.json(resultUpdateDados);
  }
);

//EndPoint: Exclui um aluno pelo ID
app.delete(
  "/v1/lion-school/aluno/:id",
  cors(),
  async function (request, response) {
    // Rebece o id do aluno
    let idAluno = request.params.id;

    // Encaminhando os dados para serem atualizados
    let resultDeleteDados = await controllerAluno.deletarAluno(idAluno);

    response.status(resultDeleteDados.status);
    response.json(resultDeleteDados);
  }
);

app.listen(8080, function () {
  console.log("Servidor aguardando requisições na porta 8080!");
});
