let nomes = [
    "manoel",
    "lucas",
    "daniel",
    "juliana",
    "helena",
    "joao",
    "pedro",
    "marcela",
    "daniel"
]

function carregarNomes(){

    let itensLista = ''

    for(indice in nomes){

        let nome = nomes[indice]

        itensLista += `
        <li class="list-group-item">
            ${nome}
        </li>`
    }

    document.getElementById('lista').innerHTML = itensLista
}

function pesquisarNome() {

    let nomePesquisa = document.getElementById('campoNome').value
    let itensLista = ''

  for (indice in nomes) {

    let nome = nomes[indice]
    
    if (nomePesquisa == nome){
    
        itensLista += `
    
        <li class="list-group-item">
            ${nome}
        </li>`}
    
    }
  document.getElementById("lista").innerHTML = itensLista;
}