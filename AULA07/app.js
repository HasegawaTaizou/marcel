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

const removerElemento = function (nomeProduto) {
  let listaProdutosMantida = listaProdutos.slice();
  let nome = nomeProduto;
  let indice = listaProdutosMantida.indexOf(nome);
  let status;

  //splice - permite remover um elemento do array, pelo indice
  if (indice >= 0) {
    listaProdutosMantida.splice(indice, 1);
    status = true;
  } else {
    status = false;
  }

  if (status) {
    return listaProdutosMantida;
  } else {
    return status;
  }
};

console.log(removerElemento("Monitor"));
console.log(listaProdutos);
