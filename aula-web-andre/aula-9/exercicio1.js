
var Endereco = function(r, n, b, c, u){
    this.rua = r
    this.numero = n
    this.bairro = b
    this.cidade = c
    this.UF = u
    console.log(`O usuário mora em ${this.cidade} / ${this.UF}, no bairro ${this.bairro}, na rua "${this.rua}" com n°${this.numero}`)
}

var endereco1 = new Endereco('Belmiro',405,'Aterrado','Valinhos','MT')