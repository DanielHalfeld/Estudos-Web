function executar() {
    console.log('Executar')
}

function cliqueDuplo(){
    console.log('Clique duplo')
}

function keydown(){
    console.log('Digitar')
}

const obj = document.getElementById('botao') 

const h1 = document.getElementById('h1')
//h1.addEventListener('click', executar)
//obj.addEventListener('click', executar) -> executa apenas ao clicar E soltar 
//obj.addEventListener('dblclick', cliqueDuplo) -> apenas com clique duplo
//obj.addEventListener('mousedown', executar) -> executa imediatamente ao clicar
//obj.addEventListener('mouseup', executar) -> apenas ao soltar
//obj.addEventListener('mousemove', executar) -> executa a cada passada do cursor no elemento
//obj.addEventListener('mouseover', executar) -> executa 1 vez ao passar o mouse
//obj.addEventListener('mouseout', executar) -> executa depois de passar o mouse e tirar o cursor
const ent = document.getElementById('entrada')
ent.addEventListener('click', executar)
ent.addEventListener('keydown', keydown)