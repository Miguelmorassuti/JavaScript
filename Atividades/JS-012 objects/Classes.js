class Programador{
    //MÉTODO CONSTRUTOR
    constructor(nome, nascimento, casado, linguagensFavoritas= [], semestreFacul= null){
        this.nome = nome;
        this.nascimento = nascimento;
        this.casado = casado;
        this.linguagensFavoritas = linguagensFavoritas;
        this.semestreFacul = semestreFacul;
    }
}

    //Estanciando Objetos Atraves da Classe criada acima
    const Miguel = new Programador('Miguel Guimarães', '14/03/2003', false, ['Python', 'Java', 'JS'], 2)

    const Nicolas = new Programador('Nicolas Lelis', '21/09/2003', false, ['Python', 'C', 'Ruby'], 3)

console.log(Miguel.nascimento)
console.table(Nicolas.linguagensFavoritas)