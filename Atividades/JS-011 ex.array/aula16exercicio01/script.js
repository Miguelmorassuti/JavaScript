// ARRAY EM ESCOPO GLOBAL
let lista = []

function adicionar(){
    let n = document.getElementById('txtnum')
    let input = document.getElementById("analisetab")

    //CONVERTENDO O VALOR
    let num = Number(n.value)
    
    //VALIDAÇÃO DA ENTRADA
    if(num>1 && num<100){
        let pos = lista.indexOf(num)
        if(pos==-1){
            lista.push(num)

            let item = document.createElement('option')
            item.text= `Valor ${num} adicionado!`
            input.appendChild(item)        
            
        }
        else if(pos !=-1){
            window.alert('Número ja inserido!')
        }

    }else{
        window.alert("Número inválido!")
    }
    //PARA LIMPAR A ENTRADA DE DADOS APOS O USUARIO CLICAR EM ADICIONAR
    n.value = ''
    n.focus()
}

//AÇÕES APÓS O USARIO CLICAR NO BOTÃO DE FINALIZAR
function analise(){
    let input = document.getElementById('exibicao')
    
    let max = lista.reduce(function(a ,b){return Math.max(a,b)}) 
    let min = lista.reduce(function(a,b){return Math.min(a,b)})
  
    let soma = 0
    for(let x in lista){
        soma += lista[x]
    }

    let media = soma/lista.length

    input.innerHTML = `Ao todo temos ${lista.length} números cadastrados <br>`
    input.innerHTML += `O maior numero cadastrado é o ${max}<br>`
    input.innerHTML += `O menor numero cadastrado é o ${min}<br>`
    input.innerHTML += `A soma dos numeros cadastrados resulta em ${soma}<br>`
    input.innerHTML += `A média dos valores resulta em ${media.toFixed(2)}<br>`    
}

