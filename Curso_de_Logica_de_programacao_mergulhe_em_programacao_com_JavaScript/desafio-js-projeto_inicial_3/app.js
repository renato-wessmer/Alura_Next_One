/* 1) Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número. */

let exerciseOneCounter = 1;

while (exerciseOneCounter <= 10) {
    alert(`O número é: ${exerciseOneCounter}`);
    exerciseOneCounter++; 
} 

/* 2) Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número. */

let exerciseTwoCounter = 10

while (exerciseTwoCounter >= 0) {
    alert(`O número é: ${exerciseTwoCounter}`);
    exerciseTwoCounter--;
}

/* 3) Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador. */

let countdownOne = prompt('Digite qualquer número igual ou abaixo de 10, mas deve ser maior que 0'); 

while (countdownOne >10 || countdownOne <0){
    console.log('O número deve ser igual ou abaixo de 10');
    countdownOne = prompt('Digite qualquer número igual ou abaixo de 10, mas deve ser maior que 0'); 
}

while (countdownOne >= 0){
    console.log(`Contagem regressiva: ${countdownOne} `);
    countdownOne--;   
}

console.log('Acontagem regressiva terminou!');

/* 4) Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador. */

let chosenNumber = prompt('Digite qualquer número, mas deve ser maior que 0');
let countdownTwo = 0;

while (chosenNumber <= 0) { 
    console.log('O número deve ser maior do que 0');
    chosenNumber = prompt('Digite qualquer número, mas deve ser maior que 0');
}

while (countdownTwo <= chosenNumber) {
    console.log(`Contagem regressiva: ${countdownTwo}`);
    countdownTwo++;
}

