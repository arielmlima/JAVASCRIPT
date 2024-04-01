
var agora = new Date()
var diaSem = agora.getDay()

//diaSem = 4

/* 
0 Domingo
1 Segunda 
2 Terça 
3 Quarta
4 Quinta 
5 Sexta
6 Sabado
*/

//console.log(diaSem)

//A saida vai ser 5 pois hoje é sexta feira.

//Fica meio dificil de entender usando numero, vamos passar isso para um switch, para facilitar nossa vida.

switch (diaSem) {
    case 0:
    console.log('Hoje é DOMINGO')  
    break 

    case 1:
    console.log('Hoje é SEGUNDA') 
    break  

    case 2:
    console.log('Hoje é TERÇA') 
    break  

    case 3:
    console.log('Hoje é QUARTA') 
    break  

    case 4:
    console.log('Hoje é QUINTA') 
    break  

    case 5:
    console.log('Hoje é SEXTA') 
    break  

    case 6:
    console.log('Hoje é SABADO') 
    break 

    default: //Se não for um dia de 0 a 6, note que o default é dentro do ultimo case, e não fora.
    console.log('[ERRO] Dia invalido')
    break
}

//MUITO UTIL NESSAS SITUAÇÕES MAIS PONTUAIS.
