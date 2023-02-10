/*****************************************************************
 * Objetivo: Usar calcálos matemáticos (soma, subtração, divisão, multiplicação).
 * Data: 03/02//2023
 * Autor: Camila Pinheiro
 * Versão: 1.0
******************************************************************/

var matematica = require('./modulo/calculadora.js')

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Valor1: \n', function (numero1) {
    // replace - permite trocar um conteúdo da string por outro
    let valor1 = numero1.replace(',', '.');

    entradaDados.question('Valor2: \n', function (numero2) {
        let valor2 = numero2.replace(',', '.');

        entradaDados.question('Escolha uma operação: [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ]: \n', function (tipoCalculo) {
            let operacao = tipoCalculo.toUpperCase();

            let resultado;

            // Validação de entrada dados vazio
            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERRO: Não é possível calcular sem preencher todos os dados.');
                entradaDados.close();
                // Validação para verificar se os dados digitados são números. 
                // Podemos utilizar (isNan ou typeof)
                // Se usar o typeof precisa garantir que o tipo de dado não é genérico (string)
                // else if (typeof(valor1) != 'number' || typeof (valor2) != 'number'){
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: Não é possível calcular sem a entrada de valores numéricos.');
                entradaDados.close(); // fecha o objeto de entrada de dados (encerra o programa)
            } else {

                //Recebe da função o calculo dass operações (função que nós criamos)
                resultado = matematica.calcular(valor1, valor2, operacao);


                // Verifica se o retorno da função é válido: se for exibe o valor 
                // senão encerra o programa
                if (resultado === false) {
                    entradaDados.close();
                } else{
                    console.log(resultado);
                }

            }


        })
    });

});

