//SELCIONANDO ELEMENTO
const title = document.querySelector("h1#tit")
const paragrafo = document.querySelector("p#paragrafo")
const body = document.querySelector("body")

//ALTERANDO ELEMENTO
title.innerHTML= "HELLO, WORD"
paragrafo.textContent= "OLÁ, MUNDO"//preferencia usar .textcont é + performatico

//CRIANDO ELEMENTOS E INSERINDO NO HTML
let subt = document.createElement("h2")
let texto = document.createTextNode("Este é o procedimento para aparecer texto")
subt.appendChild(texto)
body.appendChild(subt) //inserindo no body

//CRIANDO ELEMENTOS E ADD EM UM CONTAINER
const container = document.querySelector("div#container")
let parag = document.createElement("p")
parag.appendChild(document.createTextNode("Estou inserindo num container"))
container.appendChild(parag)

//REMOVENDO UM ELEMENTO
const p = document.querySelector("p#premove")
p.remove()  // existe o removeChild() que é para remover um filho de um elemento

//INSERINDO ELEMENTOS
let inser1 = document.createElement("div")
inser1.classList = "div-nova"   //Inserindo class na div
let container2 = document.querySelector("#container2")

container2.appendChild(inser1)  //INSERINDO ELEMENTO FILHO

//INSERINDO ANTES (insertBefore())
let el2 = document.createElement("div")
el2.classList = "div-before"
let el3 = document.querySelector("#container2 .div-nova")

container2.insertBefore(el2, el3)


