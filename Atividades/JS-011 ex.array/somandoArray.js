// SOMANDO VALORES DE UM ARRAY EM JS

const saldo = [1500, 35, 50, 10]

const total = saldo.reduce((somatorio, valor) => somatorio+valor)
console.log(total)

//MANIPULAÇÃO DE ARRAY
const bandeiras = [
    ['Brazil', ['Verde', 'Amarelo', 'Azul', 'Branco']],
    ['Canada', ['Vermelho', 'Branco']],
    ['Mexico', ['Verde', 'Branco', 'Vermelho']],
];
console.log(bandeiras[0][1][3])

//FORMA DE PRINTAR OS DADOS DE FORMA TABULADA
console.table(bandeiras)
