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

//endPoint

//endPoint para listar os estados
app.get("/estados", cors(), async function (request, response, next) {
  const estadosCidades = require("./modulo/estados_cidades.js");
  let listaDeEstados = estadosCidades.getListaDeEstados();

  response.json(listaDeEstados);
  response.status(200);
});

//Permite carregar os endpoints criados e aguardar as requisições pelo protocolo HTTP na porta 8080
app.listen(8080, function () {
  console.log("Servidor aguardando requisições na porta 8080");
});
