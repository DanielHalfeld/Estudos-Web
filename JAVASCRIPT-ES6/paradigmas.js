//Javascript é multi paradigma

//Procedural

/* function verificarDisponibilidade(q,o){
    let res = q-o
    console.log("Disponíveis: " = res)
}

let quartos = 20
let ocupados = 10
verificarDisponibilidade(quartos,ocupados)
 */

//Orientado a objetos

const hotel = {
    quartos: 20,
    ocupados: 10,
    verificarDisponibilidade: function(){
        return this.quartos - this.ocupados
    }
}

console.log(hotel.verificarDisponibilidade())