/* $('[acao-clique]').on('click', function(){
    $('h1').addClass('destaque')
})
não irá funcionar pois ele tentará buscar elementos que não existem no começo do carregamento do head 
*/
/* $(document).ready(function(){
    $('[acao-clique]').on('click', function(){
        $('h1').addClass('destaque')
    })
})
forma mais fácil :
 */

$(function(){
    $('[acao-clique]').on('click', function(){
        $('h1').addClass('destaque')
    })
})

$(window).on('unload', function(){
    console.log('carregando...')
})

$(window).on('load', function(){
    console.log('carregou')
})

$(window).on('resize', function(){
    console.log('redimensionou')
})

$(window).on('error', function(){
    console.log('ocorreu uma falha')
})

$(window).on('scroll', function(){
    console.log('navegou verticalmente')
})