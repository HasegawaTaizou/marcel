//Implementa a regra de negócio entre o app e a model

//import do arquivo de acesso ao banco de dados
const { request } = require("express");

var alunoDAO = require("../model/DAO/alunoDAO.js");

//função para receber os dados do APP e enviar para a model para inserir novo item
const inserirAluno = async function (dadosAluno) {
  console.log('entrou no post');

  //import do arquivo global de configuração do projeto
  let message = require('./modulo/config.js')

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
    let status = await alunoDAO.insertAluno(dadosAluno)
    
    if(status) {
      return message.CREATED_ITEM
    } else {
      return message.ERROR_INTERNAL_SERVER
    }
  }
};

//função para receber os dados do APP e enviar para a model para atualizar um item existente
const atualizarAluno = function (dadosAluno) {};

//função para excluir um aluno filtrado pelo ID, que será encaminhado para a model
const deletarAluno = function (id) {};

//Retorna todos os itens da tabela recebidos da model
const selecionarTodosAlunos = async function () {
  //solicita ao DAO todos os alunos do bd
  let dadosAluno = await alunoDAO.selectAllAluno();

  //cria um objeto do tipo json
  let dadosJSON = {};

  //valida se o bd teve registros. se teve, adiciona o array de alunos em um json para retornar ao APP
  if (dadosAluno) {
    dadosJSON.alunos = dadosAluno;
    return dadosJSON;
  } else {
    return false;
  }
};

//Busca um item filtrando pelo id, que será encaminhado para a model
const buscarIdAluno = function (id) {};

module.exports = {
  selecionarTodosAlunos,
  inserirAluno,
};
