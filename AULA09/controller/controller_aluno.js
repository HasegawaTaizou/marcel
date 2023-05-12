//Implementa a regra de negócio entre o app e a model

//import do arquivo de acesso ao banco de dados
const { request } = require("express");

var alunoDAO = require("../model/DAO/alunoDAO.js");

//import do arquivo global de configuração do projeto
var message = require("./modulo/config.js");

//função para receber os dados do APP e enviar para a model para inserir novo item
const inserirAluno = async function (dadosAluno) {
  if (
    dadosAluno.nome == "" ||
    dadosAluno.nome == null ||
    dadosAluno.nome.length > 100 ||
    dadosAluno.cpf == "" ||
    dadosAluno.cpf == null ||
    dadosAluno.cpf.length > 18 ||
    dadosAluno.rg == "" ||
    dadosAluno.rg == null ||
    dadosAluno.rg.length > 15 ||
    dadosAluno.data_nascimento == "" ||
    dadosAluno.data_nascimento == null ||
    dadosAluno.data_nascimento.length > 10 ||
    dadosAluno.email == "" ||
    dadosAluno.email == null ||
    dadosAluno.email.length > 250
  ) {
    return message.ERROR_REQUIRED_DATA;
  } else {
    //Envia os dados para a model a serem inseridos no BD
    let status = await alunoDAO.insertAluno(dadosAluno);

    if (status) {
      return message.CREATED_ITEM;
    } else {
      return message.ERROR_INTERNAL_SERVER;
    }
  }
};

//função para receber os dados do APP e enviar para a model para atualizar um item existente
const atualizarAluno = async function (dadosAluno, idAluno) {
  if (
    dadosAluno.nome == "" ||
    dadosAluno.nome == null ||
    dadosAluno.nome.length > 100 ||
    dadosAluno.cpf == "" ||
    dadosAluno.cpf == null ||
    dadosAluno.cpf.length > 18 ||
    dadosAluno.rg == "" ||
    dadosAluno.rg == null ||
    dadosAluno.rg.length > 15 ||
    dadosAluno.data_nascimento == "" ||
    dadosAluno.data_nascimento == null ||
    dadosAluno.data_nascimento.length > 10 ||
    dadosAluno.email == "" ||
    dadosAluno.email == null ||
    dadosAluno.email.length > 250
  ) {
    return message.ERROR_REQUIRED_DATA;

    //validação para o id
  } else if (idAluno == "" || idAluno == undefined || isNaN(idAluno)) {
    return message.ERROR_REQUIRED_ID;
  } else {
    //Adiciona o id no json com todos os dados
    dadosAluno.id = idAluno;

    //encaminha para o dao os dados para serem alterados
    let status = await alunoDAO.updateAluno(dadosAluno);

    if (status) {
      return message.UPDATED_ITEM;
    } else {
      return message.ERROR_INTERNAL_SERVER;
    }
  }
};

//função para excluir um aluno filtrado pelo ID, que será encaminhado para a model
const deletarAluno = async function (idAluno) {
  if (idAluno == "" || idAluno == undefined || isNaN(idAluno)) {
    return message.ERROR_REQUIRED_ID;
  } else {
    //encaminha para o dao os dados para serem alterados
    let status = await alunoDAO.deleteAluno(idAluno);

    if (status) {
      return message.DELETED_ITEM;
    } else {
      return message.ERROR_INTERNAL_SERVER;
    }
  }
};

//Retorna todos os itens da tabela recebidos da model
const selecionarTodosAlunos = async function () {
  //solicita ao DAO todos os alunos do bd
  let dadosAluno = await alunoDAO.selectAllAluno();

  //cria um objeto do tipo json
  let dadosJSON = {};

  //valida se o bd teve registros. se teve, adiciona o array de alunos em um json para retornar ao APP
  if (dadosAluno) {
    dadosJSON.status = 200;
    dadosJSON.count = dadosAluno.length;
    dadosJSON.alunos = dadosAluno;
    return dadosJSON;
  } else {
    return message.ERROR_NOT_FOUND;
  }
};

//Busca um item filtrando pelo id, que será encaminhado para a model
const buscarIdAluno = async function (id) {
  if (id == "" || id == undefined || isNaN(id)) {
    return message.ERROR_REQUIRED_ID;
  } else {
    //solicita ao DAO todos os alunos do bd
    let dadosAluno = await alunoDAO.selectByIdAluno(id);

    //cria um objeto do tipo json
    let dadosJSON = {};

    //valida se o bd teve registros. se teve, adiciona o array de alunos em um json para retornar ao APP
    if (dadosAluno) {
      dadosJSON.status = 200;
      dadosJSON.alunos = dadosAluno;
      return dadosJSON;
    } else {
      return message.ERROR_NOT_FOUND;
    }
  }
};

module.exports = {
  selecionarTodosAlunos,
  inserirAluno,
  atualizarAluno,
  deletarAluno,
  buscarIdAluno
};
