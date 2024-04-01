/* REPETIÇÕES/ LAÇOS OU ITERAÇÃO NO JS

É bem simples: a nossa vida por exemplo, nos pegamos a todo tempo fazendo repetições.

//Pensa em uma pizza, digamos que uma vez por mês eu como uma pizza inteira, que para você comer ela, você primeiro come uma fatia, depois outra fatia, depois outra fatia, isso é uma repetição. 

Vamos criar uma função para isso:

Minha pizza tinha 8 pedaços vou ter 8 comandos comerFatia (), e conseguimos cumprir nosso objetivo que era comer a pizza inteira.

function comerPizza(){
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
}

Na programação é assim tambem, a gente parte de um ponto A e vai até um ponto B, sua tarefa na hora de programar é escrever os programas para que você saia do ponto A e chegue no ponto B que é o seu objetivo.

Existem varias formas de alcançarmos nossos objetivos, oque chamamos de ESTRUTURA DE CONTROLE:

A primeira estrutura é a SEQUENCIA: vou do ponto A ao B executando sequencias, sequencialmente até chegar ao nosso objetivo. Foi exatamente oque aconteceu no exemplo da pizza.

Só que nem tudo é assim, as vezes existem desvios, como vimos na aula passada existem as CONDIÇÕES. So que aqui esse comportamento é um pouquinho diferente: Se esse teste lógico/bloco for verdade, ele vai executar o bloco, so que ele não vai seguir desse bloco pro ponto final, ele vai voltar e fazer um looping/laço/repetição. E se ele for verdadeiro denovo ele vai fazer denovo essa repetição, e vai ficar testando, até que seja falso.

Exemplo:
Se a pizza for de marguerita eu como se não for eu não como.

//ENQUANTO ESSA CONDIÇÃO FOR VERDADEIRA! 
// SO VAI ENCERRAR QUANDO FOR FALSA! A PARTIR DO MOMENTO QUE ESSE LOSANGULO FOR FALSO, O LOOP É QUEBRADO E SEGUE O FLUXO NATURAL.

        //             o
        //             ↓
        //   --->  ___ ⧫ _______
        //   '     ↓           ↓
        //   '--- bloco      bloco
        //       verdade     falso
        //              o<-----
        //              ↓

        //Essa é a estrutura de laço mais comum
        O termo ENQUANTO: se chama WHILE em inglês.  

        Como escrevemos no código:
        while (condição){ }

Representação do mesmo diagrama acima de outra forma:
               
              ------  
        //   '     ↓           
  LOOP  //   '  while (condição){ //bloco  
        //   '- }               '
                                '
   SAIDA      o --------------- '
     
 
Voltando ao exemplo da pizza, se a pizza tiver mais de 8 fatias, a nossa logica não vai funcionar pois so repete 8 vezes. E com o while vai ficar tudo mais facil:

Sempre que encontrar while ler como enquanto.
        
funcion comerPizza(){
    while(temFatia()){
        comerFatia()
    }
}

//Enquanto tiver fatias ele vai ta comendo as fatias.

//O while dentro da function comerPizza vai ter um bloco dentro temFatia(), enquanto tiver fatias, ele vai executar esse outro bloco comerFatia(), quando acabar ele sai do looping.

Muito mais eficiente esse programa que fizemos acima, a outra so servia para 8, ou teriamos que refazer com 50 fatias se tivesse, complicado né?

Vamos fazer agora dessa forma que aprendemos, so que executando Tudo bem na tela, imagina que precisasse de 500 repetições.

console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
...
*/

//var cont = 1
//while (cont <= 500){//Vai repetir 500 vezes
//    console.log('Tudo bem?')
//    cont++ //cont = cont + 1
//}

//O while é considerado uma estrutura de repetição com o teste lógico no inicio, porque ele faz o teste, e sendo verdadeiro ele faz o bloco. TESTA -> EXECUTA -> FAZ LOOPING 

 //             o
        //             ↓
        //   --->  ___ ⧫ _______
        //   '     ↓           ↓
        //   '--- bloco      bloco
        //       verdade     falso
        //              o<-----
        //              ↓

//DO WHILE
//Existe tambem uma outra possibilidade, a estrutura ao contrario, primeiro executo o bloco e depois eu faço o teste. Se o teste lógico for verdadeiro ele faz o loop, e executa o bloco de novo. EXECUTA BLOCO DEPOIS TESTA.

//O nome dessa condição é DO (faça em português).

 //                    
        //             ↓
        //   --->      O
        //   '         ↓
        //   '       bloco
        //   '         ↓           
        //   '-------  ⧫      
        //   true      ↓  
        //           false       
        //              

//Sendo a estrutura conhecida por teste lógico no final. DO WHILE.

//do {

//}while(condição)


//Como seria em código:
var cont = 1
do{                                 //FAÇA
    console.log('Tudo bem?')
    cont++ //cont = cont + 1

}while(cont <= 6)                   //ATÉ

//Enquanto a condição for verdadeira vai fazendo o bloco, e vai ficar em loop até que seja falsa, e vai sair do loop, segue a vida normal. 