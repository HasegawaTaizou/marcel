const estadosCidades = require("./estados_cidades.js");

const getCapitalPais = function () {
  const listaEstados = estadosCidades.estadosCidades.estados;

  let capitaisFiltradas = listaEstados.filter((estado) => {
    return estado.hasOwnProperty("capital_pais");
  });

  let capitais = {};
  let capitaisArray = [];
  let capital = {};

  capitaisFiltradas.forEach((estado) => {
    capital.capital_atual = estado.capital_pais.capital;
    capital.uf = estado.sigla;
    capital.descricao = estado.nome;
    capital.regiao = estado.regiao;
    capital.capital_pais_ano_inicio = estado.capital_pais.ano_inicio;
    capital.capital_pais_ano_termino = estado.capital_pais.ano_fim;

    capitaisArray.push(capital);
  });

  capitais.capitais = capitaisArray;
  return capitais;
};

console.log(getCapitalPais());
