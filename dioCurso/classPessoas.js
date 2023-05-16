/*
2) Crie uma classe para representar pessoas. As pessoas devem
ter a capacidade de dizer o valor de seu IMC( IMC = peso / 
(altara * altura)); Instancie uma pessoa chamada José que tenha
70kg de peso e 1.75 de altura e peça para José dizer o valor
do seu IMC;
*/

class Pessoa { 
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    } 
    CalcularIMC() {
        return this.peso / (this.altura * this.altura)
    }
    classifIMC() {
        const IMC = this.CalcularIMC();

        if (IMC < 18.5) {
            return ('Seu IMC é de: '+ IMC.toFixed(2) +' , abaixo de 18.5, você está abaixo do peso.')
        } else if  (IMC > 18.5 && IMC < 25) {
            return ('Seu IMC é de: '+ IMC.toFixed(2) +' , entre 18.5 e 25, você está com seu peso normal.')
        } else if (IMC > 25 && IMC < 30) {
            return ('Seu IMC é de: '+ IMC.toFixed(2) +' , entre 25 e 30, você está acima do peso.')
        } else if (IMC > 30 && IMC < 40) {
            return ('Seu IMC é de: '+ IMC.toFixed(2) +' , entre 30 e 40, você está obeso.')
        } else {
            return ('Seu IMC é de: '+ IMC.toFixed(2) +' , acima de 40, você está com obesidade grave.')  
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose)
console.log(jose.classifIMC());

const leonardo = new Pessoa('Leonardo', 86, 1.78);
console.log(leonardo);
console.log( leonardo.classifIMC());