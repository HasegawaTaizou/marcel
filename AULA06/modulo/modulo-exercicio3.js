const verificarNumeros = function (numeroInicial, numeroFinal) {
  for (numeroInicial; numeroInicial <= numeroFinal; numeroInicial++) {
    let quantidadeNumerosPares = 0;
    let quantidadeNumerosImpares = 0;

    let numeroPar;
    let numeroImpar;

    if (Number(numeroInicial) % 2 == 0) {
      numeroPar = numeroInicial;
      quantidadeNumerosPares++;
    } else {
      numeroImpar = numeroInicial;
      quantidadeNumerosImpares++;
    }
    // console.log(`ÍMPAR: ${numeroImpar}`);
    // console.log(`Qtde de números encontrados PAR: ${quantidadeNumerosPares}`);
    // console.log(
    //   `Qtde de números encontrados IMPAR: ${quantidadeNumerosImpares}`
    // );
    if (numeroPar !== undefined) {
      console.log(`PAR ${numeroPar}\n`);
    }
    if (numeroImpar !== undefined) {
      console.log(`IMPAR: ${numeroImpar}\n`);
    }
  }
};

module.exports = {
  verificarNumeros,
};
