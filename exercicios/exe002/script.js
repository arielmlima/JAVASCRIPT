function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //Carregando as imagens pelo JS

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','img/childman.png')

            }else if (idade < 21) { 
                img.setAttribute('src','img/youngman.png')

            }else if (idade <50){
                img.setAttribute('src','img/man.png')

            }else {
                img.setAttribute('src','img/oldman.png')

            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','img/childwoman.png')

            }else if (idade < 21) {
                img.setAttribute('src','img/youngwoman.png')

            }else if (idade <50){
                img.setAttribute('src','img/woman.png')

            }else {
                img.setAttribute('src','img/grandmama.png')
                
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //Para aparecer as imagens
    }
}


