

const { gets, print } = require('./funcoesAux');

const numSorteados = [];

for (let i = 0; i < 5; i++) {
    const numSorteado = gets();
    numSorteados.push(numSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numSorteados.length; i++) {
    const numSorteado = numSorteados[i];
    if (numSorteado > maiorValor) {
        maiorValor = numSorteado;
    }
}

print(maiorValor);
