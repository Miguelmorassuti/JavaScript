//PARAMETROS PRÉ-DEFINIDOS CASO O USUÁRIO NÃO PASSE PARAMETRO
function soma(n1=0, n2=0){
    return n1+n2
}
console.log(soma(5,78)) 

//EM JS É POSSIVEL COLOCAR UMA FUNÇÃO DENTRO DE UMA VARIÁVEL KKKKKKK
let v = function(x){
    return x*2
}

console.log(v(5))

//EXEMPLO DE FUNÇÃO RECURSIVA (FUNÇÃO QUE CHAMA ELA MESMA NO BLOCO DE CODIGO)
function fatorial(n){
    if(n==1){
        return 1
    }
    else{
        return n*fatorial(n-1)
    }
}

console.log(fatorial(5))