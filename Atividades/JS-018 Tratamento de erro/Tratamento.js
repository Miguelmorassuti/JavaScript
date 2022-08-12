let divisor = -21

try{            //TENTE
    try{        //CONDIÇÃO ANINHADA PARA FAZER DAR ERRO SE O NUM FOR NEGATIVO
        if(divisor <0){
            throw new Error("Menor que zero")
        }

        if(!isNaN(divisor)){    //IF FOR UM NUMERO
            console.log(5/divisor)
        }
        else{                   //IF NÃO FOR UM NUMERO
            throw new Error("Não é um numero")
        }
    } catch(error){
        throw new Error(`divisor ${divisor}: ${error}`)
    } finally{                  //O QUE APARECE NO FINAL DANDO CERTO OU ERRADO
        console.log("END")
    }
}catch(error){
    console.log(error)
}

