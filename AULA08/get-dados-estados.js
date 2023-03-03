const estadosCidades = require("./estados_cidades.js");

const getDadosEstado = function (siglaEstado) {
  const dadosEstados = estadosCidades.estadosCidades.estados;
  const estados = {};

  let estadoFiltrado = dadosEstados.filter((item) => {
    return item.sigla == siglaEstado;
  });

  estadoFiltrado.forEach((item) => {
    estados.uf = item.sigla;
    estados.descricao = item.nome;
    estados.capital = item.capital;
    estados.regiao = item.regiao;
  });

  return estados;
};

console.log(getDadosEstado("AM"));
