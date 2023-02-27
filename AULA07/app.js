const manipulandoElementos = function () {
  const listaNomes = ["alo", "alo1", "alo2", "alo3"];

  console.log(listaNomes);
  console.log(listaNomes[1]);
  console.log(typeof listaNomes[1]);
  console.log(listaNomes.length);

  let i = 0;
  while (i < listaNomes.length) {
    console.log(listaNomes[i]);
    i++;
  }

  for (let i = 0; i < listaNomes.length; i++) {
    console.log(listaNomes[i]);
  }

  console.log(listaNomes[7]);

  listaNomes.forEach((item) => {
    console.log(item);
  });

  listaNomes.push("alooo");
  console.log(listaNomes);

  listaNomes.pop();
  console.log(listaNomes);

  listaNomes.unshift("alloooooooo");
  console.log(listaNomes);

  listaNomes.shift();
  console.log(listaNomes);
};

const filtrarElementos = function () {
  const listaProdutos = [
    "Teclado",
    "Mouse",
    "Monitor",
    "Computador",
    "Fone",
    "Impressora",
    "Scanner",
    "WebCam",
  ];

  console.log(listaProdutos.indexOf("Impressora"));

  const novosProdutos = listaProdutos.slice();
  console.log(novosProdutos);
};

const removerElemento = function (array, nomeItem) {
  let novaLista = array.slice();
  let nome = nomeItem;
  let indice = novaLista.indexOf(nome);
  let status;

  //splice - permite remover um elemento do array, pelo indice
  if (indice >= 0) {
    novaLista.splice(indice, 1);
    status = true;
  } else {
    status = false;
  }

  if (status) {
    return novaLista;
  } else {
    return status;
  }

  console.log(removerElemento(listaProdutos, "Monitor"));
  console.log(listaProdutos);
};

const listaProdutos = [
  "Teclado",
  "Mouse",
  "Monitor",
  "Computador",
  "Fone",
  "Impressora",
  "Scanner",
  "WebCam",
];

let listaProdutosJSON = {};

const listagemProdutos = function () {
  let listProdutos = [
    { nome: "Teclado DELL", valor: 200, quantidade: 50 },
    { nome: "Monitor DELL", valor: 1000, quantidade: 70 },
    { nome: "Mouse DELL", valor: 100, quantidade: 350 },
  ];
  let listCores = ['Branco', 'Preto', 'Cinza']
  let listTipoTeclado = ['Mecânico', 'Semi-Mecânico', 'Membrana']
  let listTiposMonitores = ['LCD', 'Full-HD', '4K', 'O-LED']

  listProdutos[0].cores = listCores
  listProdutos[0].tiposTeclados = listTipoTeclado

  listProdutos[1].tiposMonitores = listTiposMonitores

  listProdutos[2].cores = listCores;


  listaProdutosJSON.produtos = listProdutos;


  listaProdutosJSON.produtos.forEach(function(dadosProdutos) {
    console.log(`
Nome: ${dadosProdutos.nome}
Valor: ${dadosProdutos.valor}
Quantidade: ${dadosProdutos.quantidade}`
    );

    if(dadosProdutos.cores != undefined) {
      dadosProdutos.cores.forEach(cor => {
        console.log('Cor: ' + cor);
      })
    }
    if(dadosProdutos.tiposTeclados != undefined) {
      dadosProdutos.tiposTeclados.forEach(tipo => {
        console.log('Tipo: ' + tipo);
        
      })
    }

    if(dadosProdutos.tiposMonitores != undefined) {
      dadosProdutos.tiposMonitores.forEach(tipo => {
        console.log('Tipo: ' + tipo);
        
      })
    }
  })

  // console.log(listaProdutosJSON);
  // console.log(listaProdutosJSON.produtos[1].nome);

  // console.log(listaProdutosJSON);
  
  // for (let index = 0; index < listaProdutosJSON.produtos.length; index++) {
  //  console.log(`
  //   Nome: ${listaProdutosJSON.produtos[index].nome}
  //   Valor: ${listaProdutosJSON.produtos[index].valor}
  //   Quantidade: ${listaProdutosJSON.produtos[index].quantidade}
  //   Características ${listaProdutosJSON.produtos[index]}
  //   e caracteristicas dele
  // `);
  // }
  // }

  // for (const property in listaProdutosJSON.produtos[0]) {
  //   console.log(property + " = " + listaProdutosJSON.produtos[0][property]);
  // }

  // let valores = Object.entries(listaProdutosJSON.produtos[0])
  // console.log(valores);

  // if(!valores[0].contains(listaProdutosJSON.produtos[0].nome)) {
  //   valores[0] = '';
  //   valores.forEach(item => {
  //     console.log(item);
  //   })
  // }
  

  // listaProdutosJSON.produtos[0].tiposTeclados.forEach((item, index) => {
  //   // console.log(item);
  //   // console.log(index);
  // })
  // console.log(listaProdutosJSON.produtos[0]);

  // const values = Object.values(listaProdutosJSON.produtos[0]);
  // console.log('valor: +' + values);
  // let filtro = values.map((item,index) => {
  //   let array = []
  //   array = item;
  //   return array
  //   // console.log(item);
  //   // console.log(index[item]);
    
  //   // console.log(index);
  // }) 

  // console.log('filtro: '+ filtro);
  

};

listagemProdutos();
