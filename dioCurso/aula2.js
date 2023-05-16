
var numero = ('33');

const numeroPar =  (numero % 2) === 0;

if (numero === 0) {
    console.log('O número é invalido!');
} else if (numeroPar) {
    console.log('Par');
} else {
    console.log('Impar');
}