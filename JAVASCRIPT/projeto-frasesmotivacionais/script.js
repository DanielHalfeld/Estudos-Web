let frases = [
  "Quando você vive o nós, o seu eu é recompensado.",
  "Os problemas são oportunidades para se mostrar o que sabe. ",
  "Se me fazes algo por amor, amém. Mas se faz por espera algo de mim, isto não é amor, é troca.",
  "Desafios nos tornam mais fortes e resilientes, não desista!",
  "É em meio a dificuldade que se encontra a oportunidade.",
  "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
  "Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.",
  "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.",
  "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
  "Tente de novo. Fracasse de novo. Mas fracasse melhor.",
  "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
];

function frasesMotiv() {
  document.getElementById("frase").innerHTML = frases[(Math.floor(Math.random() * frases.length))]
}
