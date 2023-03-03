const estadosCidades = require("./estados_cidades.js");

const getCidades = function (siglaEstado) {
  const listaEstados = estadosCidades.estadosCidades.estados;
  let listaCidades = {};

  let estadoFiltrado = listaEstados.filter((item) => {
    return item.sigla == siglaEstado;
  });

  estadoFiltrado.forEach((item) => {
    let cidades = [];
    item.cidades.forEach((cidade) => {
      cidades.push(cidade.nome);
    });
    listaCidades.uf = item.sigla;
    listaCidades.descricao = item.nome;
    listaCidades.quantidade_cidades = cidades.length
    listaCidades.cidades = cidades;
  });

  console.log(listaCidades);
};

getCidades("AC");
