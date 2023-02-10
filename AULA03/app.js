/* 
Objetivo: Realizar o cálculo de operações matemáticas
Data: 30/01/2023
Autor: Caio
Versão: 1.0
*/

console.log("Sistema de Cálculo de Operações Matemáticas \n");

var readline = require("readline");

var entradaDados = readline.createInterface(
  (input = process.stdin),
  (output = process.stdout)
);

let primeiroValor = 0;
let segundoValor = 0;

console.log("SOMAR: +\nSUBTRAÇÃO: -\nMULTIPLICAÇÃO: *\nDIVISÃO: /\n");

entradaDados.question(
  "Digite a operação matemática que deseja fazer: ",
  function (operacao) {
    if (operacao == "+") {
      somar();
    }
    else if (operacao == "-") {
      subtrair();
    }
    else if (operacao == "*") {
      multiplicar();
    }
    else if (operacao == "/") {
      dividir();
    }
    else {
      console.log('POR FAVOR, DIGITE ALGUMAS DAS OPERAÇÕES SOLICITADAS')
    }
  }
);

function verificarPossibilidadeErro() {
  modificarCasaDecimal();
  if (primeiroValor == "" || segundoValor == "") {
    console.log("ERRO: É necessário digitar algum valor nas entradas");
    return false;
  } else if (isNaN(primeiroValor) || isNaN(segundoValor)) {
    console.log(
      "ERRO: É necessário que todos os dados digitados sejam números."
    );
    return false;
  } else {
    return true;
  }
}

function modificarCasaDecimal() {
  if (primeiroValor.toString().includes(",")) {
    primeiroValor = primeiroValor.toString().replace(",", ".");
  }
  if (segundoValor.toString().includes(",")) {
    segundoValor = segundoValor.toString().replace(",", ".");
  }
}

function somar() {
  let resultado = 0;

  entradaDados.question("Digite o valor 1: ", function (valor1) {
    primeiroValor = valor1;

    entradaDados.question("Digite o valor 2: ", function (valor2) {
      segundoValor = valor2;

      if (verificarPossibilidadeErro()) {
        resultado = Number(primeiroValor) + Number(segundoValor);
        console.log("O resultado da soma é: " + resultado);
      }
    });
  });
}

function subtrair() {
  let resultado = 0;

  entradaDados.question("Digite o valor 1: ", function (valor1) {
    primeiroValor = valor1;

    entradaDados.question("Digite o valor 2: ", function (valor2) {
      segundoValor = valor2;

      if (verificarPossibilidadeErro()) {
        resultado = Number(primeiroValor) - Number(segundoValor);
        console.log("O resultado da subtração é: " + resultado);
      }
    });
  });
}

function multiplicar() {
  let resultado = 0;

  entradaDados.question("Digite o valor 1: ", function (valor1) {
    primeiroValor = valor1;

    entradaDados.question("Digite o valor 2: ", function (valor2) {
      segundoValor = valor2;

      if (verificarPossibilidadeErro()) {
        resultado = Number(primeiroValor) * Number(segundoValor);
        console.log("O resultado da multiplicação é: " + resultado);
      }
    });
  });
}

function dividir() {
  let resultado = 0;

  entradaDados.question("Digite o valor 1: ", function (valor1) {
    primeiroValor = valor1;

    entradaDados.question("Digite o valor 2: ", function (valor2) {
      
      segundoValor = valor2;

      if (verificarPossibilidadeErro()) {
        if (valor2 == "0") {
          console.log(
            "Digite números acima do valor 0, pois na matemágica, não é possível divisão pelo mesmo!"
          );
        } else {
          resultado = Number(primeiroValor) / Number(segundoValor);
        console.log("O resultado da divisão é: " + resultado);
        }
        
      }
    });
  });
}
