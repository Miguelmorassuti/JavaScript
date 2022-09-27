const {
    readFile,
    writeFile
} = require('fs')

const { join } = require('path')

const packageJsonPath = join(__dirname, '..', 'package.json')
const destPath = join(__dirname, 'package.copy.json')

// SEM TRATAMENTO DE ERRO
readFile(packageJsonPath, (errorRead, data) => {
    console.log("> Terminei de Ler")
    writeFile(destPath, data, (errorWrite) => {
        console.log(">> Terminei de escrever")
    })
})

// COM TRATAMENTO DE ERRO RUDIMENTAR
readFile(join(__dirname, 'não-existe'), (errorRead, data) => {
    if (!errorRead) {
        console.log("> Terminei de Ler")
        writeFile(destPath, (errorWrite) =>{
            if(!errorWrite) {
                console.log(">> Terminei de escrever")
            }
        })
    }
})

// COM TRATAMENTO DE ERRO: LOGAR + EARLY RETURN
readFile(packageJsonPath, (errorRead, data) => {
    if (errorRead){
        console.log("Erro de Leitura", errorRead)
        return
    }

    console.log("> Terminou de ler")


    writeFile(destPath, data, (errorWrite) => {
        if (errorWrite){
            console.log("Erro de escrita", errorWrite)
            return
        }

        console.log(">>Terminou de escrever")
    })
})    

    