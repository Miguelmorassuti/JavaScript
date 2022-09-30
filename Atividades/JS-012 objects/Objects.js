//CRIANDO OBJETO (OBJECT LITERAL NOTATION)
const programador = {
    nome: 'Miguel',
    nascimento: '14/03/2003',
    casado: false,
    linguagensFavoritas: ['Python', 'Java', 'JS'],
    anoFaculdade: 2,

    //MÉTODO DO OBJETO
    digaNome: function() {
        console.log("Seu nome é: " + this.nome)
    }
}

//PRINTANDO EM FORMA TABULAR
console.table(programador)

//PRINTANDO ATRIBUTO ESPECÍFICO
console.log(programador.nome)

//CHAMANDO MÉTODO DO OBJETOS
programador.digaNome()