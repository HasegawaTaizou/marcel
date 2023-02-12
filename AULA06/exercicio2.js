var readline = require("readline");

var moduloExercicio2 = require("./modulo/modulo-exercicio2.js");

var entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

entradaDados.question("Digite a tabuada inicial: ", function (tabuada) {
  let tabuadaInicial = tabuada;

  entradaDados.question("Digite a tabuada final: ", function (tabuada) {
    let tabuadaFinal = tabuada;

    entradaDados.question("Digite o contador inicial: ", function (contador) {
      let contadorInicial = contador;

      entradaDados.question("Digite o contador final: ", function (contador) {
        let contadorFinal = contador;

        moduloExercicio2.mostrarResultado(
          tabuadaInicial,
          tabuadaFinal,
          contadorInicial,
          contadorFinal
        );
        entradaDados.close();
      });
    });
  });
});
