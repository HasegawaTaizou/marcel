var readline = require("readline");

var moduloExercicio3 = require("./modulo/modulo-exercicio3.js");

var entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Digite:
               1 para mostrar apenas os números pares; 
               2 para mostrar apenas os números ímpares;
               Qualquer outra coisa para mostrar os dois\n`);

entradaDados.question("Digite o que deseja mostrar: ", function (numero) {
  if (moduloExercicio3.verificarTipo(numero) === "1") {
    entradaDados.question("Digite o número inicial: ", function (numero) {
      let numeroInicial;
      numeroInicial = moduloExercicio3.validarInputInicial(numero);

      if (numeroInicial == false) {
        entradaDados.close();
        return false;
      }

      entradaDados.question("Digite o número final: ", function (numero) {
        let numeroFinal = numero;
        numeroFinal = moduloExercicio3.validarInputFinal(numero);

        if (numeroFinal == false) {
          entradaDados.close();
          return false;
        } else if (
          moduloExercicio3.verificarValorMaior(numeroInicial, numeroFinal)
        ) {
          entradaDados.close();
          return false;
        } else if (
          moduloExercicio3.isNumerosIguais(numeroInicial, numeroFinal)
        ) {
          entradaDados.close();
          return false;
        } else {
          moduloExercicio3.verificarNumeros(numeroInicial, numeroFinal);
        }
      });
    });
  } else if (moduloExercicio3.verificarTipo(numero) === "2") {
    entradaDados.question("Digite o número inicial: ", function (numero) {
      let numeroInicial;
      numeroInicial = moduloExercicio3.validarInputInicial(numero);

      if (numeroInicial == false) {
        entradaDados.close();
        return false;
      }

      entradaDados.question("Digite o número final: ", function (numero) {
        let numeroFinal = numero;
        numeroFinal = moduloExercicio3.validarInputFinal(numero);

        if (numeroFinal == false) {
          entradaDados.close();
          return false;
        } else if (
          moduloExercicio3.verificarValorMaior(numeroInicial, numeroFinal)
        ) {
          entradaDados.close();
          return false;
        } else if (
          moduloExercicio3.isNumerosIguais(numeroInicial, numeroFinal)
        ) {
          entradaDados.close();
          return false;
        } else {
          moduloExercicio3.verificarNumeros(numeroInicial, numeroFinal);
        }
      });
    });
  } else {
    entradaDados.question("Digite o número inicial: ", function (numero) {
      let numeroInicial;
      numeroInicial = moduloExercicio3.validarInputInicial(numero);

      if (numeroInicial == false) {
        entradaDados.close();
        return false;
      }

      entradaDados.question("Digite o número final: ", function (numero) {
        let numeroFinal = numero;
        numeroFinal = moduloExercicio3.validarInputFinal(numero);

        if (numeroFinal == false) {
          entradaDados.close();
          return false;
        } else if (
          moduloExercicio3.verificarValorMaior(numeroInicial, numeroFinal)
        ) {
          entradaDados.close();
          return false;
        } else if (
          moduloExercicio3.isNumerosIguais(numeroInicial, numeroFinal)
        ) {
          entradaDados.close();
          return false;
        } else {
          moduloExercicio3.verificarNumeros(numeroInicial, numeroFinal);
        }
      });
    });
  }
});
