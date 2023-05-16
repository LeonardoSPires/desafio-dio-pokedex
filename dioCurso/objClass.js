class Pessoa {

    nome;
    idade;
    anoDeNasci;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNasci = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e miha idade é ${this.idade}`);
    }
}


const leonardo = new Pessoa('Leonardo', 35);
const matheus = new Pessoa('Matheus', 12);

console.log(leonardo);

