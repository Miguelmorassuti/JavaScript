function verificar(){
    let data = new Date() //Selecionado data atual do sistema
    let ano = data.getFullYear() //Salvando o ano atual numa let
    let fano = document.getElementById('txtano') //Colocando ancoras no input
    let res = document.querySelector('div#res')

    //validação de dados
    if (fano.value > ano || fano.value.length==0){ 
        window.alert('ERRO, VERIFIQUE OS DADOS!!')
    }
    else{
        let fsex= document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ' '
        let img = document.createElement('img') //Criando uma tag img
        img.setAttribute('id', 'foto') //Colocando id na tag img

        if (fsex[0].checked){
            genero = 'Homem'
            
            if (idade >=0 && idade <=12){
                img.setAttribute('src','midia/foto-bebe-m.png')
            }
            else if (idade >12 && idade<=21){
                img.setAttribute('src','midia/foto-jovem-m.png')
            }
            else if (idade>21 && idade<65){
                img.setAttribute('src', 'midia/foto-adulto-m.png')
            }
            else{
                img.setAttribute('src', 'midia/foto-idoso-m.png')
            }
        } 
        else if (fsex[1].checked){
            genero = 'Mulher'
        
            if (idade >=0 && idade <=12){
                img.setAttribute('src','midia/foto-bebe-f.png')
            }
            else if (idade >12 && idade<=21){
                img.setAttribute('src','midia/foto-jovem-f.png')
            }
            else if (idade>21 && idade<65){
                img.setAttribute('src', 'midia/foto-adulto-f.png')
            }
            else{
                img.setAttribute('src', 'midia/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'//Alinhando ao centro a img e o txt abaixo
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // Inserindo o img
    }
} 