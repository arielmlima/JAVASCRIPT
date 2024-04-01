let num = [5,8,2,9,3]
num.push(1) //Adicionamos o 1 a ultima casa, criando mais um elemento no indice 5.
num.sort() //Para colocar em ordem, a saida fica 1,2,3,5,8,9.
console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor é ${num}`)
console.log(`Numero na posição 0 é: ${num[0]}`)
console.log(`Numero na posição 1 é: ${num[1]}`)


//A ordem influencia, note que se eu usar o push depois do sort o valor 1 fica la no final.


/* Agora queremos escrever os valores contidos nas posições do vetor, um em cada linha. Imagina o trabalho tendo vários elemento.
Note que no código a seguir a unica coisa diferente é o numero do indice, que são nossas chaves indicando a posição dos nossos valores. Ai que vão entrar as estruturas de repetição para sanar esse problema:

console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])

Se eu criar uma variavel chamada pos, que ela comece valendo 0 e vai até 4, que é exatamente o limite do meu vetor. 

Se eu fizer uma repetição, eu escrevo essa linha de console.log apenas uma vez, e coloco dentro de uma estrutura de repetição.

A grande dificuldade dos vetores, não são os vetores, mas sim as estruturas de repetição que muita gente não domina. Que é algo bem simples depois que entende.

//Vamos trocar tudo aquilo por apenas duas linhas, usando FOR:
*/

for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
} 

//Em vez de usar pos = 4 que seria a ultima posição, usamos o pos<num.length, pois ele vai até o fim tambem, sendo muito util em casos que não sabemos qual o fim do vetor, ou que adicionamos mais vetores depois, não ter que fazer isso manualmente. Se lê: pos é 0, enquanto o pos for menor que o tamanho do vetor, vai receber pos + 1 (pos++).

//Em vez do console.log(num[0]) usamos console.log(num[pos])




//E existe ainda uma maneira mais facil e simplificada para fazer isso.

//Usando o for com o in dentro:
//Otimizado para variaveis compostas e objetos, ele não tem 3 elementos igual o for, tem 2, sendo mais simplificado.

//Primeiro colocamos nossa variavel pos que é nosso indice, e do lado direito do in basta colocarmos nosso vetor num(variavel composta).

//In a gente lê DENTRO/EM.

for(let pos in num){
    console.log(`${num[pos]}`)

}

//Lendo em português: PARA cada posição DENTRO de numero. Eu vou mostrar o (num[pos])

//Lendo em português: PARA cada posição DENTRO da variavel composta. Eu vou mostrar o (num[pos]).

//Isso so funciona para arrays e objetos. E na verdade mesmo são a mesma coisa, em JAVASCRIPT todo vetor é um object. 

//Mesmo código anterior so que mais bonitinho visualmento pro usuário.
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
 

//E para buscar valores dentro de um vetor? Usamos o .IndexOf()

//.indexOf(7) 

//Com a variavel composta antes, exemplo:

//num.indexOf(7) 

//O de Of é maiusculo.

//Ele vai procurar no valor debaixo o valor 7

/*Gráfico:
   num
   [4]   [5]   [6]   [7]   [8]
    0     1     2     3     4
*/

//E essa função vai me retornar a chave/indice onde essa valor 7 se encontra. 

//Ele vai me responder tem, e está na posição 3.

//Se ele não encontrar o valor ele vai retornar o valor -1, significa no JS que ele pesquisou dentro do vetor e não encontrou.

//Exemplo prático:

let posicao = num.indexOf(8)
console.log(`O valor 8 esta na posição ${posicao}`)

//O sort la em cima deixa o valor 8 na posição 4.