function pares(x,y){
    let res = 0
    if(x < y){
        if(x % 2 == 0){
            res = x
            while(res < y){
                console.log(res)
                res += 2
            }
        }else{
            res = x + 1
            console.log(res)
            while(res < y){
                console.log(res)
                res += 2
            }
        }
    }
    else{
        console.log('O primeiro numero deve ser menor que o segundo, filho da puta')
    }
}

pares(32,321)