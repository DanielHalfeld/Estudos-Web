/*

EXEMPLOS:
1) Desligar a torneira
2) Pedir copo de água
3) Calcular média

*/

function desligarTorneira(){
    
    console.log("Levantar")
    console.log("Ir até a pia")
    console.log("Desligar torneira")
}

desligarTorneira();

///////////////////////////////////////////////////////////////////////////

function pedirCopoAgua(){
    return "Copo Água"
}

let retorno = pedirCopoAgua()
console.log(retorno)

///////////////////////////////////////////////////////////////////////////

function calcularMedia(nota1, nota2){

    let totalNotas = nota1 + nota2
    let media = totalNotas / 2

    return media
}


let media = calcularMedia(6,9)
console.log(media)