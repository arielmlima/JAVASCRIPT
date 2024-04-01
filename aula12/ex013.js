//Novamente estamos dentro do node.js e usaremos console.log em vez de document.write pois não estamos dentro do navegador, e essas são propriedades DOM.

//Exemplo

//var idade = 22
//if (idade < 18){
//   console.log('Menor de idade')
//}else{
//    console.log('Maior de idade')
//}

//Exemplo

//var idade = 16
//if (idade < 18){
//    console.log('Não vota')
//}else{
//    ('Vota')
//}

//Nesse caso de votar com 16 anos, você pode votar sim logo nossa lógica estaria errada na saida, mesmo no código estando tudo certo.

//var idade = 16
//if (idade < 16){
//    console.log('Vota, ja pode votar!')
//}else{
//    if(idade < 18 ) {
//        console.log('Voto obrigatório')
//}

//Podemos escrever assim tambem simplificando mais com o: else if, tiramos o else e trocamos por else if ja com as condições.

//Exemplo1: com um else if

var idade = 16
if (idade < 16){
    console.log('Não vota!')
}    
    else if(idade < 18){
        console.log('Voto opcional') 
    } 
    else {
        console.log('Voto obrigatório')
    }
    
//Exemplo2: Com dois else if
    var idade = 16
    if (idade < 16){
        console.log('Voto opcional!')
    }    
        else if(idade < 18 ) {
            console.log('Voto obrigatório') 
        } 
        else if(idade >= 70) {
            console.log('Voto não obrigatório')
        }

        


  


