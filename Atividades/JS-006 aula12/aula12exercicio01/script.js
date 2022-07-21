function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora}h`

    if(hora >=0 && hora <12){
        //BOM DIA
        img.src = "midia/dia.jpg"
        window.document.body.style.background = 'azulmarine'
    }
    else if (hora >=12 && hora<18){
        //BOA TARDE
        img.src = "midia/tarde.jpg"
        window.document.body.style.background = 'yellow'
    }
    else{
        //BOA NOITE
        img.src = "midia/noite.jpg"
        window.document.body.style.background = 'black'

    }
}