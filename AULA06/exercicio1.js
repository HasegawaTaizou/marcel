var readline = require("readline");

var moduloExercicio1 = require("./modulo/modulo-exercicio1.js");

var entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

entradaDados.question("Digite o nome do aluno: ", function (nome) {
  let nomeAluno;
  if (moduloExercicio1.verificarNomeAluno(nome)) {
    nomeAluno = nome;
  } else {
    console.log("PREENCHA O NOME DO ALUNO");
    entradaDados.close();
  }

  entradaDados.question("Digite o nome do professor: ", function (nome) {
    let nomeProfessor;
    if (moduloExercicio1.verificarNomeProfessor(nome)) {
      nomeProfessor = nome;
    } else {
      console.log("PREENCHA O NOME DO PROFESSOR");
      entradaDados.close();
    }

    entradaDados.question("Digite o sexo do aluno: ", function (sexo) {
      let sexoAluno;
      if (moduloExercicio1.verificarSexoAluno(sexo)) {
        sexoAluno = moduloExercicio1.verificarSexoAluno(sexo);
      } else {
        console.log('DIGITE "M" PARA MASCULINO, OU "F" PARA FEMININO');
        entradaDados.close();
      }

      entradaDados.question("Digite o sexo do professor: ", function (sexo) {
        let sexoProfessor;
        if (moduloExercicio1.verificarSexoProfessor(sexo)) {
          sexoProfessor = moduloExercicio1.verificarSexoProfessor(sexo);
        } else {
          console.log('DIGITE "M" PARA MASCULINO, OU "F" PARA FEMININO');
          entradaDados.close();
        }
        entradaDados.question("Digite o nome do curso: ", function (curso) {
          let nomeCurso;
          if (moduloExercicio1.verificarNomeCurso(curso)) {
            nomeCurso = curso;
          } else {
            console.log("PREENCHA O NOME DO CURSO");
            entradaDados.close();
          }

          entradaDados.question(
            "Digite o nome da disciplina: ",
            function (disciplina) {
              let nomeDisciplina;
              if (moduloExercicio1.verificarNomeDisciplina(disciplina)) {
                nomeDisciplina = disciplina;
              } else {
                console.log("PREENCHA O NOME DA DISCIPLINA");
                entradaDados.close();
              }

              entradaDados.question(
                "Digite a primeira nota de 0 a 100: ",
                function (nota1) {
                  let primeiraNota = nota1;

                  entradaDados.question(
                    "Digite a segunda nota de 0 a 100: ",
                    function (nota2) {
                      let segundaNota = nota2;

                      entradaDados.question(
                        "Digite a terceira nota de 0 a 100: ",
                        function (nota3) {
                          let terceiraNota = nota3;

                          entradaDados.question(
                            "Digite a quarta nota de 0 a 100: ",
                            function (nota4) {
                              let quartaNota = nota4;
                              if (
                                moduloExercicio1.isNumerosDentroIntervalo(
                                  primeiraNota,
                                  segundaNota,
                                  terceiraNota,
                                  quartaNota
                                ) &&
                                moduloExercicio1.isNumerosValidos(
                                  primeiraNota,
                                  segundaNota,
                                  terceiraNota,
                                  quartaNota
                                ) &&
                                moduloExercicio1.isNumerosVazio(
                                  primeiraNota,
                                  segundaNota,
                                  terceiraNota,
                                  quartaNota
                                )
                              ) {
                                if (
                                  moduloExercicio1.isAlunoAprovado(
                                    primeiraNota,
                                    segundaNota,
                                    terceiraNota,
                                    quartaNota
                                  )
                                ) {
                                  moduloExercicio1.mostrarRelatorio(
                                    nomeAluno,
                                    nomeProfessor,
                                    sexoAluno,
                                    sexoProfessor,
                                    nomeCurso,
                                    nomeDisciplina,
                                    primeiraNota,
                                    segundaNota,
                                    terceiraNota,
                                    quartaNota,
                                    "NÃO PRECISOU FAZER"
                                  );
                                } else {
                                  entradaDados.question(
                                    "Insira a nota do exame: ",
                                    function (nota) {
                                      moduloExercicio1.fazerRecuperacao(nota);
                                      moduloExercicio1.mostrarRelatorio(
                                        nomeAluno,
                                        nomeProfessor,
                                        sexoAluno,
                                        sexoProfessor,
                                        nomeCurso,
                                        nomeDisciplina,
                                        primeiraNota,
                                        segundaNota,
                                        terceiraNota,
                                        quartaNota,
                                        nota
                                      );
                                    }
                                  );
                                }
                              }
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        });
      });
    });
  });
});
