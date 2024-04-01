/*REVISANDO OQUE VIMOS ATÉ AGORA NESSAS ULTIMAS AULAS: DENTRE AS ESTRUTURAS DE CONTROLE VIMOS:

SEQUENCIAS: SÃO EXECUTADOS UM DEPOIS DO OUTRO DO PONTO A AO B, E TODOS OS BLOCOS VÃO SER EXECUTADOS, SEM DESVIOS.  


CONDIÇÕES: ESTRUTURAS LÓGICAS QUE DÃO UM OU MAIS DESVIOS, EXECUTANDO UM BLOCO OU OUTRO, A ESTRUTURA IF TE PERMITE UMA OU DUAS POSSIBILIDADES.

NA ESTRUTURA SWITCH QUE VIMOS, PERMITE MUITAS OUTRAS POSSIBILIDADES.

E VIMOS AS ESTRUTURAS DE REPETIÇÃO, OS LAÇOS, APRENDEMOS QUE OS CODIGOS PODEM SER EXECUTADOS VARIAS VEZES. 
WHILE - Teste lógico no inicio
DOWHILE - Teste lógico no final

NESSA AULA VAMOS VER A NOVA ESTRUTURA COM VARIAVEL DE CONTROLE FOR: REPRESENTADA POR UM HEXAGONO IRREGULAR, Nesse hexagono são feitas três coisas: Inicialização, Teste lógico e um incremento.

//Primeiro faz a inicializacao e teste lógico, se for verdadeiro ele executa o bloco, feito o bloco ele vai automaticamente voltar como vimos nas estruturas anteriores em looping, so que nessa vez do momento do looping ele vai fazer o incremento. O teste logico é feito mais uma vez e sendo verdadeiro, o looping é executado novamente, até ser falso, que vai encerrar.

//FOR

for(inicio;teste;incr){

}


Detalhe que posso ligar ao for qualquer estrutura que vimos anteriormente, while, do while, if, switch...
*/ 

var cont =1

/*
USANDO WHILE
while(cont<=10){
    console.log('Oi')
    cont++
}


USANDO DO WHILE
do{
    console.log('Oi')
    cont++
}while(cont<=10)
*/

//USANDO FOR       
//  (inicio;fim;incremento)

for (var cont=1;cont<=10;cont++){
    console.log('Oi')
}

//OS TRÊS PROGRAMAS TEM A MESMA FUNCIONALIDADE, MAS USAR O FOR É MAIS PRATICO QUANDO SE SABE OS LIMITES DAS NOSSAS EXECUÇÕES.


//EXERCICIO 2

console.log('Vai começar...')
for (var c=1;c<=10;c++){
    console.log(c)
}
console.log('FIM!')

//VISUALIZANDO NO DEBUG ENTENDEMOS BEM MELHOR, DEPURANDO O CÓDIGO LINHA A LINHA.