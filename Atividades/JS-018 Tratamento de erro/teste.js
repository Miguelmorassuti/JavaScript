const val = -10

try{
    if(val<0){
        throw new Error("NUMERO MENOR QUE 0")
    }
}catch(error){
    console.log(error)
}