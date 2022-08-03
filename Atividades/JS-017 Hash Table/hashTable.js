class HashTable{
    constructor(){
        this.table = new Array(127) //definindo tamanho do hash table
        this.size = 0
    }

//----------------------FUNÇÕES----------------------------------------------//

    //conversão da chave para um hash(indice numerico)
    hash(key){
        let hash = 0
        for (let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i)
        }
    return hash % this.table.length//garatindo q o tamanho n passe o nº definido
    }

    //Para adcionar um novo par de elementos
    put(key, value){
        const index = this.hash(key)
        this.table[index] = [key, value]
        this.size++
    }

    // para retornar um elemento
    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    //para remover um elemento
    delete(key){
        const index = this.hash(key)
        if (this.table[index] && this.table[index].length){
            this.table[index] = undefined
            this.size--
            return true
        
        }else return false
        
    }

    //para apagar toda hash table
    clear(){
        this.table = []
        this.size = 0
    }
}

const meusContatos = new HashTable()
meusContatos.put('Miguel', '998323210')
meusContatos.put('Pedro', '998312321')
meusContatos.put('Kelvin', '998213210')

console.table(meusContatos.table)

console.log(meusContatos.get('Kelvin'))


