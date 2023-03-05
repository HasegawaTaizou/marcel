const estadosCidades = require("./estados_cidades.js");

const getCidades = function (siglaEstado) {
  let status;
  if (siglaEstado !== "" && isNaN(siglaEstado)) {
    const listaEstados = estadosCidades.estadosCidades.estados;
    let listaCidades;

    const estadoFiltrado = listaEstados.filter((estado) => {
      if (estado.sigla === siglaEstado) {
        listaCidades = {};
        return estado.sigla === siglaEstado;
      } else {
        status = false;
      }
    });

    estadoFiltrado.forEach((estado) => {
      let cidades = [];
      estado.cidades.forEach((cidade) => {
        cidades.push(cidade.nome);
      });
      listaCidades.uf = estado.sigla;
      listaCidades.descricao = estado.nome;
      listaCidades.quantidade_cidades = cidades.length;
      listaCidades.cidades = cidades;
    });

    if (listaCidades != undefined) {
      return listaCidades;
    } else {
      status = false;
    }
  }
  status = false;
  return status;
};

console.log(getCidades("AC"));
