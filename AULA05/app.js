var tabuada = require('./modulo/tabuada.js')

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o multiplicando: \n', function (numero1) {
    let multiplicando = numero1.replace(',', '.');

    entradaDados.question('Digite o multiplicador \n', function (numero2) {
        let multiplicador = numero2.replace(',', '.');
        let resultado;

        if (multiplicando == '' || multiplicador == '') {
            console.log('ERRO: Não é possível calcular sem preencher todos os dados.');
        } else if (isNaN(multiplicando) || isNaN(multiplicador)) {
            console.log('ERRO: Não é possível calcular sem a entrada de valores numéricos.');
            entradaDados.close();
        } else {
            resultado = tabuada.calcularTabuada(multiplicador, multiplicando);
            console.log(resultado);
           
        }
    })
})
