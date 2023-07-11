function calcularMelhorPreco() {

    let precoAlcool = document.getElementById("alcool").value
    let precoGasolina = document.getElementById("gasolina").value;    
    
    if( precoAlcool != "" && precoGasolina != ""){

        let resultado = document.getElementById("resultado")

        resultado = (precoAlcool/precoGasolina)

        if(resultado >= 0.7){

            resultado = "Gasolina"

        }else{

            resultado = "Álcool"

        }
    }else{
        alert("Preencha o preço dos dois!")
    }

}
        


