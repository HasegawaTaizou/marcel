const estadosCidades = require("./estados_cidades.js");

const getEstadosRegiao = function (regiao) {
  let status;
  if (regiao !== "" && isNaN(regiao)) {
    const dadosEstados = estadosCidades.estadosCidades.estados;
    let listaEstadosRegiao = {};
    listaEstadosRegiao.estados = [];

    const regiaoFiltrada = dadosEstados.filter((estado) => {
      return estado.regiao === regiao;
    });

    regiaoFiltrada.forEach((estado, index) => {
      listaEstadosRegiao.regiao = estado.regiao;
      listaEstadosRegiao.estados[index] = {
        uf: estado.sigla,
        descricao: estado.nome,
      };
    });
    if (listaEstadosRegiao != undefined && listaEstadosRegiao.estados != "") {
      return listaEstadosRegiao;
    } else {
      status = false;
    }
  }
  status = false;
  return status;
};

console.log(getEstadosRegiao("Norte"));
