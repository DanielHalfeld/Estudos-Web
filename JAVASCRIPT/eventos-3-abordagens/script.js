function executar() {
    console.log('Executado')
    botao.removeEventListener('click', executar)
}

function executar2() {
    console.log('Executado²')
}

//abordagem 1:
//const botao = document.getElementById('botao')
//abordagem 2:
//const botao = document.querySelector('[botao-acao]')
//botao.onclick = executar 
//botao.onclick = function(){executar()}

//abordagem 3:
const botao = document.querySelector('[botao-acao]')
const body = document.querySelector('body')

//o if é para garantir que o internet explorer compreenda esse comando
if ( botao.addEventListener ) {
    botao.addEventListener('click', executar)
    body.addEventListener('click', executar2)
}
else{
    botao.attachEvent('click', executar)
    body.attachEvent('click', executar2)
}
//botao.addEventListener('click', executar, true)
//body.addEventListener('click', executar2, true) --> muda o fluxo de execução