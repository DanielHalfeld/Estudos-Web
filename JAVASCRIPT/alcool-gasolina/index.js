function calcularMelhorPreco() {
    let precoAlcool = document.getElementById("alcool").value;
    let precoGasolina = document.getElementById("gasolina").value;

    if (precoAlcool != "" && precoGasolina != "") {

        let resultado = document.getElementById("resultado");
        // ou os caracteres dentro de resultado podem ser definidos direto através dos comandos dentro dos IF's:
        let valor = precoAlcool / precoGasolina;

        if (valor >= 0.7) {
          resultado.textContent = "Gasolina";
          // document.getElementById("resultado").innerHTML = "Gasolina"
          
        } else {
          resultado.textContent = "Álcool";
          // document.getElementById("resultado").innerHTML = "Álcool"
          
        }
    } 
    else {
        alert("Preencha o preço dos dois!");
    }
}
