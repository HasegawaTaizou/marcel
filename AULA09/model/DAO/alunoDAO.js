//realizar a interação do aluno com o banco de dados

//importa da biblioteca do prisma client (responsável por manipular dados no banco de dados)
var { PrismaClient } = require("@prisma/client");
const { response } = require("express");

//instancia da classe do PrismaClient
var prisma = new PrismaClient();

//função para inserir um novo registro no banco de dados
const insertAluno = async function (dadosAluno) {

  //script sql para inserir os dados no banco de dados
  let sql = `insert into tbl_aluno 
  (nome, cpf, rg, data_nascimento, email) 
  values ('${dadosAluno.nome}', '${dadosAluno.cpf}', '${dadosAluno.rg}', '${dadosAluno.data_nascimento}', '${dadosAluno.email}')`;

  let result = await prisma.$executeRawUnsafe(sql);

  //executa o script no banco de dados e recebemos o retorno se deu certo ou não
  if (result) {
    return true;
  } else {
    return false;
  }
};

//Atualizar registro existente no banco de dados
const updateAluno = async function (dadosAluno) {
  let sql = `update tbl_aluno set
                nome = '${dadosAluno.nome}',
                rg = '${dadosAluno.rg}',
                cpf = '${dadosAluno.cpf}',
                data_nascimento = '${dadosAluno.data_nascimento}',
                email = '${dadosAluno.email}'
              where id = ${dadosAluno.id}
  `;

  //Executa o script no banco de dados
  let result = await prisma.$executeRawUnsafe(sql);

  if (result) {
    return true;
  } else {
    return false;
  }
};

//Excluir um registro existente no banco de dados
const deleteAluno = async function (idAluno) {
  let sql = `delete from tbl_aluno
              where id = ${idAluno}
  `;

  //Executa o script no banco de dados
  let result = await prisma.$executeRawUnsafe(sql);

  if (result) {
    return true;
  } else {
    return false;
  }
};

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
const selectByIdAluno = async function (id) {
  //variavel com script sql para executar no BD
  let sql = `select * from tbl_aluno where id = ${id}`;

  let rsAluno = await prisma.$queryRawUnsafe(sql);

  //valida se o bd retornou algum registro
  if (rsAluno.length > 0) {
    return rsAluno;
  } else {
    return false;
  }
};

module.exports = {
  selectAllAluno,
  insertAluno,
  updateAluno,
  deleteAluno,
  selectByIdAluno,
};
