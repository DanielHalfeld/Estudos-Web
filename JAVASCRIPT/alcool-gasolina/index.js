function calcularMelhorPreco() {
    let precoAlcool = document.getElementById("alcool").value;
    let precoGasolina = document.getElementById("gasolina").value;

    if (precoAlcool != "" && precoGasolina != "") {

        let resultado = document.getElementById("resultado");
        let valor = precoAlcool / precoGasolina;

        if (valor >= 0.7) {
            resultado.textContent = "Gasolina";
        } else {
            resultado.textContent = "Álcool";
        }
    } 
    else {
        alert("Preencha o preço dos dois!");
    }
}
