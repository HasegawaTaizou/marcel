var readline = require("readline");

var moduloExercicio2 = require("./modulo/modulo-exercicio2.js");

var entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

entradaDados.question("Digite a tabuada inicial: ", function (tabuada) {
  let tabuadaInicial;
  if (
    moduloExercicio2.verificarValorVazio(tabuada)
     &&
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
    ) 
    {
      tabuadaFinal = tabuada;
      if(moduloExercicio2.verificarValorMaior(tabuadaInicial, tabuadaFinal)) {
      } else {
        entradaDados.close()
        console.log('DIGITE A TABUADA INICIAL COM UM VALOR MENOR QUE A TABUADA FINAL');
      }
    } else {
      entradaDados.close();
      console.log("DIGITE A TABUADA FINAL");
    }

    entradaDados.question("Digite o contador inicial: ", function (contador) {
      let contadorInicial;
      if (
        moduloExercicio2.verificarValorVazio(contador) &&
        moduloExercicio2.verificarValorContadorInicial(contador)
      ) {
        contadorInicial = contador;
      } else {
        entradaDados.close();
        console.log("DIGITE O CONTADOR INICIAL");
      }

      entradaDados.question("Digite o contador final: ", function (contador) {
        let contadorFinal;
        if (
          moduloExercicio2.verificarValorVazio(contador) &&
          moduloExercicio2.verificarValorContadorFinal(contador)
        ) {
          contadorFinal = contador;
          if(moduloExercicio2.verificarValorMaior(contadorInicial, contadorFinal)) {
          } else {
            console.log('DIGITE O CONTADOR INICIAL COM UM VALOR MENOR QUE O CONTADOR FINAL');
            entradaDados.close()
          }
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
