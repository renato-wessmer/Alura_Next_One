// let title = document.querySelector('h1'); 

title.innerHTML = 'Jogo número secreto'; /* Comando utilizado para iserir o texto na váriavel que criamos que será expelhado na tag alvo. */

// let paragraph = document.querySelector('p');

// paragraph.innerHTML = 'Escolha um número entre 1 e 10';

function displayTextOnScreen(tag, text) { // Dentro do parênteses se informou os dois parâmetros comuns as váriaveis criadas com a mesma função, marcaão de texto tag, e, texto a ser substituido no HTML.
    let field = document.querySelector(tag); /* A palavra reservada document é utilizada para resgatar as tag no index.html, mas para que se resgate a tag específica utilizamos o seletor querySelector */
    field.innerHTML = text;/* Comando utilizado para iserir o texto na váriavel que criamos que será expelhado na tag alvo. */
}

displayTextOnScreen ('h1', 'Jogo número secreto');
displayTextOnScreen ('p', 'Escolha um número entre 1 e 10');

function checkChoice() {
    console.log('O botão foi clicado!');
} 