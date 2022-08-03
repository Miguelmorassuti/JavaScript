const meuDic = new Map(); //Criando Dicionário

meuDic.set('saudar', 'eai cara belezann?') //colocando no dicionario
meuDic.set('adeus', 'Ate a próxima amigão') //Primeiro a chave, dps o valor
meuDic.set('fiufiu', 'seu pai é padeiro? pq ele fez vc que é um sonho meu')


const palavra = meuDic.get('fiufiu')//aparece undefined caso a palavra n exista
console.log(palavra)

//deletando pela chave (caso a chave n exista, o programa retorna 'false')
meuDic.delete('adeus')

//meuDic.clear //apaga tudo

//verificando se MeuDic tem a chave pqp
if(!meuDic.has('pqp')) console.log('pqp não existe')

//utilizaando ForEach
meuDic.forEach((valor, chave) => {
    console.log(`\n${chave}: ${valor}`)
})

//verificando a quantidade de elementos do dic
console.log(`\no dicionaro possui ${meuDic.size} elementos\n`)

//printando todas as entradas utilizando o .entries
for (let entrada of meuDic.entries()){
    console.log(entrada)
}

//printando as chaves
for (let id of meuDic.keys()){
    console.log(id)
}

//printando os Valores
for (let num of meuDic.values()){
    console.log(num)
}

