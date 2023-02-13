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

    while (contadorInicial <= contadorFinal) {
      resultado = Number(tabuadaInicial) * Number(contadorInicial);
      console.log(`${tabuadaInicial} x ${contadorInicial} = ${resultado}`);
      contadorInicial++;
    }
    contadorInicial = contadorInicialResetado;
    contadorFinal = contadorFinalResetado;

    tabuadaInicial++;
  }
  if (tabuadaInicial <= tabuadaFinal) {
    console.log(`${tabuadaInicial} x ${contadorInicial} = ${resultado}`);
  } else {
    console.log("CABOU");
  }
};

const verificarValorVazio = function (numero) {
  if (numero == "") {
    return false;
  } else {
    return true;
  }
};

// A entrada da tabuada deverá ser entre 2 e 100, não sendo permitido
// outros valores;
const verificarValorTabuadaInicial = function (tabuadaInicial) {
  if (Number(tabuadaInicial) >= 2 && Number(tabuadaInicial) <= 100) {
    return true;
  } else {
    return false;
  }
};

const verificarValorTabuadaFinal = function (tabuadaFinal) {
  if (Number(tabuadaFinal) >= 2 && Number(tabuadaFinal) <= 100) {
    return true;
  } else {
    return false;
  }
};

//O valor até onde será calculada a tabuada deverá ser entre 1 e 50;
const verificarValorContadorInicial = function (contadorInicial) {
  if (Number(contadorInicial) >= 1 && Number(contadorInicial) <= 50) {
    return true;
  } else {
    return false;
  }
};

const verificarValorContadorFinal = function (contadorFinal) {
  if (Number(contadorFinal) >= 1 && Number(contadorFinal) <= 50) {
    return true;
  } else {
    return false;
  }
};

const verificarValorMaior = function (valor1, valor2) {
  if(valor1 > valor2) {
    return false
  } else {
    return true
  }
}

module.exports = {
  mostrarResultado,
  verificarValorVazio,
  verificarValorTabuadaInicial,
  verificarValorTabuadaFinal,
  verificarValorContadorInicial,
  verificarValorContadorFinal,
  verificarValorMaior,
};
