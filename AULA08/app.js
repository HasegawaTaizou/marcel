// Criar API

// Express - dependencia do node que permite a integração entre o protocolo HTTP com o código
// npm install expresss --save

// Cors - gerenciador de permissões para o protocolo
// npm install cors --save

// Body-parser - É uma dependencia que permite manipular dados enviados pelo body da requisição
// npm install body-parser --save

//Import das dependencias para criar a API
//responsavel pelas requisições
const express = require("express");
//responsavel pelas permissoes das requisições
const cors = require("cors");
//responsável pela manipulação do body da requisição :)
const bodyParser = require("body-parser");

//cria um objeto com as informações da classe express
const app = express();

app.use((request, response, next) => {
  //ja vem tudo privado. Liberando o que pode
  //permite gerenciar a origem das requisições da API
  //* - Significa que a API será publica
  //IP - Se colocar o IP, a API somente responderá para aquela maquina
  response.header("Access-Control-Allow-Origin", "*");

  //Permite gerenciar quais verbos (metodos) poderão fazer requisições
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  //Ativa no cors das requisições as permissões estabelecidas
  app.use(cors());

  next();
});

const estadosCidades = require("./modulo/estados_cidades.js");
const estados_cidades = require("./modulo/estados_cidades.js");

//endPoint

//endPoint para listar os estados
app.get("/estados", cors(), async function (request, response, next) {
  //chama a função que retorna os estados
  let listaDeEstados = estadosCidades.getListaDeEstados();
  if (listaDeEstados) {
    //retorna o json e o status code
    response.json(listaDeEstados);
    response.status(200);
  } else {
    response.status(500);
  }
});

//endpoint lista as caracteristicas do estado pela sigla
app.get("/estado/sigla/:uf", cors(), async function (request, response, next) {
  //:uf - é uma variavel que sera utilizada para passagem de valores na url da requisicao

  //recebe o valor da variavel uf que sera encaminhada na url da requisição
  let siglaEstado = request.params.uf;
  let statusCode;
  let dadosEstado = {};
  let estado;

  if (
    siglaEstado == "" ||
    siglaEstado == undefined ||
    siglaEstado.length != 2 ||
    !isNaN(siglaEstado)
  ) {
    statusCode = 400;
    dadosEstado.message =
      "Não é possível processar a requisição, pois a sigla do estado não foi informada, ou não antende a quantidade de caracteres (2 dígitos)";
  } else {
    estado = estadosCidades.getDadosEstado(siglaEstado);
    if (estado) {
      dadosEstado = estado;
      statusCode = 200;
    } else {
      statusCode = 404;
    }
  }
  response.status(statusCode);
  response.json(dadosEstado);
});

app.get("/capital/:uf", cors(), async function (request, response, next) {
  let siglaEstado = request.params.uf;
  let statusCode;
  let dadosCapital = {};
  let capital;

  if (
    siglaEstado == "" ||
    siglaEstado == undefined ||
    siglaEstado.length != 2 ||
    !isNaN(siglaEstado)
  ) {
    statusCode = 400;
    dadosCapital.message =
      "Não é possível processar a requisição, pois a sigla do estado não foi informada, ou não antende a quantidade de caracteres (2 dígitos)";
  } else {
    capital = estadosCidades.getCapitalEstado(siglaEstado);
    if (capital) {
      dadosCapital = capital;
      statusCode = 200;
    } else {
      statusCode = 404;
    }
  }

  response.status(statusCode);
  response.json(dadosCapital);
});

app.get(
  "/estados-regiao/:regiao",
  cors(),
  async function (request, response, next) {
    let nomeRegiao = request.params.regiao;
    let statusCode;
    let dadosEstadosRegiao = {};
    let regiao;

    if (
      nomeRegiao == "" ||
      nomeRegiao == undefined ||
      // nomeRegiao.length != 2 ||
      !isNaN(nomeRegiao)
    ) {
      statusCode = 400;
      dadosEstadosRegiao.message =
        "Não é possível processar a requisição, pois a sigla do estado não foi informada, ou não antende a quantidade de caracteres (2 dígitos)";
    } else {
      regiao = estadosCidades.getEstadosRegiao(nomeRegiao);
      if (regiao) {
        dadosEstadosRegiao = regiao;
        statusCode = 200;
      } else {
        statusCode = 404;
      }
    }

    response.status(statusCode);
    response.json(dadosEstadosRegiao);
  }
);

app.get("/capitais", cors(), async function (request, response, next) {
  let statusCode;
  let dadosCapitais = {};

  let listaCapitais = estadosCidades.getCapitalPais();
  if (listaCapitais) {
    dadosCapitais = listaCapitais;
    statusCode = 200;
  } else {
    statusCode = 500;
  }

  response.status(statusCode);
  response.json(dadosCapitais);
});

// app.get("/cidades/:uf", cors(), async function (request, response, next) {
//   let nomeEstado = request.params.uf;
//   let statusCode;
//   let dadosCidades = {};
//   let cidades;

//   if (
//     nomeEstado == "" ||
//     nomeEstado == undefined ||
//     nomeEstado.length != 2 ||
//     !isNaN(nomeEstado)
//   ) {
//     statusCode = 400;
//     dadosCidades.message =
//       "Não é possível processar a requisição, pois a sigla do estado não foi informada, ou não antende a quantidade de caracteres (2 dígitos)";
//   } else {
//     cidades = estadosCidades.getCidades(nomeEstado);
//     if (cidades) {
//       dadosCidades = cidades;
//       statusCode = 200;
//     } else {
//       statusCode = 404;
//     }
//   }

//   response.status(statusCode);
//   response.json(dadosCidades);
// });

app.get("v1/senai/cidades", cors(), async function (request, response, next) {
  let nomeEstado = request.query.uf;

  let statusCode;
  let dadosCidades = {};
  let cidades;

  if (
    nomeEstado == "" ||
    nomeEstado == undefined ||
    nomeEstado.length != 2 ||
    !isNaN(nomeEstado)
  ) {
    statusCode = 400;
    dadosCidades.message =
      "Não é possível processar a requisição, pois a sigla do estado não foi informada, ou não antende a quantidade de caracteres (2 dígitos)";
  } else {
    cidades = estadosCidades.getCidades(nomeEstado);
    if (cidades) {
      dadosCidades = cidades;
      statusCode = 200;
    } else {
      statusCode = 404;
    }
  }
  response.status(statusCode);
  response.json(dadosCidades);
});

//Permite carregar os endpoints criados e aguardar as requisições pelo protocolo HTTP na porta 8080
app.listen(8080, function () {
  console.log("Servidor aguardando requisições na porta 8080");
});
