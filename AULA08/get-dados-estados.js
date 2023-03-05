const estadosCidades = require("./estados_cidades.js");

const getDadosEstado = function (siglaEstado) {
  let status;
  if (siglaEstado !== "" && isNaN(siglaEstado)) {
    const dadosEstados = estadosCidades.estadosCidades.estados;
    let estados;

    const estadoFiltrado = dadosEstados.filter((estado) => {
      if (estado.sigla === siglaEstado) {
        return estado.sigla === siglaEstado;
      } else {
        status = false;
      }
    });

    estadoFiltrado.forEach((estado) => {
      estados = {};
      estados.uf = estado.sigla;
      estados.descricao = estado.nome;
      estados.capital = estado.capital;
      estados.regiao = estado.regiao;
    });

    if (estados != undefined) {
      return estados;
    } else {
      status = false;
    }
  }

  status = false;
  return status;
};

console.log(getDadosEstado("AM"));
