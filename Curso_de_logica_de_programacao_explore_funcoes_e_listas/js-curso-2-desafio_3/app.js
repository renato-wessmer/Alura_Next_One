// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

let weight = parseFloat(prompt('Informe seu peso em kilogramas'));

let height = parseFloat(prompt('Informe sua altura em metros'));

function personBodyMassIndex (weight, height) {
    return weight / (height ** 2);
}

let bmi = personBodyMassIndex (weight, height);
console.log(`Seu índice de massa corporal é ${bmi.toFixed(2)}.`); // Fixa em duas casas decimais após a vírgula o resultado.

// Solução alura 

function calculaIMC(altura, peso){

    let imc = peso / (alturaMetros * alturaMetros);
}
  
// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

let numberFactorial = parseInt(prompt('Digite um número para fazer seu fatorial.'));

function factorialValue(numberFactorial) {
    let result = 1;  // Começa com 1 porque o fatorial de qualquer número envolve multiplicação sucessiva.
    while (numberFactorial > 1) {
        result *= numberFactorial; // Multiplica o resultado pelo número atual.
        numberFactorial--; 
    }
    return result; 
}

let resultFactorial = factorialValue(numberFactorial);
console.log(`O resultado fatorial do número ${numberFactorial} é ${resultFactorial}`);

// Solução alura

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
}
  
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

let amountOfDollars = parseFloat(prompt('Qual a quantidade de dolars você quer converter?'));

function exchange (amountOfDollars) {
    return amountOfDollars * 4.80;
}

let resultConvert = exchange(amountOfDollars);
console.log(`O resultado da conversão é R$ ${resultConvert.toFixed(2)}`);

// Solução alura

function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}
  
// Exemplo de uso
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.






// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.






// Create a function that shows the area and perimeter of a rectangular room on the screen, using the height and width that will be given as parameters.

// Create a function that shows the area and perimeter of a circular room on the screen, using its radius that will be provided as a parameter. Consider Pi = 3.14.

// Create a function that displays the multiplication table of a number given as a parameter on the screen.