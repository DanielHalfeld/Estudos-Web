$(function(){
    /* $('[name=entrada]').on('focus', function(){ //focus,blur,change,select,copy,paste,cut
    console.log('Entrou')
    }) */

    /* $('[name=selecao]').on('change', function(){
        console.log('alterou selecao')
    }) 
    $('[name=termo]').on('change', function(){
        console.log('alterou termo')
    })

    $('[name=formulario]').on('submit', function(e){
        e.preventDefault()
        console.log('enviado')
    })
    $('[name=entrada]').on('keypress', function(e){
        //input,keydown,keyup, keypress
        console.log('keypress: ' + e.key)
    }) */

    $('[name=enviar]').on('click', function(e){
        e.preventDefault()
        let nome = $('[name=entrada]').val()
        let selecao = $('[name=selecao]').val()
        let idade = $('[name=idade]:checked').val()
        let termo = $('[name=termo]:checked').val()
        console.log(`nome: ${nome}, sexo: ${selecao}, idade: ${idade}, termo: ${termo}`)

    })
})