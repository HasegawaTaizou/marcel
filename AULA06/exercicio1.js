var readline = require("readline");

var moduloExercicio1 = require("./modulo/modulo-exercicio1.js");

var entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

entradaDados.question("Digite o nome do aluno: ", function (nome) {
  let nomeAluno;
  nomeAluno = moduloExercicio1.verificarNomeAluno(nome);

  if (nomeAluno == false) {
    entradaDados.close();
    return false;
  }

  entradaDados.question("Digite o nome do professor: ", function (nome) {
    let nomeProfessor;
    nomeProfessor = moduloExercicio1.verificarNomeProfessor(nome);

    if (nomeProfessor == false) {
      entradaDados.close();
      return false;
    }

    entradaDados.question("Digite o sexo do aluno: ", function (sexo) {
      let sexoAluno;
      sexoAluno = moduloExercicio1.verificarSexoAluno(sexo);

      if (sexoAluno == false) {
        entradaDados.close();
        return false;
      }

      entradaDados.question("Digite o sexo do professor: ", function (sexo) {
        let sexoProfessor;
        sexoProfessor = moduloExercicio1.verificarSexoProfessor(sexo);

        if (sexoProfessor == false) {
          entradaDados.close();
          return false;
        }

        entradaDados.question("Digite o nome do curso: ", function (curso) {
          let nomeCurso;
          nomeCurso = moduloExercicio1.verificarNomeCurso(curso);

          if (nomeCurso == false) {
            entradaDados.close();
            return false;
          }

          entradaDados.question(
            "Digite o nome da disciplina: ",
            function (disciplina) {
              let nomeDisciplina;

              nomeDisciplina =
                moduloExercicio1.verificarNomeDisciplina(disciplina);

              if (nomeDisciplina == false) {
                entradaDados.close();
                return false;
              }

              entradaDados.question(
                "Digite a primeira nota de 0 a 100: ",
                function (nota1) {
                  let primeiraNota;
                  nota1 = moduloExercicio1.converterInput(nota1);

                  primeiraNota = moduloExercicio1.validarInput(nota1);

                  if (primeiraNota == false) {
                    entradaDados.close();
                    return false;
                  }

                  entradaDados.question(
                    "Digite a segunda nota de 0 a 100: ",
                    function (nota2) {
                      let segundaNota;
                      nota2 = moduloExercicio1.converterInput(nota2);

                      segundaNota = moduloExercicio1.validarInput(nota2);

                      if (segundaNota == false) {
                        entradaDados.close();
                        return false;
                      }

                      entradaDados.question(
                        "Digite a terceira nota de 0 a 100: ",
                        function (nota3) {
                          let terceiraNota;
                          nota3 = moduloExercicio1.converterInput(nota3);

                          terceiraNota = moduloExercicio1.validarInput(nota3);

                          if (terceiraNota == false) {
                            entradaDados.close();
                            return false;
                          }

                          entradaDados.question(
                            "Digite a quarta nota de 0 a 100: ",
                            function (nota4) {
                              let quartaNota;
                              nota4 = moduloExercicio1.converterInput(nota4);

                              quartaNota = moduloExercicio1.validarInput(nota4);

                              if (quartaNota == false) {
                                entradaDados.close();
                                return false;
                              }

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
                                entradaDados.close();
                              } else {
                                entradaDados.question(
                                  "Insira a nota do exame: ",
                                  function (nota) {
                                    nota =
                                      moduloExercicio1.converterInput(nota);
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
                                    entradaDados.close();
                                  }
                                );
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
