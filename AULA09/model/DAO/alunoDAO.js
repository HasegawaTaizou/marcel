//realizar a interação do aluno com o banco de dados

//importa da biblioteca do prisma client (responsável por manipular dados no banco de dados)
var { PrismaClient } = require("@prisma/client");
const { response } = require("express");

//instancia da classe do PrismaClient
var prisma = new PrismaClient();

//função para inserir um novo registro no banco de dados
const insertAluno = async function (dadosAluno) {
  console.log('entrou no post');

  //script sql para inserir os dados no banco de dados
  let sql = `insert into tbl_aluno 
  (nome, cpf, rg, data_nascimento, email) 
  values ('${dadosAluno.nome}', '${dadosAluno.cpf}', '${dadosAluno.rg}', '${dadosAluno.data_nascimento}', '${dadosAluno.email}')`

  console.log(sql);
  
  let result = await prisma.$executeRawUnsafe(sql)

  //executa o script no banco de dados e recebemos o retorno se deu certo ou não
  if(result) {
    return true
  } else {
    return false
  }
};

//Atualizar registro existente no banco de dados
const updateAluno = function (dadosAluno) {};

//Excluir um registro existente no banco de dados
const deleteAluno = function (id) {};

//Retorna todos registros do banco de dados
const selectAllAluno = async function () {
  //variavel com script sql para executar no BD
  let sql = "select * from tbl_aluno";

  //executa no banco de dados o script sql
  //$queryRawUnsafe é utilizado quando o script sql está em uma variavel
  //$queryRaw é utilizado quando passar o script direto no método: $queryRaw('select * from tbl_aluno')
  let rsAluno = await prisma.$queryRawUnsafe(sql);

  //valida se o bd retornou algum registro
  if (rsAluno.length > 0) {
    return rsAluno;
  } else {
    return false;
  }
};

//Retorna um registro do banco de dados pelo ID
const selectByIdAluno = function (id) {};

module.exports = {
  selectAllAluno,
  insertAluno,
};
