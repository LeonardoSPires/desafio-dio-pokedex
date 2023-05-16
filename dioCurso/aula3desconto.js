/*
Elabore um algoritmo que calcule o que deve ser pago por um
 produto, considerando o preço normal de etiqueta e a 
 escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a 
condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- Á vista débito, recebe 10% de desconto;
- Á vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem jutos;
- Acima de duas vezes, preço normal de etiqueta mais juros
de 10%;
*/

const produto = 100;
const formaDePag = 4;

if (formaDePag === 1) {
    console.log(produto - (produto * 0.1));
}else if (formaDePag === 2) {
    console.log(produto - (produto * 0.15));
}else if (formaDePag === 3) {
    console.log(produto);
} else {
    console.log(produto + (produto * .1));
}


