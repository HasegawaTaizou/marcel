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

const validarInputs = function () {
  let status = true;
  let mensagem = "";
  if (!isNumerosDentroIntervalo()) {
    mensagem = "NÚMERO(S) FORA DO INTERVALO";
    console.log(mensagem);
    status = false;
  }
  if (isNumerosVazio) {
    mensagem = "NÚMERO(S) VAZIO(S)";
    console.log(mensagem);
    status = false;
  }
  if (isNumerosValidos) {
    mensagem = "NÚMERO(S) INVÁLIDO(S)";
    console.log(mensagem);
    status = false;
  }
  return status;
};

const isNumerosDentroIntervalo = function () {
  if (
    (Number(numero1) <= 100 && Number(numero1) >= 0) ||
    (Number(numero2) <= 100 && Number(numero2) >= 0) ||
    (Number(numero3) <= 100 && Number(numero3) >= 0) ||
    (Number(numero4) <= 100 && Number(numero4) >= 0)
  ) {
    return false;
  } else {
    return true;
  }
};

const isNumerosVazio = function () {
  if (numero1 == "" || numero2 == "" || numero3 == "" || numero4 == "") {
    return true;
  } else {
    return false;
  }
};

const isNumerosValidos = function () {
  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4)) {
    return true;
  } else {
    return false;
  }
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
    return false;
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
    return false;
  }

  return sexo;
};

module.exports = {
  mostrarRelatorio,
  validarInputs,
  isAlunoAprovado,
  verificarSexoAluno,
  verificarSexoProfessor,
  fazerRecuperacao,
};
