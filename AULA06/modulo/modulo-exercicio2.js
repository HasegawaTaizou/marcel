const mostrarResultado = function (
  tabuadaInicial,
  tabuadaFinal,
  contadorInicial,
  contadorFinal
) {
  let resultado = 0;
  while (tabuadaInicial <= tabuadaFinal) {
    contadorInicialResetado = contadorInicial;
    contadorFinalResetado = contadorFinal;

    console.log(`Tabuada do [${tabuadaInicial}]`);
    while (contadorInicial <= contadorFinal) {
      resultado = Number(tabuadaInicial) * Number(contadorInicial);
      console.log(`${tabuadaInicial} x ${contadorInicial} = ${resultado}`);
      contadorInicial++;
    }
    contadorInicial = contadorInicialResetado;
    contadorFinal = contadorFinalResetado;

    tabuadaInicial++;
  }
};

const verificarValorVazio = function (numero) {
  if (numero == "") {
    console.log("VALOR VAZIO. PREENCHA COM UM NÚMERO VÁLIDO");
    return false;
  } else {
    return numero;
  }
};

const verificarValorTabuada = function (tabuada) {
  if (Number(tabuada) >= 2 && Number(tabuada) <= 100) {
    return tabuada;
  } else {
    console.log("TABUADA FORA DO LIMITE. PREENCHA COM UM NÚMERO CORRETO");
    return false;
  }
};

const verificarValorContador = function (contador) {
  if (Number(contador) >= 1 && Number(contador) <= 50) {
    return contador;
  } else {
    console.log("CONTADOR FORA DO LIMITE. PREENCHA COM UM NÚMERO CORRETO");
    return false;
  }
};

const verificarValorMaior = function (valor1, valor2) {
  if (valor1 > valor2) {
    console.log("VALOR INICIAL MAIOR QUE O FINAL. PREENCHA CORRETAMENTE");
    return false;
  } else {
    return true;
  }
};

module.exports = {
  mostrarResultado,
  verificarValorVazio,
  verificarValorTabuada,
  verificarValorContador,
  verificarValorMaior,
};
