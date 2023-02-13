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
  if (moduloExercicio3.verificarTipo(numero) == 1) {
    entradaDados.question("Digite o número inicial: ", function (numero) {
      let numeroInicial = numero;

      entradaDados.question("Digite o número final: ", function (numero) {
        let numeroFinal = numero;

        moduloExercicio3.verificarNumerosPares(numeroInicial, numeroFinal);
      });
    });
  } else if (moduloExercicio3.verificarTipo(numero) == 2) {
    entradaDados.question("Digite o número inicial: ", function (numero) {
      let numeroInicial = numero;

      entradaDados.question("Digite o número final: ", function (numero) {
        let numeroFinal = numero;

        moduloExercicio3.verificarNumerosImpares(numeroInicial, numeroFinal);
      });
    });
  } else {
    entradaDados.question("Digite o número inicial: ", function (numero) {
      let numeroInicial = numero;

      entradaDados.question("Digite o número final: ", function (numero) {
        let numeroFinal = numero;

        moduloExercicio3.verificarNumeros(numeroInicial, numeroFinal);
      });
    });
  }
});

// if (moduloExercicio3.isNumerosIguais(numeroInicial, numeroFinal)) {
//   console.log("NÃO PODE COLOCAR DOIS NÚMEROS IGUAIS");
//   entradaDados.close();
// }
// if (moduloExercicio3.isNumeroFinalDentroLimite(numero)) {
//   numeroFinal = numero;
//   moduloExercicio3.verificarNumeros(numeroInicial, numeroFinal);
// }
// if (moduloExercicio3.isNumeroVazio(numero)) {
//   console.log("PREENCHA O CAMPO");
//   entradaDados.close();
// }
// if (moduloExercicio3.isNumeroValido(numero)) {
//   console.log("DIGITE UM NÚMERO VÁLIDO");
//   entradaDados.close();
// }
