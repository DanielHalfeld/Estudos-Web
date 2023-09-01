/* Função literal
function somar(a,b){
    console.log(a+b)
}

somar(1,2)*/

// Função anônima (sem nome)
/* const somar = function(a,b){
    console.log(a+b)
}
somar(1,2) */

//Função  arrow
/* const somar = (a,b) => {
    console.log(a+b)
}
somar(1,2) */

//Função arrow implícito
//const somar = (a,b) => console.log(a+b)
//const exibir = n => console.log("nome:" + n)
const somar = (a,b) => a+b
let resultado = somar(1,2)
console.log(resultado)