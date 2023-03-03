const estadosCidades = require('./estados_cidades.js')

// console.log(estadosCidades);

const listaEstados = estadosCidades.estadosCidades.estados

let capitaisFiltradas = listaEstados.filter(item => {
    return item.hasOwnProperty('capital_pais');
})

let capital = {}

let capitais = capitaisFiltradas.forEach((item, index) => {
    capital.capital_atual = item.capital_pais.capital
    capital.uf = item.sigla
    capital.descricao = item.nome
    capital.regiao = item.regiao
    capital.capital_pais_ano_inicio = item.capital_pais.ano_inicio
    capital.capital_pais_ano_termino = item.capital_pais.ano_fim

    console.log(capital);
    
})
