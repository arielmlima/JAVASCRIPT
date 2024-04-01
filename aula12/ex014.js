//Exercicio: 

var agora =  new Date() //Como fazer para pegar a hora atual, declaramos a variavel agora e puxamos o new Date.
var hora = agora.getHours() //nossa variavel agora recebe agora. getHours(), que vai pegar a hora do sistema que ta rodando, para a gente e guardar na nossa variavel. Tem para ano, segundo, minuto, mês... 

console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12 && hora >= 5) {
    console.log('BOM DIA')
}else if(hora >= 12 && hora < 18) {
    console.log('BOA TARDE')
}
else if(hora >= 18 && hora < 24  ) {
    console.log('BOA NOITE')
}
else if(hora >= 0 || hora < 4) {
    console.log('BOA MADRUGADA')
}


//Condição Múltipla: Alem das condições aninhadas temos as condições multiplas. Onde vamos trabalhar com valores FIXOS. Muito util para situações pontuais, e especificas. 

//          ↓
//      ____⧫____
//      /  / \  \
//     /  /   \  \
//    /           \
//   bl  bl   bl  bl
//    \   \   /   /
//      \  \ /   /
//          o
//          ↓

//Legenda: bl é o bloco.

switch(expressão){
  case valor1:

  break
  case valor2:

  break
  case valor3:

  break
  default: 
  
  break
}
//Para cada expressão vamos colocar um case (caso), se a expressão for o primeiro valor, executa o primeiro bloco, se for o segundo executa o segundo, se for o terceiro executa o terceiro, se for nenhum deles, executa o default:

//o default é como se fosse um else no switch, se não fizer nenhum caso anterior, cai no default. 

//Para cada um dos cases temos um bloco. E por fim temos o default opcional DENTRO do ultimo bloco, que é o padrão, se nenhum dos de cima obedecer.

//Importante: Obrigatório: para cada case temos que colocar um comando break no final, so no ultimo que é opcional, mas vamos colocar sempre!

//Ele continua executando os comandos até achar um break, tem que ter! Sem eles teremos problemas.