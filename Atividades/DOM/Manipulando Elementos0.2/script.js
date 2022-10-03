// TROCANDO ELEMENTOS
let el = document.createElement("h3")
el.classList = "testando-classe"
let texto = document.createTextNode("Palmeiras tem mundial não kkkkk")
el.appendChild(texto)

let title = document.querySelector("h1#title") //Escolher o elemento q quero alt

let pai = title.parentNode      //SELECIONAR O PAI DO "EL"

pai.replaceChild(el, title)     //TROCANDO ELEMENTOS, (elementos irmãos)


