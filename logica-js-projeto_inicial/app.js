alert('Boas-vindas ao jogo do Número Secreto'); /* Cria uma caixa de exibição da mensagen de boas vindas ao usuário */

let numberSecret = 5; /* variável que armazena o número secreto */

let numberChosen = prompt('Escolha um número entre 1 e 10'); /* variável para armazenar o número escolhido pelo jogador junto com a função de criar uma caixa de texto onde a pessoa pode escrever o número que acha ser o correto */

if (numberChosen == numberSecret) { /* If é a condicional que compara se numberChosen é igual ao numberSecret  */
    console.log("Isso aí! você descobriu o número secreto (5)"); /* O console.log serve para verificarmos a execução do condicional no nosso projeto dentro do navegador web */
}
