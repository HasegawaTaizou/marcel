/* 
Objetivo: Arquivo de funções para realizar o cálculo de operações matemáticas
Data: 03/02/2023
Autor: Caio
Versão: 1.0
*/

function calcular(numero1, numero2, tipoCalculo) {
  let valor1 = Number(numero1);
  let valor2 = Number(numero2);
  let operacao = tipoCalculo.toUpperCase();

  let resultado;

  if (operacao == "SOMAR") {
    resultado = valor1 + valor2;
  } else if (operacao == "SUBTRAIR") {
    resultado = valor1 - valor2;
  } else if (operacao == "MULTIPLICAR") {
    resultado = valor1 * valor2;
  } else if (operacao == "DIVIDIR") {
    if (valor2 == 0) {
      console.log("ERRO: Não é possível fazer uma divisão por 0");
    } else {
      resultado = valor1 / valor2;
    }
  } else {
    console.log("A operação informada não é válida. Confira a sua entrada");
    entradaDados.close();
  }

  if (resultado != undefined) {
    return resultado;
  } else {
    return false;
  }
}

//exportando uma função, tornando-a global
module.exports = {
    calcular
}