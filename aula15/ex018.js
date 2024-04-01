/* VARIAVEIS COMPOSTAS (VETORES)     

As variaveis compostas devem ser capazes de armazenar varios valores em uma mesma estrutura.

As variaveis simples so conseguem armazenar um valor por vez.

Lembrando da aula de variaveis, e do nosso estacionamento:

Se fossem 200 vagas imagina escrever uma por uma com variavel simples? Ia ficar um código gigante.

Agora vamos propor uma outra forma de fazer, muito mais simples usando vetores, não vamos mais usar identificadores (a1,a2,a3,a4,a5) em cada uma das vagas, vou chamar elas todas pelo mesmo nome.

Todas essas vagas vão se chamar a:
//Que são as vagas de automoveis.

  
   a
 
0 | | 

1 | | 

2 | | 
 
3 | | 

4 | |     
 
5 | |           

//E elas vão possuir um identificador de indice, uma chave que vai identificar cada uma delas, e para declarar so uso uma linha. Reduzindo muito o código.

//O indice começa do 0 lembre sempre disso.

Vamos usar colchetes nos vetores [].

//vaga a = []

E para preencher as vagas com três carros:

vaga a = [0,1,2]

a vai ser o nosso array/vetor, ou variavel composta. Vetor é uma variavel com varios espacinhos, exatamente como mostramos.

O vetor é composto de elementos, o elemento de um vetor é um par que agrupa o espaço da memória, o valor colocado dentro dele e o indice.

Cada elemento é composto por seu valor e uma chave de identificação.

Gráfico:
   a
   [🚗] [🚗] [🚗]  
    0     1     2

a: vetor
0 1 2: indice chave de identificaçã
[][][]:elemento  
🚗: conteudo valor (conteudo de cada elemento)  

*/

//Vamos codar: em vez de var vamos usar let nesse caso.

let num = [5,8,4]
//Indice:  0 1 2

/*Gráfico:
   a
   [5]   [8]   [4]  
    0     1     2
*/

//console.log(`Nosso vetor é o ${num}`)

console.log(num) //Assim ele vem com os colchetes [] na saida.

//Se eu quiser acrescentar mais um espaço faço assim: Onde esse espaço vai armazenar o valor 6.

num [3] = 6

/*Gráfico:
   a
   [5]   [8]   [4]   [6]  
    0     1     2     3
*/

//E se eu quiser acrescentar um valor a ultima casa do vetor, sem me preocupar quantas casas tem? Comando interno muito facil:

num.push(7) //7 é o valor que queremos colocar na ultima posição, criando um novo elemento na posição 4.

/*Gráfico:
   a
   [5]   [8]   [4]   [6]   [7]
    0     1     2     3     4
*/

//Para saber o comprimento do array:

num.length //Vai nos trazer quantos elementos temos no nosso vetor, não tem parenteses ao lado pois não é um método, é um atributo.

/*Gráfico:
   a
   [5]   [8]   [4]   [6]   [7]
    0     1     2     3     4
    -------------------------
          5 elementos
*/


//Botar o vetor em ordem:

//Temos esse comando tambem para botar os elementos em ordem crescente.



num.sort()

/*Gráfico:
   a
   [4]   [5]   [6]   [7]   [8]
    0     1     2     3     4
*/






