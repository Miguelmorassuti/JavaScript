//CONJUNTOS SÃO ARRAY QUE ACEITAM SOMENTES VALORES UNICOS, NÃO ACEITAM DUPLICAÇÃO

//Declarando um conjunto/Set()
const meuConjunto = new Set()

//Criando um Array
const times = ['SPFC', 'PALMEIRAS', 'Coritiba', 'Fluminese', 'SPFC']

//Criando uma const que ira receber um conjunto q possui como parametro o array
const meuCamp = new Set(times)

//Printando na tela, o SPFC aparece apenas uma vez pq o set n aceita duplicidade
console.table(meuCamp)

//Adcionano novo elemento atraves de uma const (add)
const mengo = 'Flamengo'
meuCamp.add(mengo)

console.table(meuCamp)


meuCamp.delete('Coritiba') //Removendo um elemento atraves do seu valor (remove)
meuCamp.delete(mengo)      //Removendo um elemento atraves do valor da variavel
console.table(meuCamp)

//meuCamp.clear //PARA APAGAR TUDO

//Acessando os valores por meio do ForEach
meuCamp.forEach(valor => {
    console.log(valor)
});

//Verificando se um elemento esta no conjunto
if(!meuCamp.has('Santos')) meuCamp.add("Santos")
console.table(meuCamp)

//Contando quantos elementos estão no conjunto
console.log(meuCamp.size)