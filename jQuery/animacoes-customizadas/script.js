function callback(){
    console.log('Terminou a animação.')
}

$(function(){
    /* $('[acao-esquerda]').on('click', function(){
        $('#conteudo').animate(
            {
                left: '-=50',
                right: '+=50'
            }
        )
    })

    $('[acao-direita]').on('click', function(){
        $('#conteudo').animate(
            {
                right: '-=50',
                left: '+=50'
            }
        )
    }) */

    /* $('#conteudo').on('click', function(){
        $('#conteudo').animate(
            //{width: 600},
            //{width:'100%'},
            {
                right:0,
                bottom:0,
                padding: '+=50'
            },
            1000,   
            callback
        )
    }) */
    $(document).on('keydown', function(e){
        if(e.key == 'ArrowLeft'){
            $('#conteudo').animate(
                {
                    left: '-=50',
                    right: '+=50'
                })
            }
            else if(e.key == 'ArrowRight'){
            $('#conteudo').animate(
                {
                    right: '-=50',
                    left: '+=50'
                }
            )
        }
    })
})