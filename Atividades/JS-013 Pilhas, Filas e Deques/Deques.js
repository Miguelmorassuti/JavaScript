// DUQUE

class Deque{
    constructor(){
        this.itens = []
    }

    //INSERINDO NO INÍCIO
    insertFront(item){
        return this.itens.unshift(item)
    }

    //INSERINDO NO FINAL
    insertLast(item){
        return this.itens.push(item)
    }

    //VERIFICANDO SE ESTA VAZIA
   isEmpty(){
        return this.itens.length == 0
     }
    

    //APAGANDO NO INÍCIO
    deleteFront(){
        if (this.isEmpty()) return undefined
        return this.itens.shift()
    }

    //APAGANDO NO FINAL
    deleteLast(){
        if(this.isEmpty()) return undefined
        return this.itens.pop()
    }


    //RETORNA O PRIMEIRO ELEMENTO
    front(){
        return this.itens[0]
    }

    //RETORNA O ULTIMO ELEMENTO
    rear(){
        return this.itens[this.itens.length - 1]
    }

}

const dequeue = new Deque()
dequeue.insertFront('fuscao black')
dequeue.insertFront('marea turbo')
dequeue.insertLast('monza de agiota')
dequeue.insertFront(190)
dequeue.deleteFront()
dequeue.insertLast("vectra de malandro")

console.table(dequeue.itens)
console.log(dequeue.rear())
console.log(dequeue.front())
