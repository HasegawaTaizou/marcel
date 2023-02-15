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
    moduloExercicio2.verificarValorTabuada(tabuada)
  ) {
    tabuadaInicial = tabuada;
  } else {
    entradaDados.close();
    return false;
  }

  entradaDados.question("Digite a tabuada final: ", function (tabuada) {
    let tabuadaFinal;

    if (
      moduloExercicio2.verificarValorVazio(tabuada) &&
      moduloExercicio2.verificarValorTabuada(tabuada) &&
      moduloExercicio2.verificarValorMaior(tabuadaInicial, tabuada)
    ) {
      tabuadaFinal = tabuada;
    } else {
      entradaDados.close();
      return false;
    }

    entradaDados.question("Digite o contador inicial: ", function (contador) {
      let contadorInicial;

      if (
        moduloExercicio2.verificarValorVazio(contador) &&
        moduloExercicio2.verificarValorContador(contador)
      ) {
        contadorInicial = contador;
      } else {
        entradaDados.close();
        return false;
      }

      entradaDados.question("Digite o contador final: ", function (contador) {
        let contadorFinal;

        if (
          moduloExercicio2.verificarValorVazio(contador) &&
          moduloExercicio2.verificarValorContador(contador) &&
          moduloExercicio2.verificarValorMaior(contadorInicial, contador)
        ) {
          contadorFinal = contador;
        } else {
          entradaDados.close();
          return false;
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
