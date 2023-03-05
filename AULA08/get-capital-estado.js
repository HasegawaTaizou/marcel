const estadosCidades = require("./estados_cidades.js");

const getCapitalEstado = function (siglaEstado) {
  let status;
  if (siglaEstado !== "" && isNaN(siglaEstado)) {
    const ufEstados = estadosCidades.estadosCidades.estados;
    let capitalEstado;

    let estadoFiltrado = ufEstados.filter((estado) => {
      if (estado.sigla === siglaEstado) {
        return estado.sigla === siglaEstado;
      } else {
        status = false;
      }
    });
    estadoFiltrado.forEach((estado) => {
      capitalEstado = {};
      capitalEstado.uf = estado.sigla;
      capitalEstado.descricao = estado.nome;
      capitalEstado.capital = estado.capital;
    });
    if (capitalEstado != undefined) {
      return capitalEstado;
    } else {
      status = false;
    }
  }
  status = false;
  return status;
};

console.log(getCapitalEstado("AC"));
