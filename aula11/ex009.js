//Aqui bem dizer é o nodejs que instalamos, nesse arquivo e não funciona o document.write. Vamos de console.log
//console.log('O console funcionou corretamente!')

//var vel = 60.5
//console.log(`A velocidade do carro é ${vel}Km/h`)

//console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)

//console.log(`Dirija sempre usando cinto de segurança!`)

//Note que esses comandos são uma sequencia, não da para executar o ultimo sem executar o segundo, temos que fazer uma condição.

var vel = 59

console.log(`A velocidade do carro é ${vel}Km/h`)

if (vel > 60) { 
    console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
}

console.log(`Dirija sempre usando cinto de segurança!`)

//Note que foi uma Condição simples, não tem senão. Se você passa acima da velocidade no radar ganha uma multa mas se você passa abaixo você não ganha um parabêns, não acontece nada vida que segue.