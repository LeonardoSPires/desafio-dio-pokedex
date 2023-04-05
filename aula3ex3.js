/*
Faça um algoritimo que dado as 3 notas tiradas por um aluno
 em um semestre da faculdade calcule e imprima a sua média 
 e sua classificaão confirme a tabela a baixo.

Média + (nota1 + nota2 + nota3) /3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const nota1 = 10;
const nota2 = 9;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;

if (media <5) {
    console.log('Sua média é de: '+ media.toFixed(2) +' Você está Reprovado!') 
    } else if (media > 4 && media < 8) {
        console.log('Sua média é de: '+ media.toFixed(2) +' Você está de Recuperação!')    
    } else {
        console.log('Sua média é de: '+ media.toFixed(2) +' Você passou de semestre!')
    }
    
