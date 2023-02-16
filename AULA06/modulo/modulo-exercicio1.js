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
  console.log(`
    O ${nomeAluno} foi ${situacao} na disciplina ${nomeDisciplina}
    Curso: ${nomeCurso}
    ${sexoProfessor}: ${nomeProfessor}
    Notas do ${sexoAluno}: ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${notaExame}
    Média final: ${mediaFinal}
    Média final do Exame: ${mediaRecuperacao}
    `);
};

const validarInput = function (numero) {
  if (
    isNumerosVazio(numero) &&
    isNumeroValido(numero) &&
    isNumerosDentroIntervalo(numero)
  ) {
    return numero;
  } else {
    return false;
  }
};

const isNumerosDentroIntervalo = function (numero) {
  if (Number(numero) <= 100 && Number(numero) >= 0) {
    return true;
  } else {
    console.log(
      "NÚMERO FORA DO INTERVALO PERMITIDO. PREENCHA COM UM NÚMERO VÁLIDO"
    );
    return false;
  }
};

const converterInput = function (numero) {
  numero = numero.replace(",", ".");
  return numero;
};

const isNumerosVazio = function (numero) {
  if (numero == "") {
    console.log("NUMERO VAZIO. PREENCHA COM UM NÚMERO VÁLIDO");
    return false;
  } else {
    return true;
  }
};

const isNumeroValido = function (numero) {
  if (isNaN(numero)) {
    console.log("NÚMERO INVÁLIDO. PREENCHA COM UM NÚMERO VÁLIDO");
    return false;
  } else {
    return true;
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
    mediaRecuperacao = "NÃO PRECISOU FAZER";
    notaExame = "NÃO PRECISOU FAZER";
    return true;
  } else if (mediaFinal >= 50 && mediaFinal < 70) {
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
  if (sexoAluno == "M") {
    sexoAluno = "Aluno";
    return sexoAluno;
  } else if (sexoAluno == "F") {
    sexoAluno = "Aluna";
    return sexoAluno;
  } else {
    console.log('DIGITE "M" PARA MASCULINO, OU "F" PARA FEMININO');
    return false;
  }
};

const verificarSexoProfessor = function (sexoProfessor) {
  if (sexoProfessor == "M") {
    sexoProfessor = "Professor";
    return sexoProfessor;
  } else if (sexoProfessor == "F") {
    sexoProfessor = "Professora";
    return sexoProfessor;
  } else {
    console.log('DIGITE "M" PARA MASCULINO, OU "F" PARA FEMININO');
    return false;
  }
};

const verificarNomeAluno = function (nomeAluno) {
  if (nomeAluno == "") {
    console.log("PREENCHA O NOME DO ALUNO");
    return false;
  } else {
    return nomeAluno;
  }
};

const verificarNomeProfessor = function (nomeProfessor) {
  if (nomeProfessor == "") {
    console.log("PREENCHA O NOME DO PROFESSOR");
    return false;
  } else {
    return nomeProfessor;
  }
};

const verificarNomeCurso = function (nomeCurso) {
  if (nomeCurso == "") {
    console.log("PREENCHA O NOME DO CURSO");
    return false;
  } else {
    return nomeCurso;
  }
};

const verificarNomeDisciplina = function (nomeDisciplina) {
  if (nomeDisciplina == "") {
    console.log("PREENCHA O NOME DA DISCIPLINA");
    return false;
  } else {
    return nomeDisciplina;
  }
};

module.exports = {
  mostrarRelatorio,
  validarInput,
  isAlunoAprovado,
  verificarSexoAluno,
  verificarSexoProfessor,
  fazerRecuperacao,
  verificarNomeAluno,
  verificarNomeProfessor,
  verificarNomeCurso,
  verificarNomeDisciplina,
  converterInput,
};
