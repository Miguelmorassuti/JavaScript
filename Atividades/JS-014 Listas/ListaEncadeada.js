// JS NÃO TRABALHA COM PONTEIROS ACESSÍVEIS IGUAL AO C
//LISTA SIMPLESMENTE ENCADEADA
class No{
    constructor(elemento){
        this.elemento = elemento;
        this.proximo = undefined
    }
}

class ListaEncadeada{
    constructor(){
        this.head = undefined
    }

    //Inserindo no inicio
    insertFirst(elemento){
        const novo = new No(elemento)
        let atual

        if(!this.head){
            this.head = novo
        }
        else{
            atual = this.head
            novo.proximo = atual
            this.head = novo
        }
        return elemento;
    }

    //Inserindo no fim
    insertLast(elemento){
        const novo = new No(elemento)
        let atual

        if(!this.head){
            this.head = novo
        }
        else{
            atual=this.head
            while(atual.proximo){
                atual =atual.proximo
            }
            atual.proximo = novo
        }
        return elemento
    }

    //Procurando Posição
    searchAt(posicao){
        let atual = this.head
        for (let i =0; i < posicao && atual; i++){
            atual = atual.proximo
        }
        return atual
    }

    //Inserindo um no em uma posição específica
    insertAt(elemento, posicao){
        const novo = new No(elemento)
        if (posicao==0){
            this.insertFirst(elemento)
        }
        else{
            const anterior = this.searchAt(posicao -1)
            const atual = anterior.proximo
            novo.proximo = atual
            anterior.proximo = novo
        }
        return elemento
    }

    //Percorre a lista
    traversal(){
        if (!this.head){
            return undefined
        }
        else{
            let atual = this.head
            let elementosLista = []
            while (atual){
                elementosLista.push(atual.elemento)
                atual = atual.proximo
            }
        return elementosLista
        }
    }

    //Apagando Um no específico
    deleteAt(posicao){
        let atual = this.head
        if (posicao ==0){
            this.head = atual.proximo
        }
        else{
            let anterior = atual
            for (let i = 0; i< posicao;i++){
                anterior = atual
                atual = atual.proximo
            }
            anterior.proximo = atual.proximo
        }
        return posicao
    }

    //Descobrindo o index
    indexOf(elemento){
        let atual = this.head
        let contador = 0
        while (atual){
            if(atual.elemento == elemento){
                return contador
                break
            }
            else{
                atual = atual.proximo
                contador++
            }
        }
        return undefined
    }
}

const trem = new ListaEncadeada()
console.log(trem.insertFirst('Locomotiva')) 
console.log(trem.insertLast("vagão 1"))
console.log(trem.insertLast("vagão 2"))
console.log(trem.searchAt(1))                
console.log(trem.insertAt('vagão 3', 3))    //Inserindo um nó
console.log(trem.deleteAt(2))               //Excluindo um nó
console.table(trem.traversal())
console.log(trem.indexOf('vagão 3'))        //Procurando pelo valor