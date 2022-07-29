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

}

const trem = new ListaEncadeada()
console.log(trem.insertFirst('Locomotiva')) 
console.log(trem.insertLast("vagão 1"))
console.log(trem.insertLast("vagão 2"))