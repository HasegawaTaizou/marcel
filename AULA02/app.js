/* 
Objetivo: Realizar a média escolar de 4 notas dos alunos
Data: 27/01/2023
Autor: Caio
Versão: 1.0
*/

console.log("Sistema de Calculo de médias Escolares\n \n");

var readline = require("readline");

/*
var - toda variavel criada como var tem por objetivo ser um escopo global
    ou seja, ela poderá ser utilizada em diversos pontas da programação

let - toda variavel criada como let, tem por objetivo ser um escopo local
    ou seja, será utilizada somente naquela função

const - tem por objetivo criar um espaço em memória para armazenar dados que não sofrem mudança
*/

var entradaDados = readline.createInterface(
  (input = process.stdin),
  (output = process.stdout)
);

entradaDados.question("Digite o nome do aluno: ", function (nome) {
  //variavel local para receber o nome do aluno que vai ser retornado pela função
  let nomeAluno = nome;

  entradaDados.question("\nDigite a nota 1: ", function (nota1) {
    let primeiraNota = nota1;

    entradaDados.question("Digite a nota 2: ", function (nota2) {
      let segundaNota = nota2;

      entradaDados.question("Digite a nota 3: ", function (nota3) {
        let terceiraNota = nota3;

        entradaDados.question("Digite a nota 4: ", function (nota4) {
          let quartaNota = nota4;

          let mediaAluno = 0;

          // == igualdade
          // != diferença
          // < menor
          // > maior
          // >= maior igual
          // <= menor igual
          // === verifica a igualdade de conteudo e validar a tipagem de dados
          //==! diferente estritamente

          //ou ||
          //e &&
          //not !
          if (
            primeiraNota == "" ||
            segundaNota == "" ||
            terceiraNota == "" ||
            quartaNota == ""
          ) {
            console.log("ERRO: É necessário digitar algum valor nas entradas");
          } else if (
            isNaN(primeiraNota) ||
            isNaN(segundaNota) ||
            isNaN(terceiraNota) ||
            isNaN(quartaNota)
          ) {
            console.log(
              "ERRO: É necessário que todos os dados digitados sejam números."
            );
            //ordem de execção dos operadores lógicos
            //1° - ()
            //2º - !
            //3° - E
            //4° - OU
          } else if (
            (primeiraNota <= 10 && primeiraNota >= 0) &&
            (segundaNota <= 10 && segundaNota >= 0) &&
            (terceiraNota <= 10 && terceiraNota >= 0) &&
            (quartaNota <= 10 && quartaNota >= 0)
          ) {
            mediaAluno =
              (Number(primeiraNota) +
                Number(segundaNota) +
                Number(terceiraNota) +
                Number(quartaNota)) /
              4;
            console.log("\nA média do(a) " + nomeAluno + " é: " + mediaAluno.toFixed(2));
            if (mediaAluno < 7) {
              console.log("ALUNO REPROVADO");
            } else {
              console.log("ALUNO APROVADO! PARABÉNS");
            }
          }
          else {
            console.log('DIGITE NOTAS ENTRE 0 E 10')
          }
        });
      });
    });
  });
});
