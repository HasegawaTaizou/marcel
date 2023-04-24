//realizar a interação do aluno com o banco de dados

//função para inserir um novo registro no banco de dados
const insertAluno = function (dadosAluno) {};

//Atualizar registro existente no banco de dados
const updateAluno = function (dadosAluno) {};

//Excluir um registro existente no banco de dados
const deleteAluno = function (id) {};

//Retorna todos registros do banco de dados
const selectAllAluno = async function () {
  //importa da biblioteca do prisma client (responsável por manipular dados no banco de dados)
  let { PrismaClient } = require("@prisma/client");

  //instancia da classe do PrismaClient
  let prisma = new PrismaClient();

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
};
