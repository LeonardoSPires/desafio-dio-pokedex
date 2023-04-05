/*
function meuNome(name) {
    console.log('Seu nome é: '+ name);
}

meuNome('Leonardo');

function quadrado(valor) {
    return valor * valor;
}

const valorAoQuad = quadrado(10);
console.log(valorAoQuad);
*/

function incJuros(valor, percJuros) {
    const valAcrecimo = (percJuros/100) * valor;
    return valor + valAcrecimo;
}

console.log(incJuros(100,10));
console.log(incJuros(150,20));