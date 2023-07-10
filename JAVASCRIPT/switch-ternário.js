/*
Exemplo de funcionamento do switch
*/
let opcao = 1

switch( opcao ){
    case 1 :
        console.log("Saldo da conta")
        break
    case 2 :
        console.log("Cartão de crédito")
        break
    default:
        console.log("Opção inválida")
    }

/* 
Exemplo de funcionamento ternário
*/

let idade = 18
console.log(/*operadores ternários->*/ idade >= 18 ? "Maior idade" : "Menor idade");