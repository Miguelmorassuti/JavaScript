class Pilha{
    constructor(){
        this.itens = []
    }
    
    //Método Push para adicionar elementos no topo
    push(item){
        this.itens.push(item)
    }

    //Método Top para saber quem esta no topo
    top(){
    return this.itens[this.itens.length - 1]
    }

    //Verficando se a pilha esta vazia
    isEmpty(){
        return this.itens.length == 0
    }
}
//main
const pilha = new Pilha();
pilha.push(3)
pilha.push(1)
pilha.push(5)
pilha.push(8)

console.table(pilha.itens)
console.log(pilha.top())
console.log(pilha.isEmpty())