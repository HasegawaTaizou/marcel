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

module.exports = {
  mostrarResultado,
};
