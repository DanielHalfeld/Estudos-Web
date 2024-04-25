$(function(){

    $('[acao-clique]').on('click', function(){
        /* $('#animacao').toggle(1000) */ //hide,show,toggle
        /* $('#animacao').fadeTo(1000, 0.5) */ //fadeIn,fadeOut,fadeTo,fadeToggle
        $('#animacao').slideToggle(1000) //slideUp,slideDown,slideToggle
    })

})