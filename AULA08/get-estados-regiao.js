const estadosCidades = require("./estados_cidades.js");

const getEstadosRegiao = function (regiao) {
  const dadosEstados = estadosCidades.estadosCidades.estados;
  const listaEstadosRegiao = {};
  listaEstadosRegiao.estados = [];

  const regiaoFiltrada = dadosEstados.filter((item) => {
    return item.regiao == regiao;
  });

  regiaoFiltrada.forEach((item, index) => {
    listaEstadosRegiao.regiao = item.regiao;
    listaEstadosRegiao.estados[index] = {
      uf: item.sigla,
      descricao: item.nome,
    };
  });
  console.log(listaEstadosRegiao);
};

getEstadosRegiao("Norte");
