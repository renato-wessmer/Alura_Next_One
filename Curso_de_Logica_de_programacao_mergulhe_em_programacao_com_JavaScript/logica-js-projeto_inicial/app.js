alert('Boas-vindas ao jogo do Número Secreto'); /* Cria uma caixa de exibição da mensagen de boas vindas ao usuário */

let numberSecret = parseInt(Math.random() * 100 +1); /* variável que armazena o número secreto, duas coisas importantes nessa função: o "M" de “Math” precisa ser em letra maiúscula e o "random" em letra minúscula, o parseInt serve para pegar a parte do número inteiro ignorando a sobra já o Math.random gera pseudos números aleatórios decimal entre 0 (inclusivo) e 1, para que tenhamos valores que vão de 1 a 10, concatenamos a multiplicação por 10 ao valor 1.*/
console.log(numberSecret);

let numberChosen;
let attempts = 1;

while (numberChosen != numberSecret) { /* Laço de repetião que será executado enquanto o número escolhido for diferente do número secreto */    

    numberChosen = prompt('Escolha um número entre 1 e 100'); /* variável para armazenar o número escolhido pelo jogador junto com a função de criar uma caixa de texto onde a pessoa pode escrever o número que acha ser o correto */
    console.log('Valor do número escolhido', numberChosen);
    console.log('Resultado da comparação', numberChosen == numberSecret);

    if (numberChosen == numberSecret) { /* If é a condicional que compara se numberChosen é igual ao numberSecret  */
        break; /* Faz com que a parte do código abaixo dentro do while seja ignorado, exibindo diretamente o último alert do código. */ 
    } else {
        if (numberChosen > numberSecret) {
            alert(`O número secreto é menor que ${numberChosen}`);
        } else {
            alert(`O número secreto é maior que ${numberChosen}`);
        }
        attempts++; /* Forma mais coondesnada de escrever attempts = attempts +1 é attempts++ */
    }
}

let wordAttempts = attempts > 1 ? 'tentativas' : 'tentativa'; /* Este recurso é um operador ternário */

alert(`Isso aí! você descobriu o número secreto ${numberSecret} com ${attempts} ${wordAttempts}.`); /* ` ${}` esse formato é utilizado para trazer o valor da várivael de forma automática sem precisar mudar a cada ciclo*/

