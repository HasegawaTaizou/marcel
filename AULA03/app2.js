/* 
Objetivo: Realizar o cálculo de operações matemáticas
Data: 30/01/2023
Autor: Caio
Versão: 1.0
*/

console.log("Sistema de Cálculo de Operações Matemáticas \n");

var teste = require("./modulo/calculadora.js");

var readline = require("readline");

var entradaDados = readline.createInterface(
  (input = process.stdin),
  (output = process.stdout)
);

entradaDados.question("Valor1: \n", function (numero1) {
  let valor1 = numero1.replace(",", ".");

  entradaDados.question("Valor2: \n", function (numero2) {
    let valor2 = numero2.replace(",", ".");

    entradaDados.question(
      "Escolha uma operação: [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR]: \n",
      function (tipoCalculo) {
        let operacao = tipoCalculo.toUpperCase();
        let resultado;

        if (valor1 == "" || valor2 == "" || operacao == "") {
          console.log(
            "ERRO: Não é possível calcular sem preencher todos os dados"
          );
        } else if (isNaN(valor1) || isNaN(valor2)) {
          console.log(
            "ERRO: Não é possível calcular sem a entrada de valores numéricos"
          );
        } else {
          resultado = teste.calcular(valor1, valor2, operacao)
          console.log(resultado)
        }
      }
    );
  });
});
