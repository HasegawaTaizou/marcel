console.log('Testando o node.JS');

//comentario em barra

/* comentario em bloco */

//require é para importar um arquivo ou biblioteca
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Quem é o ser mais lindo e incorneável do mundo? \n', function(nome) {
    console.log("Ele se chama " + nome);
});