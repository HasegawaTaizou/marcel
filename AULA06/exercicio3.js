var readline = require("readline");

var moduloExercicio3 = require("./modulo/modulo-exercicio3.js");

var entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

entradaDados.question("Digite o número inicial: ", function (numero) {
  let numeroInicial = numero;

  entradaDados.question("Digite o número final: ", function (numero) {
    let numeroFinal = numero;

    moduloExercicio3.verificarNumeros(numeroInicial, numeroFinal);
  });
});
