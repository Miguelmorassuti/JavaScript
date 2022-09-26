const {             // IMPORTANDO FUNÇÕES
    readFileSync,   //LÊ UM ARQUIVO DE FORMA BLOCK.IO
    writeFileSync,  //ESCREVE DE FORMA BLOCK.IO
    readFile,       //LÊ UM ARQUIVO DE FORMA NON-BLOCK.IO
    writeFile       //ESCREVE DE FORMA NO-BLOCK.IO
} = require('fs')

const {            //IMPORTANDO FUNÇÃO
    join,          //QUE CONSEGUE REALIZAR A LEITURA DO CAMINHO EM DIVERSOS S.O.
} = require('path')


const copiaArqBlocking = (source, dest) => {
    console.log("Lendo blocking conteudo")
    const content = readFileSync(source)
    console.log("Escrevendo blocking conteudo")
    writeFileSync(dest, content)
    console.log("Cópia BLOCKING realizada com sucesso")
}

// _dirname é uma variável de ambiente que informa o caminho absoluto do diretório que contém o arquivo em execução no momento
const sourcePath = join(__dirname, 'files', 'example.txt')
const destPath = join(__dirname, 'files', 'example_copy.txt')
const destPathNonBlocking = join(__dirname, 'files', 'example-NoBlocking.txt')


const copiaArqNoBlocking = (source, dest) => {
    console.log("Começou a cópia...")
    readFile(source, (_err, data) => {
        console.log("Terminou de ler non-blocking")

    writeFile(dest, data, (_err) => {
    console.log('Terminou de escrever no-blocking')
    })
    })
}

copiaArqNoBlocking(sourcePath, destPathNonBlocking)
console.log("Observe que eu posso realizar outras operações enquanto o ocorre o desenrolar do código quando feito em Non-Blocking")
console.log(Math.PI * 100)

// copiaArqBlocking(sourcePath, destPath)