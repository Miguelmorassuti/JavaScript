// Timers são as funções que ocorrem de forma No-Blocking que ocorrem depois de um certo tempo

// Função Geral
const logCalled = () =>{
    console.log(">Fui chamada")
}

/*// setTimeout() é uma função No-Blocking que pode ser selecionado o tempo que demorara para a função ser executada

setTimeout(() =>{
     logCalled()
}, 1000) //Tempo em milisegundos q indicam qto tempo dps a função sera executada
*/
/*-----------------------------------------------------------------
// setTimeout(() =>{
//     logCalled()
//     setTimeout(logCalled, 1000)
// }, 2000)
*/
/* ---------------------------------------------------------------
// setInterval() é uma função No-Blocking que pode ser criado um intervalo de
//tempo e que durante esses interavlos a função sera chamada
 
setInterval(() =>{
     console.log(">Chamada no intervalo")
}, 1000)
------------------------------------------------------------------*/

// MESCLA DAS FUNÇÕES, declarando como uma constante é possivel mesclar e deixar uma repetição finita
const intervalId = setInterval(() =>{
    console.log(">Chamada no intervalo")
}, 1000)

setTimeout(() =>{
    clearInterval(intervalId)
},5000)