//Vamos entender um pouco sobre OBJETOS, e os fundamentos, e para que serve no nosso dia a dia.

//Antes relembrar o VETOR:

let num = [5,8,4]

//Quando coloco os valores os valor vão para dentro do vetor:

/*Gráfico:
   num
   [ 5 ] [ 8 ] [ 4 ]  
     0     1     2

*/


//Algo que não falamos do array/vetor é que não preciso colocar todos os numeros no JAVASCRIPT podem ter espaços vazios nos vetores. Tambem permite se você quiser informações heterogeneas, com varios tipos de variavel(num,string,bool).

//No array quando definimos esses indices para nossas casas(0,1,2), não tem como mudar, fica fixo, e isso nos limita. O nome dos indicies vai ser sempre 0,1,2,3,4... 

//Para coisas simples o array serve muito bem e vai reduzir muito seu codigo, o objeto ja tem mais detalhes.

//Agora vamos entender com o objeto:

let amigo = {nome:'José',idade:34,sexo:'M', peso:85.4, engordar(p=0){console.log('Engordou')
this.peso += p
    
}}

console.log(amigo)

//Se você quer declarar um objeto: diferente do array em vez de usar [ ] você vai usar chaves {}

/*Gráfico:
   amigo
   [josé] [34]  [M]  [85.4]  [[function]]   
   nome  idade  sexo  peso     engordar

*/

//Visualiza como é muito mais intuitivo e organizado? conseguimos dar nome aos indicies. Note que os tamanhos são parecidos com o tamanho da informação, com diferentes tamanhos de elemento.

//Os objetos alem de guardar valores eles tambem podem guardar funcionalidades, oque chamamos de métodos. 

//Se eu não quero mostrar tudo e quero so um atributo, eu boto assim no console.log:

console.log(amigo.nome)

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)

