//PEGANDO A HORA ATUAL DO SISTEMA 
let agora = new Date()
let hora = agora.getHours()

console.log(`Agora são exatamente ${hora}h`)

//Condição Aninhada
if (hora> 18){
    console.log("Boa noite bb!")
}

else if (hora>6 && hora<12){
    console.log("Bom dia lindx")
}

else if (hora>12 && hora<18){
    console.log("Boa Tarde!")
}

else{
    console.log("Boa Madrugada")
}