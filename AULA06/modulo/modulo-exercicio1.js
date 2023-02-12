let numero1, numero2, numero3, numero4;
let mediaFinal;
let situacao;
let mediaRecuperacao;

const mostrarRelatorio = function (
  nomeAluno,
  nomeProfessor,
  sexoAluno,
  sexoProfessor,
  nomeCurso,
  nomeDisciplina,
  numero1,
  numero2,
  numero3,
  numero4,
  notaExame
) {
  // isNumerosDentroIntervalo()
  // isNumerosVazio()
  // isAlunoAprovado(numero1, numero2, numero3, numero4)
  // verificarSexo()

  console.log(`
    O ${nomeAluno} foi ${situacao} na disciplina ${nomeDisciplina}
    Curso: ${nomeCurso}
    ${sexoProfessor}: ${nomeProfessor}
    Notas do ${sexoAluno}: ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${notaExame}
    Média final: ${mediaFinal}
    Média final do Exame: ${mediaRecuperacao}
    `);
};

const isNumerosDentroIntervalo = function () {
  numero1 = 0;
  numero2 = 0;
  numero3 = 0;
  numero4 = 0;

  let status = true;

  if (Number(numero1) <= 100 && Number(numero1) >= 0) {
    console.log("ERRO: NÚMERO FORA DO INTERVALO PERMITIDO");
    status = false;
  }
  if (Number(numero2) <= 100 && Number(numero2) >= 0) {
    console.log("ERRO: NÚMERO FORA DO INTERVALO PERMITIDO");
    status = false;
  }
  if (Number(numero3) <= 100 && Number(numero3) >= 0) {
    console.log("ERRO: NÚMERO FORA DO INTERVALO PERMITIDO");
    status = false;
  }
  if (Number(numero4) <= 100 && Number(numero4) >= 0) {
    console.log("ERRO: NÚMERO FORA DO INTERVALO PERMITIDO");
    status = false;
  }
  return status;
};

const isNumerosVazio = function (numero1, numero2, numero3, numero4) {
  let status = true;

  if (numero1 == "") {
    console.log("ERRO: NÚMERO NÃO PODE FICAR VAZIO");
    status = false;
  }
  if (numero2 == "") {
    console.log("ERRO: NÚMERO NÃO PODE FICAR VAZIO");
    status = false;
  }
  if (numero3 == "") {
    console.log("ERRO: NÚMERO NÃO PODE FICAR VAZIO");
    status = false;
  }
  if (numero4 == "") {
    console.log("ERRO: NÚMERO NÃO PODE FICAR VAZIO");
    status = false;
  }
  return status;
};

const isAlunoAprovado = function (numero1, numero2, numero3, numero4) {
  mediaFinal =
    (Number(numero1) + Number(numero2) + Number(numero3) + Number(numero4)) / 4;
  situacao = "";

  if (mediaFinal >= 70) {
    situacao = "APROVADO";
    mediaRecuperacao = "NÃO PRECISOU FAZER";
    notaExame = "NÃO PRECISOU FAZER";
    return true;
  } else if (mediaFinal < 50) {
    situacao = "REPROVADO";
    return true;
  } else if (mediaFinal >= 50 && mediaFinal < 70) {
    fazerRecuperacao();
    return false;
  } else {
    return false;
  }
};

const fazerRecuperacao = function (notaExame) {
  mediaRecuperacao = (Number(mediaFinal) + Number(notaExame)) / 2;

  if (mediaRecuperacao >= 60) {
    situacao = "APROVADO POR RECUPERAÇÃO";
  } else {
    situacao = "REPROVADO POR RECUPERAÇÃO";
  }
  return mediaRecuperacao;
};

const verificarSexoAluno = function (sexoAluno) {
  let sexo = sexoAluno;
  if (sexo == "M") {
    sexo = "Aluno";
  } else if (sexo == "F") {
    sexo = "Aluna";
  } else {
    sexo = "SEXO INEXISTENTE";
  }
  return sexo;
};

const verificarSexoProfessor = function (sexoProfessor) {
  let sexo = sexoProfessor;
  if (sexo == "M") {
    sexo = sexo = "Professor";
  } else if (sexo == "F") {
    sexo = sexo = "Professora";
  } else {
    sexo = "SEXO INEXISTENTE";
  }

  return sexo;
};

module.exports = {
  mostrarRelatorio,
  isNumerosDentroIntervalo,
  isNumerosVazio,
  isAlunoAprovado,
  verificarSexoAluno,
  verificarSexoProfessor,
  fazerRecuperacao,
};
