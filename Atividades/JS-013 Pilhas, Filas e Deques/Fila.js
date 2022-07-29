class Fila{
    constructor(){
    this.itens = []
    }

    //Método para inserir novos elementos
    enqueue(item){
        this.itens.push(item)
    }

    //Método para verificar se a pilha esta vazia
    isEmpty(){
        return this.itens.length == 0

    }

    //Método para remover o primeiro elemento
    dequeue() {
        if(this.isEmpty()) return undefined

        return this.itens.shift()
    }

    //Método para retornar o primeiro elemento
    front() {
        return this.itens[0]
    }

    //Metodo para retornar o ultimo elemento
    rear(){
        return this.itens[this.itens.length - 1]
    }
}

const fila = new Fila()
fila.enqueue('Mustang')
fila.enqueue('Monza')
fila.enqueue('Fiesta')

fila.dequeue()
console.table(fila.itens)
console.log(fila.isEmpty())
console.log(fila.front())
console.log(fila.rear())