alert('Boas-vindas ao jogo do Número Secreto'); /* Cria uma caixa de exibição da mensagen de boas vindas ao usuário */

let numberSecret = 8; /* variável que armazena o número secreto */
console.log(numberSecret);

let numberChosen = prompt('Escolha um número entre 1 e 10'); /* variável para armazenar o número escolhido pelo jogador junto com a função de criar uma caixa de texto onde a pessoa pode escrever o número que acha ser o correto */
console.log('Valor do número escolhido', numberChosen);
console.log('Resultado da comparação', numberChosen == numberSecret);

if (numberChosen == numberSecret) { /* If é a condicional que compara se numberChosen é igual ao numberSecret  */
    alert(`Isso aí! você descobriu o número secreto ${numberSecret}` /* ` ${}` esse formato é utilizado para trazer o valor da várivael de forma automática sem precisar mudar a cada ciclo*/); /* O console.log serve para verificarmos a execução do condicional no nosso projeto dentro do navegador web */
} else {
    console.log('Valor do número secreto:', numberSecret);
    alert('Você errou :( o número secreto era ' + numberSecret)
}