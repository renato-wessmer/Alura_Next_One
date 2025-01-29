let listOfSortedNumbers = [];

let numberLimit = 10;

let numberSecret = generateRandomNumber(); // Armazena o valor criado pela função.

let attempts = 1;

function displayTextOnScreen(tag, text) { // Dentro do parênteses se informou os dois parâmetros comuns as váriaveis criadas com a mesma função, marcaão de texto tag, e, texto a ser substituido no HTML.
    let field = document.querySelector(tag); /* A palavra reservada document é utilizada para resgatar as tag no index.html, mas para que se resgate a tag específica utilizamos o seletor querySelector */
    field.innerHTML = text;/* Comando utilizado para iserir o texto na váriavel que criamos que será expelhado na tag alvo. */
}

function displayTextOnScreenInitial() {
    displayTextOnScreen ('h1', 'Jogo número secreto');
    displayTextOnScreen ('p', 'Escolha um número entre 1 e 10');
}

displayTextOnScreenInitial();

function checkChoice() {
    let choice = document.querySelector('input').value; // É utilizado value, pois o input do usuário trata-se de um número e não texto
    //console.log(choice == numberSecret);
    if (choice == numberSecret) {
        displayTextOnScreen ('h1', 'Acertou');
            let wordTry = attempts > 1 ? 'tentativas' : 'tentativa';

            let attemptsMessage = `Você descobriu o número secreto com ${attempts} ${wordTry}`;

            displayTextOnScreen ('p', attemptsMessage);

            document.getElementById('restart').removeAttribute('disabled');
    } else {
        if (choice > numberSecret ) {
           displayTextOnScreen ('p', 'O número secreto é menor');     
        } else {
            displayTextOnScreen ('p', 'O número secreto é maior');
        }
        attempts++;
        clearField();
    }
} 

function generateRandomNumber() {
    let numberChosen = parseInt(Math.random() * numberLimit + 1);

    let quantityOfElementsOnList = listOfSortedNumbers.length;

    If  (quantityOfElementsOnList == numberLimit) {
        listOfSortedNumbers = [];
    }
    if (listOfSortedNumbers.includes(numberChosen)){
        return generateRandomNumber(); // Recursão
    } else {
        listOfSortedNumbers.push(numberChosen);
        return numberChosen;
    }
}

function clearField() {
    choice = document.querySelector('input');
    choice.value = ''; 
}

function restartGame() {
    numberSecret = generateRandomNumber();
    clearField ();
    attempts = 1;
    displayTextOnScreenInitial()
    document.getElementById('restart').setAttribute('disabled', true);
}


