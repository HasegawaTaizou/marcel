const verificarNumeros = function (numeroInicial, numeroFinal) {
  if (isNumeroVazio(numeroInicial) == false) {
    return false;
  }
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
  return true;
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

const validarInputInicial = function (numero) {
  if (
    isNumeroVazio(numero) &&
    isNumeroValido(numero) &&
    isNumeroInicialDentroLimite(numero)
  ) {
    return numero;
  } else {
    return false;
  }
};

const validarInputFinal = function (numero) {
  if (
    isNumeroVazio(numero) &&
    isNumeroValido(numero) &&
    isNumeroFinalDentroLimite(numero)
  ) {
    return numero;
  } else {
    return false;
  }
};

const isNumeroInicialDentroLimite = function (numeroInicial) {
  if (Number(numeroInicial) >= 0 && Number(numeroInicial) <= 500) {
    return numeroInicial;
  } else {
    console.log("NÚMERO INICIAL FORA DO LIMITE. DIGITE UM LIMITE VÁLIDO");
    return false;
  }
};

const isNumeroFinalDentroLimite = function (numeroFinal) {
  if (Number(numeroFinal) >= 100 && Number(numeroFinal) <= 1000) {
    return numeroFinal;
  } else {
    console.log("NÚMERO FINAL FORA DO LIMITE. DIGITE UM LIMITE VÁLIDO");
    return false;
  }
};

const isNumeroVazio = function (numero) {
  if (numero == "") {
    console.log("NÚMERO VAZIO. PREENCHA COM UM NÚMERO VÁLIDO");
    return false;
  } else {
    return numero;
  }
};

const isNumeroValido = function (numero) {
  if (isNaN(numero)) {
    console.log("NÚMERO INVÁLIDO. PREENCHA COM UM NÚMERO VÁLIDO");
    return false;
  } else {
    return numero;
  }
};

const isNumerosIguais = function (numero1, numero2) {
  if (Number(numero1) == Number(numero2)) {
    console.log("NUMEROS IGUAIS. DIGITE NÚMEROS DIFERENTES");
    return true;
  } else {
    return false;
  }
};

const verificarValorMaior = function (numero1, numero2) {
  if (numero1 > numero2) {
    console.log("VALOR INICIAL MAIOR QUE O FINAL. PREENCHA CORRETAMENTE");
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
  isNumerosIguais,
  verificarTipo,
  verificarValorMaior,
  validarInputInicial,
  validarInputFinal,
};
