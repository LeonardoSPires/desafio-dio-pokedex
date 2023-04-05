
/*
Faça um programa para calcular o valor de uma viajem.

Você terá 5 variáveis:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por Km;
5 - Distância em Km da viajem;

Imprima no console o valor que será gasto para realiar esta viagem.
*/

let preEtanol = 4.10 ;
let preGasolina = 5.20;
let consumoEta = 7;
let consumoGaso = 10;
let disEmKm = 150;
let tipComb = 'Gasolina';


if (tipComb === 'Gasolina') {
    var valorGasto = (disEmKm / consumoGaso) * preGasolina;
} else {
    var valorGasto = (disEmKm/consumoEta) * preEtanol;
}
console.log(valorGasto.toFixed(2));




