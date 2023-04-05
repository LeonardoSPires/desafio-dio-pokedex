/*
Código condição de pagamento:
- Á vista débito, recebe 10% de desconto;
- Á vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem jutos;
- Acima de duas vezes, preço normal de etiqueta mais juros
de 10%;
*/

function aplicarDes(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJur(valor, juros) {
    return (valor + (valor * (juros/100)));
}

const produto = 100;
const formaDePag = 2;

if (formaDePag === 1) {
   console.log (aplicarDes(produto, 10));
}else if (formaDePag === 2) {
    console.log (aplicarDes(produto, 15));
}else if (formaDePag === 3) {
    console.log(produto);
} else {
    console.log (aplicarJur(produto, 10));
}


