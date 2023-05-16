/*Faça um programa para calcular o valor gasto de combustível em uma viajem.

Você terá 3 variáveis:
- preço do combustível.
- valor medio de combustível do carro por km.
- distâncias em km da viajem.

Imprima no console o valor que será gasto de combustível para realizar a viajem.*/

let precoCombustivel = 5.20;
const kmPorLitro = 11;
let distEmKm = 320;

const gastoComb = (distEmKm/ kmPorLitro) * precoCombustivel;



console.log(gastoComb.toFixed(2));



