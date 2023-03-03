const estadosCidades = require("./estados_cidades");

const getListaDeEstados = function () {
  const ufEstados = estadosCidades.estadosCidades.estados;
  const listaEstados = {};
  listaEstados.uf = [];

  ufEstados.forEach((estado, index) => {
    listaEstados.uf[index] = estado.sigla;
  });
  listaEstados.quantidade = ufEstados.length;

  return listaEstados;
};

console.log(getListaDeEstados());
