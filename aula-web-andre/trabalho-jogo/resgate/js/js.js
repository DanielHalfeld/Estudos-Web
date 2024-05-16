function start() { // inicio start()
  $("#inicio").hide();
  $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
  $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
  $("#fundoGame").append("<div id='inimigo2'></div>");
  $("#fundoGame").append("<div id='amigo' class='anima3'></div>");


//principais variaveis
var jogo = {}
var TECLA = {A:65, D:68, W:87}
jogo.pressionou = []
$(document).keydown(function(e){
  jogo.pressionou[e.which] = true
})

$(document).keyup(function(e){
  jogo.pressionou[e.which] = false
})

// game loop
jogo.timer = setInterval(loop,30)

function loop() {
  moveFundo()
  moveJogador()
}

function moveFundo(){
  esquerda = parseInt($('#fundoGame').css('background-position'))
  $('#fundoGame').css('background-position', esquerda - 1)
}

function moveJogador(){
  if (jogo.pressionou[TECLA.A]){
    var topo = parseInt($('#jogador').css('top'))
    $('#jogador').css('top',topo - 10)
  }
  if (jogo.pressionou[TECLA.D]){
    var topo = parseInt($('#jogador').css('top'))
    $('#jogador').css('top',topo + 10)
  }
  if (jogo.pressionou[TECLA.W]){
    
  }

}
} // fim start()