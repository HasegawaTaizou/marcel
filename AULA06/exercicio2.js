var readline = require("readline");

var moduloExercicio2 = require("./modulo/modulo-exercicio2.js");

var entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

entradaDados.question("Digite a tabuada inicial: ", function (tabuada) {
  let tabuadaInicial;
  if (
    moduloExercicio2.verificarValorVazio(tabuada) &&
    moduloExercicio2.verificarValorTabuadaInicial(tabuada)
  ) {
    tabuadaInicial = tabuada;
  } else {
    console.log("DIGITE A TABUADA INICIAL");
    entradaDados.close();
  }

  entradaDados.question("Digite a tabuada final: ", function (tabuada) {
    let tabuadaFinal;
    if (
      moduloExercicio2.verificarValorVazio(tabuada) &&
      moduloExercicio2.verificarValorTabuadaFinal(tabuada)
    ) {
      tabuadaFinal = tabuada;
    } else {
      console.log("DIGITE A TABUADA FINAL");
      entradaDados.close();
    }

    entradaDados.question("Digite o contador inicial: ", function (contador) {
      let contadorInicial;
      if (
        moduloExercicio2.verificarValorVazio(contador) &&
        moduloExercicio2.verificarValorContadorInicial(contador)
      ) {
        contadorInicial = contador;
      } else {
        console.log("DIGITE O CONTADOR INICIAL");
        entradaDados.close();
      }

      entradaDados.question("Digite o contador final: ", function (contador) {
        let contadorFinal;
        if (
          moduloExercicio2.verificarValorVazio(contador) &&
          moduloExercicio2.verificarValorContadorFinal(contador)
        ) {
          contadorFinal = contador;
        } else {
          console.log("DIGITE O CONTADOR FINAL");
          entradaDados.close();
        }

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
