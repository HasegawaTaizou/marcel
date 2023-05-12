/*******************************************************************************************
 * Objetivo: Realizar a interação do ALUNO com o Banco de Dados
 * Data: 14/04/2023
 * Autor: Camila Pinheiro
 * Versão: 1.0
 ********************************************************************************************/

// Import da biblioteca do prisma client (responsável por manipular dados no banco de dados)
var { PrismaClient } = require("@prisma/client");

// Instância da classe do PrismaClient
var prisma = new PrismaClient();

//Inserir um novo registro no Banco de Dados
const insertAluno = async function (dadosAluno) {
  // Script SQL para inserir os dados no Banco de Dados
  let sql = `insert into tbl_aluno (  nome,
                                        cpf, 
                                        rg, 
                                        data_nascimento, 
                                        email
                                      )
                                        values
                                      ( '${dadosAluno.nome}',
                                        '${dadosAluno.cpf}',
                                        '${dadosAluno.rg}',
                                        '${dadosAluno.data_nascimento}',
                                        '${dadosAluno.email}'
                                      )`;
  console.log(sql);

  // Executa o script SQL no BD e recebemos o retorno se deu certo ou não
  let result = await prisma.$executeRawUnsafe(sql);

  if (result) return true;
  else return false;
};

//Atualizar um registro existente no Banco de Dados
const updateAluno = async function (dadosAluno) {
  let sql = `update tbl_aluno set
                  nome = '${dadosAluno.nome}', 
                  rg = '${dadosAluno.rg}',
                  cpf = '${dadosAluno.cpf}',
                  data_nascimento = '${dadosAluno.data_nascimento}',
                  email = '${dadosAluno.email}'
              where id = ${dadosAluno.id}`;

  console.log(sql);

  console.log(dadosAluno);

  let result = await prisma.$executeRawUnsafe(sql);

  if (result) return true;
  else return false;
};

//Excluir um registro do Banco de Dados
const deleteAluno = async function (idAluno) {
  let sql = `delete from tbl_aluno
            where id = ${idAluno}`;

  let result = await prisma.$executeRawUnsafe(sql);

  if (result) return true;
  else return false;
};

//Retorna todos os registros do Banco de Dados
const selectAllAluno = async function (dadosAluno) {
  //Variável com o scriptSQL para executar no BD
  let sql = "select * from tbl_aluno";

  // Executa no BD o scriptSQL
  /*
    queryRawUnsafe() - é utilizado quando o scriptSQL está em uma variável
    queryRaw() - é utilizado quando passar o script direto no método (Ex: $queryRaw('select * from tbl_aluno'))*/
  let rsAluno = await prisma.$queryRawUnsafe(sql);

  // Valida se o BD retornou algum registro
  if (rsAluno.length > 0) return rsAluno;
  else return false;
};

//Retorna um registro filtrado pelo ID do Banco de Dados
const selectByIdAluno = async function (idAluno) {
  //Variável com o scriptSQL para executar no BD
  let sql = `select * from tbl_aluno
            where id = ${idAluno}`;

  // Executa no BD o scriptSQL
  /*
 queryRawUnsafe() - é utilizado quando o scriptSQL está em uma variável
 queryRaw() - é utilizado quando passar o script direto no método (Ex: $queryRaw('select * from tbl_aluno'))*/
  let rsAluno = await prisma.$queryRawUnsafe(sql);

  // Valida se o BD retornou algum registro
  if (rsAluno.length > 0) return rsAluno;
  else return false;
};

const selectLastId = async function () {
  // Script para retornar apenas o último registro inserido na tabela
  let sql = "select id from tbl_aluno order by id desc limit 1";

  let rsAluno = await prisma.$queryRawUnsafe(sql);

  if (rsAluno.length > 0) return rsAluno[0].id;
  else return false;
};

module.exports = {
  selectAllAluno,
  insertAluno,
  updateAluno,
  deleteAluno,
  selectByIdAluno,
  selectLastId,
};
