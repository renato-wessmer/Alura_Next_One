let title = document.querySelector('h1'); /* A palavra reservada document é utilizada para resgatar as tag no index.html, mas para que se resgate a tag específica utilizamos o seletor querySelector */

title.innerHTML = 'Jogo número secreto'; /* Comando utilizado para iserir o texto na váriavel que criamos que será expelhado na tag alvo. */

let paragraph = document.querySelector('p');

paragraph.innerHTML = 'Escolha um número entre 1 e 10';

function checkChoice() {
    console.log('O botão foi clicado!');
} 