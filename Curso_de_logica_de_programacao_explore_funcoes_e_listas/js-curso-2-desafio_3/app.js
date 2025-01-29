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

let heightRoom = parseFloat(prompt('Qual a altura da sala?'));

let widthRoom = parseFloat(prompt('Qual a largura da sala'));

function areaPerimeter (heightRoom, widthRoom) {
   let areaRoom = heightRoom * widthRoom;
   let perimeterRoom = (heightRoom * 2) + (widthRoom * 2);
   return {
    area: areaRoom.toFixed(2),
    perimeter: perimeterRoom.toFixed(2)
   };
}

let result = areaPerimeter(heightRoom, widthRoom);

alert(`O valor da área da sala retalgular é ${result.area}, já o valor do perímetro é ${result.perimeter}.`)

// Solução alura

function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);
  

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

let radius = parseFloat(prompt('Informe o raio desejado'));

function areaPerimeterCircle (radius) {
    areaCircle = 3.14 * radius * radius;
    perimeterCircle = 2 * 3.14 * radius;
    return {
        areaC: areaCircle.toFixed(2), perimeterC: perimeterCircle.toFixed(2)
    };
}

let resultRadius = areaPerimeterCircle (radius);

prompt(`Com base no raio fornecido a área do circulo é ${resultRadius.areaC} e o seu perimetro é ${resultRadius.perimeterC}.`);

// Solução alura

function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// Solução alura

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = 7;
  mostrarTabuada(numero);