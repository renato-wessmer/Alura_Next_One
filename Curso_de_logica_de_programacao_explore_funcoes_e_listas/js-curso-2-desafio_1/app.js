let title = document.querySelector('h1');

title.innerHTML = 'Hora do desafio';

function buttonConsoleClicked() {
    console.log('O botão foi clicado');
}

function buttonAlertClicked() {
    alert('Eu amo JS')
}

function buttonPromptClicked() {
    let city = prompt('Digite o nome de uma cidade do Brasil.');

    alert(`Estive em ${city} e lembrei de você.`);
}

function buttonSumClicked() {
    let firstNumber = parseInt(prompt('Digite o primeiro número inteiro'));

    let secondNumber = parseInt(prompt('Digite o segundo número inteiro'));

    let sum = firstNumber + secondNumber;

    alert(`A soma de ${firstNumber} + ${secondNumber} tem como resultado ${sum}`);
}