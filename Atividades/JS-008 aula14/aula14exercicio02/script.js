function tabuada(){
    let n = document.getElementById('txtabuada')
    let input = document.getElementById("seltab")

    //Convertendo Valor
    let tab = Number(n.value)

    let resu = 0

    //Verificando se o valor do numero é inválido
    if(n.value.length ==0){
        window.alert("ERRO! Opção Inválida!")
    }

    else{
        input.innerHTML = ' '
        for(let c=1; c<11; c++){
            resu = tab*c
            let item = document.createElement('option')
            item.text= `${tab} X ${c} = ${resu}`
            input.appendChild(item)
        }
    }
    
}