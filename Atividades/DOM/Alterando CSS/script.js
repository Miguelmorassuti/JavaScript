//PROPRIEDADES DOCUMENT
document.body.style.backgroundColor = "yellow"
document.title = "Mudando nome da página"
document.head
document.links
document.URL


//ALTERANDO COR DE UM ELEMENTO
title = document.getElementById("title");
title.style.color = "green";

//ALTERANDO O BACKGROUND
title.style.backgroundColor = "white"

//FORMA DE FAZER DIVERSAS ALTERAÇÕES DE UMA VEZ
paragrafo = document.getElementById("paragrafo");
paragrafo.style.cssText = "color:green;font-size: 1.2em; font-family:arial; background-color:yellow; padding:5px"