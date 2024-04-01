function carregar(){ 
    var msg = window.document.getElementById('msg')
    var img =window.document.getElementById('imagem')

    var data = new Date()

    var min = data.getMinutes()

    var hora = data.getHours()
    //var hora = 22 
    
    msg.innerHTML = `Agora são: ${hora} horas e ${min} minutos.`

    if(hora >= 0 && hora < 12){
      img.src = 'img/imagem-manha.png'
      document.body.style.backgroundColor = '#e2cd9f'
    }else if(hora >=12 && hora <= 18){
        img.src = 'img/imagem-tarde.png'
        document.body.style.backgroundColor = '#b9846f'

    }else{
        img.src = 'img/imagem-noite.png'
        document.body.style.backgroundColor = '#515154'
         
    }
}

