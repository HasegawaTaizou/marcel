const estadosCidades = require("./estados_cidades.js");

const getCapitalEstado = function (siglaEstado) {
  const ufEstados = estadosCidades.estadosCidades.estados;
  const capitalEstado = {};

  let estadoFiltrado = ufEstados.filter((estado) => {
    return estado.sigla == siglaEstado;
  });
  estadoFiltrado.forEach((estado) => {
    capitalEstado.uf = estado.sigla;
    capitalEstado.descricao = estado.nome;
    capitalEstado.capital = estado.capital;
  });

  return capitalEstado;
};

console.log(getCapitalEstado("AL"));
