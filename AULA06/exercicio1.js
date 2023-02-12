var readline = require("readline");

var moduloExercicio1 = require("./modulo/modulo-exercicio1.js");

var entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

entradaDados.question("Digite o nome do aluno: ", function (nome) {
  let nomeAluno = nome;

  entradaDados.question("Digite o nome do professor: ", function (nome) {
    let nomeProfessor = nome;

    entradaDados.question("Digite o sexo do aluno: ", function (sexo) {
      let sexoAluno = moduloExercicio1.verificarSexoAluno(sexo);

      entradaDados.question("Digite o sexo do professor: ", function (sexo) {
        let sexoProfessor = moduloExercicio1.verificarSexoProfessor(sexo);

        entradaDados.question("Digite o nome do curso: ", function (curso) {
          let nomeCurso = curso;

          entradaDados.question(
            "Digite o nome da disciplina: ",
            function (disciplina) {
              let nomeDisciplina = disciplina;

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
