////////////////////////// exemplo while

let n1 = 1
while( n1 <= 5 ){
    console.log("Comeu pedaço de pizza " + n1)
    n1 = n1 + 1
}

console.log("__________________________")
console.log("")

////////////////////////// esboço de site

let postagens = [
    "Dei uma volta na praia",
    "Tomando banho de cachoeira",
    "Andando de carro",
    "Jogando bola com os amigos"
]

let ind = postagens.length
let n2 = 0
while(n2 < ind){
    console.log("IMAGEM " + n2)
    console.log(postagens[n2])
    console.log("-------")
    n2 = n2 + 1
}