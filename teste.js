const numPedidos = 2;
const prato = ['Hamburguer de lentilha', 'Salada de fruta'];
const calorias = [300, 60];

text = "";
for (let i = 1; i <= numPedidos; i++) {
    text += cars[i] + "<br>";
  //Explicação: atribui "true" se o valor lido via gets() for estritamente igual a 's'.
  //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
  const ehVegano = 'Vegano'.toLowerCase() === 's';
  //TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.
  
  let tipoPrato;
    if(ehVegano){
      tipoPrato = 'Vegano'
    }else {
      tipoPrato = 'Nao-Vegano'
    }
   
  console.log(`Pedido ${i}: ${prato} (${tipoPrato}) - ${calorias} calorias`)
}

