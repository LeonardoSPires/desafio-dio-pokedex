/*
IMC = peso / (altura*altura)

Elabore um algoritimo que dado o peso e a altura de um 
adulto mostre em sua condição de acordo com a tabela abaixo:

IMC em adultos :
- Abaixo de 18.5 abaixo do peso.
- Entre 18.5 e 25, peso normal.
- Entre 25 e 30, acima do peso.
- Entre 30 e 40, obeso.
- Acima de 40, obesidade grave.
*/

function calImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classifImc(IMC) {
    if (IMC < 18.5) {
       return 'Seu IMC é de: '+ IMC.toFixed(2) +' abaixo de 18.5, você está abaixo do peso.';
    } else if  (IMC > 18.5 && IMC < 25) {
        return 'Seu IMC é de: '+ IMC.toFixed(2) +' entre 18.5 e 25, você está com seu peso normal.';
    } else if (IMC > 25 && IMC < 30) {
        return 'Seu IMC é de: '+ IMC.toFixed(2) +' entre 25 e 30, você está acima do peso.';
    } else if (IMC > 30 && IMC < 40) {
        return 'Seu IMC é de: '+ IMC.toFixed(2) +' entre 30 e 40, você está obeso.';
    } else {
        return 'Seu IMC é de: '+ IMC.toFixed(2) +' acima de 40, você está com obesidade grave.';
    }
}

// Main não declarada.
(function () {
    const peso = 150;
const altura = 1.78;
const IMC = calImc(peso, altura);
console.log(classifImc(IMC));
})();










