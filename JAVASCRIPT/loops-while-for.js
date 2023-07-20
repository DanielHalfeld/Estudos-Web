//While
let n1 = 1
while( n1 <= 5){
    console.log("Executou " + n1)
    n1++
    // operadores unários -> ++ e --
}

//Do ... While

let n2 = 5
do{
    console.log("Executou " + n2)
    n2--
}while( n2 >= 1 )

//For

/*
for( let n3 = 1; n3 <= 5; n3++ ){
    console.log("Executou " + n3)
}
*/

let postagens = [
  "Dei uma volta na praia",
  "Tomando banho de cachoeira",
  "Andando de carro",
  "Jogando bola com os amigos",
]
/*

let total = postagens.length

for( let n3 = 0; n3 < total; n3 ++){
    console.log(postagens[n3])
}

*/

for( indice in postagens){
    console.log(postagens[indice])
}