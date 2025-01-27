/* 1) Criar uma função que exibe "Olá, mundo!" no console. */

function helloWorld () {
    console.log('Olá Mundo!');
}

helloWorld ();

/* 2) Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console. */

function yourName (names) {
    console.log(`Olá, ${names}`);
}

yourName ('Renato');

/* 3)  Criar uma função que recebe um número como parâmetro e retorna o dobro desse número. */

function doubleOfNumber(number) {
    return number * 2;
}

let result = doubleOfNumber(7);
console.log(result);

/* 4)  Criar uma função que recebe três números como parâmetros e retorna a média deles. */

function mediaOfThreeNumbers (number1, number2, number3) {
    return (number1+number2+number3) / 3;
}

let media = mediaOfThreeNumbers(2, 10, 2);
console.log(media);

/* 5)  Criar uma função que recebe dois números como parâmetros e retorna o maior deles. */

function largestNumber (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let resultTwo = largestNumber(15, 25);
console.log(resultTwo); 


function findBigger(a, b) {
    return a > b ? a : b; // ternary operator
}
  
let biggestNumber = findBigger(15, 25);
console.log(biggestNumber);

/* 6)  Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo */

function numberSquared(z) {
    return z * z;
}

let square = numberSquared(2);
console.log(square);

function numberSquared(z) {
    return z ** 2;
}

let squareTwo = numberSquared(2);
console.log(squareTwo);

function numberSquared(z) {
    return Math.pow(z, 2);  // Usa Math.pow() para calcular o quadrado
}

let square3 = numberSquared(2);
console.log(square3);  
