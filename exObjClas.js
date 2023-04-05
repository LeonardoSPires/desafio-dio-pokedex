/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e 
gastos médios de combustível por km rodado. 
Crie um metodo que dado a quantidade de km
 e o preço dos combustível nos dê o valor
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedPorKm;

    constructor (marca, cor, gastoMedPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedPorKm = gastoMedPorKm;
    }

    calcGastPercurso(disKm, preComb) {
        return disKm * this.gastoMedPorKm * preComb;
    }

}

const palio = new Carro('Fiat', 'Prata', 1/10);
console.log(palio.calcGastPercurso(73, 5));

const uno = new Carro('Fiat', 'preto', 1/12);
console.log(uno.calcGastPercurso(73, 5));