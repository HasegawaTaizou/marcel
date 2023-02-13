const verificarNumeros = function (numeroInicial, numeroFinal) {
  let quantidadeNumerosPares = 0;
  let quantidadeNumerosImpares = 0;

  let numeroPar;
  let numeroImpar;

  let numeroInicialResetado = numeroInicial;

  console.log("Lista de números Pares\n");
  for (numeroInicial; numeroInicial <= numeroFinal; numeroInicial++) {
    if (Number(numeroInicial) % 2 == 0) {
      numeroPar = numeroInicial;
      quantidadeNumerosPares++;
      console.log(`${numeroPar}\n`);
    }
  }
  console.log(`Qtde de números encontrados: ${quantidadeNumerosPares}\n`);

  numeroInicial = numeroInicialResetado;

  console.log("Lista de números Impares\n");
  for (numeroInicial; numeroInicial <= numeroFinal; numeroInicial++) {
    if (Number(numeroInicial) % 2 != 0) {
      numeroImpar = numeroInicial;
      quantidadeNumerosImpares++;
      console.log(`${numeroImpar}\n`);
    }
  }
  console.log(`Qtde de números encontrados: ${quantidadeNumerosImpares}\n`);
};

const verificarNumerosPares = function (numeroInicial, numeroFinal) {
  let quantidadeNumerosPares = 0;

  let numeroPar;

  console.log("Lista de números Pares\n");
  for (numeroInicial; numeroInicial <= numeroFinal; numeroInicial++) {
    if (Number(numeroInicial) % 2 == 0) {
      numeroPar = numeroInicial;
      quantidadeNumerosPares++;
      console.log(`${numeroPar}\n`);
    }
  }
  console.log(`Qtde de números encontrados: ${quantidadeNumerosPares}\n`);
};

const verificarNumerosImpares = function (numeroInicial, numeroFinal) {
  let quantidadeNumerosImpares = 0;

  let numeroImpar;

  console.log("Lista de números Impares\n");
  for (numeroInicial; numeroInicial <= numeroFinal; numeroInicial++) {
    if (Number(numeroInicial) % 2 != 0) {
      numeroImpar = numeroInicial;
      quantidadeNumerosImpares++;
      console.log(`${numeroImpar}\n`);
    }
  }
  console.log(`Qtde de números encontrados: ${quantidadeNumerosImpares}\n`);
};

const isNumeroInicialDentroLimite = function (numeroInicial) {
  if (Number(numeroInicial) >= 0 && Number(numeroInicial) <= 500) {
    return true;
  } else {
    return false;
  }
};

const isNumeroFinalDentroLimite = function (numeroFinal) {
  if (Number(numeroFinal) >= 100 && Number(numeroFinal) <= 1000) {
    return true;
  } else {
    return false;
  }
};

const isNumeroVazio = function (numero) {
  if (numero == "") {
    return true;
  } else {
    return false;
  }
};

const isNumeroValido = function (numero) {
  if (isNaN(numero)) {
    return true;
  } else {
    return false;
  }
};

const isNumerosIguais = function (numero1, numero2) {
  if (Number(numero1) == Number(numero2)) {
    return true;
  } else {
    return false;
  }
};

const verificarTipo = function (numero) {
  return numero;
};

module.exports = {
  verificarNumeros,
  verificarNumerosPares,
  verificarNumerosImpares,
  isNumeroInicialDentroLimite,
  isNumeroFinalDentroLimite,
  isNumeroVazio,
  isNumeroValido,
  isNumerosIguais,
  verificarTipo,
};
