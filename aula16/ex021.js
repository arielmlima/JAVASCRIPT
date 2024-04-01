function soma(n1, n2){
    return n1 + n2 
}
        
console.log(soma(2,5))
//Vamos escrever na tela a soma entre 2 e 5, a soma de 2 e 5 é 7.

//Na chamada o 2 vai pro primeiro parametro n1, e o 5 vai para o n2, na função la em cima.

 //chamada: soma
  //parametros: 2, 5
   //return: return n1 + n2   


//E se eu chamar so o 2? 

function soma(n1, n2){
    return n1 + n2 
}
        
console.log(soma(2))

//O n1 vai pegar o 2 como parametro, e o n2 vai ficar como undefined NaN = Indefinido Não é um numero

//E se eu predefinir antes parametros opcionais?

function soma(n1=0, n2=0){
    return n1 + n2 
}
        
console.log(soma(7,3))
//A saida vai ser 10 

//Exemplo2:


function soma(n1=0, n2=0){
    return n1 + n2 
}
        
console.log(soma(7))
//A saida vai ser 7



//Se eu quiser jogar uma função dentro de uma variavel? Da certo tambem!Exemplo: Função que vai retornar o dobro do valor:

let v = function(){
    return x*2
}

console.log(v(5))

//Criar uma função para fatorial:

function fatorial(n){
    let fat= 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return f
    
}
console.log(fatorial(5))
//5! = 5x4x3x2x1 
//Saida = 120



//Criando fatorial com recursividade.

function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n* fatorial(n-1)
    }
}

console.log(fatorial(5))
//Recursão, acontece quando a função chama ela mesma.

