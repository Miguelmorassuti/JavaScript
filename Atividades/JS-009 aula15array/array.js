//DECLARAÇÃO DE ARRAY EM JS
let num = [20, 4, 6, 100, 30]

//ADICIONANDO NUMERO NA PRIMEIRA POSIÇÃO DO ARRAY
num.unshift(21)

//ADICIONANDO ELEMENTO NA ULTIMA POSIÇÃO DO ARRAY
num.push(12)

// COLOCANDO EM ORDEM CRESCENTE
num.sort((a,b) =>a-b)

//COLOCANDO EM ORDEM DECRESCENTE
num.sort((a,b) =>b-a)

console.log(`my array ${num}\n`)

//VERIFICANDO QUANTOS ELEMENTOS EXISTEM DENTRO DO ARRAY
console.log(`my array ${num.length} elements\n`) 

//PRINTANDO VALORES DO ARRAY
/*for (let cont = 0; cont < num.length; cont++){
    console.log(` na posição ${cont+1} temos o -> ${num[cont]}`)
}
*/

//OUTRA FORMA DE PRINTAR VALORES (FUNCIONA SO COM VETOR E OBJETO)
for(let pos in num){ 
    console.log(` na posição ${pos} temos o ->${num[pos]}`)
}

//FORMA DE BUSCAR O INDEX DE VALORES, CASO N ACHE IRA RETORNAR -1
let pos = num.indexOf(30)
console.log(`\nO valor 30 esta na posição ${pos}\n`)

/*
//PARA REMOVER O ULTIMO ELEMENTO DE UM ARRAY USE POP()
num.pop()
for(let pos in num){ 
    console.log(` na posição ${pos} temos o ->${num[pos]}`)}
 */

//PARA REMOVER O PRIMEIRO ELEMENTO DE UM ARRAY USE SHIFT()
num.shift()
for(let pos in num){ 
    console.log(` na posição ${pos} temos o ->${num[pos]}`)}

