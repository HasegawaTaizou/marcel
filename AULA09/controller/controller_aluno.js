//Implementa a regra de negócio entre o app e a model

//função para receber os dados do APP e enviar para a model para inserir novo item
const inserirAluno = function (dadosAluno) {};

//função para receber os dados do APP e enviar para a model para atualizar um item existente
const atualizarAluno = function (dadosAluno) {};

//função para excluir um aluno filtrado pelo ID, que será encaminhado para a model
const deletarAluno = function (id) {};

//Retorna todos os itens da tabela recebidos da model
const selecionarTodosAlunos = async function () {
  //import do arquivo de acesso ao banco de dados
  let alunoDAO = require("../model/DAO/alunoDAO.js");

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
}