function contar(){
    let ini = document.getElementById('txtinicio')
    let fi = document.getElementById('txtfim')
    let pass = document.getElementById('txtpasso')
    let insere = document.querySelector('div#res')

    if(ini.value.length == 0 || fi.value.length == 0 || pass.value.length == 0){
      window.alert('[ERRO] Faltam dados!')  
      res.innerHTML = 'Impossível Contar'
    }
    else{
        insere.innerHTML = 'Contando: '
        //CONVERTENDO VALORES
         let inicio = Number(ini.value)
         let passo = Number(pass.value)
         let fim = Number(fi.value)

         //passo 0 trava o navegador KKKKKKKKKKK
        if(passo <=0){
            window.alert('Passo inválido! Considerando PASSO 1')
            passo=1
        }

         //CRESCENTE
         if (inicio<fim){
            for(let c = inicio; c<= fim; c+=passo){
                insere.innerHTML += `${c} \u{2620} ` //Emoji
             }
         }
         //DECRESCENTE
         else{
            for(let c = inicio; c>= fim; c-=passo){
                insere.innerHTML += `${c} \u{2620} ` //Emoji
         }
        
         }
    }       
}

