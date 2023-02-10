/****************************************************************
* Objetivo: arquivo de funções para realizar cálculos matemáticos
* Data: 03/02/2023
* Autor: Camila 
* Versão: 1.0
*****************************************************************/

// Realizar calculo matemático das quatro operações (SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR)

// FORMA 1 (tradicional)
// function calcular(numero1, numero2, tipoCalculo) {
//     let valor1 = Number(numero1);
//     let valor2 = Number(numero2);
//     let operacao = tipoCalculo.toUpperCase();

//     let resultado;
//     let status = true;

//     // if (operacao == 'SOMAR')
//     //     resultado = valor1 + valor2;
//     // else if (operacao == 'SUBTRAIR')
//     //     resultado = valor1 - valor2;
//     // else if (operacao == 'MULTIPLICAR')
//     //     resultado = valor1 * valor2;
//     // else if (operacao == 'DIVIDIR') {
//     //     // Validação da divisão por 0
//     //     if (valor2 == 0) {
//     //         console.log('Não é possível fazer uma divisão por 0.')
//     //         status = false;
//     //     } else
//     //         resultado = valor1 / valor2;
//     // }
//     // else {
//     //     console.log('ERRO: A operação informada não é válida. Confira a sua entrada.')
//     //     status = false;
//     // }


//     switch (operacao) {
//         case 'SOMAR':
//             resultado = valor1 + valor2;
//             break;
//         case 'SUBTRAIR':
//             resultado = valor1 - valor2;
//             break;
//         case 'MULTIPLICAR':
//             resultado = valor1 * valor2;
//             break;
//         case 'DIVIDIR':
//             // Validação da divisão por 0
//             if (valor2 == 0) {
//                 console.log('Não é possível fazer uma divisão por 0.')
//                 status = false;
//             } else
//                 resultado = valor1 / valor2;


//             break;

//         default:
//             console.log('ERRO: A operação informada não é válida. Confira a sua entrada.')
//             status = false;

//     }

//     // Validação para tratar a variável resultado quando nunhum cálculo é realizado
//     if (resultado != undefined) {
//         return resultado;
//     } else {
//         return status;
//     }



// }


// FORMA 2 (é uma das mais utilizadas hoje em dia)
const calcular = function (numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();

    let resultado;
    let status = true;

    // if (operacao == 'SOMAR')
    //     resultado = valor1 + valor2;
    // else if (operacao == 'SUBTRAIR')
    //     resultado = valor1 - valor2;
    // else if (operacao == 'MULTIPLICAR')
    //     resultado = valor1 * valor2;
    // else if (operacao == 'DIVIDIR') {
    //     // Validação da divisão por 0
    //     if (valor2 == 0) {
    //         console.log('Não é possível fazer uma divisão por 0.')
    //         status = false;
    //     } else
    //         resultado = valor1 / valor2;
    // }
    // else {
    //     console.log('ERRO: A operação informada não é válida. Confira a sua entrada.')
    //     status = false;
    // }


    switch (operacao) {
        case 'SOMAR':
            resultado = SOMAR(valor1, valor2);
            break;
        case 'SUBTRAIR':
            resultado = SUBTRAIR(valor1, valor2);
            break;
        case 'MULTIPLICAR':
            resultado = MULTIPLICAR(valor1, valor2);
            break;
        case 'DIVIDIR':
            // Validação da divisão por 0
            if (valor2 == 0) {
                console.log('Não é possível fazer uma divisão por 0.')
                status = false;
            } else
                resultado = DIVIDIR(valor1, valor2);


            break;

        default:
            console.log('ERRO: A operação informada não é válida. Confira a sua entrada.')
            status = false;

    }

    if (resultado != undefined) {
        return Number(resultado.toFixed(2));
    } else {
        return status;

    }


    }

    // FORMA 3 (Arrow function)
    const SOMAR = (valor1, valor2) => valor1 + valor2;
    const SUBTRAIR = (valor1, valor2) => valor1 - valor2;
    const MULTIPLICAR = (valor1, valor2) => valor1 * valor2;
    const DIVIDIR = (valor1, valor2) => valor1 / valor2;
    



    // Exporta uma função para ser utilizada em outro arquivo
    module.exports = {
        calcular
    }
