/* 1) Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas. */

console.log('Boas vindas!');

/* 2) Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador. */

let yourName = 'Renato';
console.log(`Olá, ${yourName}!`);

/* 3) Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!". */

let yourNameAgain = 'Renato';
alert(`Olá, ${yourNameAgain}!`);

/* 4) Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador. */

let question = prompt('Qual a linguagem de programação você mais gosta?');
console.log(`A linguagem de programação que mais gosto é ${question}`);
console.log(question);

/* 5) Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console. */

let value1 = 10;
let value2 = 10;

let sum = value1 + value2;

console.log(`A soma de ${value1} e ${value2} é igual a ${sum}.`);

/* 6) Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console. */

let valuea = 10;
let valueb = 10; 

let subtraction = valuea - valueb;

console.log(`A diferenção entre ${valuea} e ${valueb} é igual a ${subtraction}.`);

/* 7) Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console. */

let age = prompt('Qual a sua idade');

if (age > 18) {
    alert('Você já atingiu a maioridade');
} else {
    alert('Você não atingiu a maioridade');
}

/* 8) Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem. */

let number = prompt('Digite um número');

if (number > 0) { 
    alert(`O númeor ${number} digitado é positivo`);
} else {
    if (number < 0) {
        alert(`O número ${number} digitado é negativo`)
    } else {
        alert(`O número digitado é zero.`)
    }
}

var numberOne = parseFloat(prompt("Digite um número:"));


if (numberOne > 0) {
    console.log("O número é positivo.");
} else if (numberOne < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

/* 9) Use um loop while para imprimir os números de 1 a 10 no console. */

let start = 1;

while (start <=10 ) {
    console.log(start);
    start ++;
}

/* 10) Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console. */

let score = 8; /* Substitua pelo valor da nota que deseja testar */

if (score > 7 ) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

/* 11) Use o Math.random para gerar qualquer número aleatório e exiba esse número no console. */

let randomNumber = Math.random();

console.log(randomNumber);

/* 12) Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console. */

let randomNumberOne = parseInt(Math.random() * 10 +1);

console.log(randomNumberOne);

/* 13) Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console. */

let randomNumberTwo = parseInt(Math.random() *100 +1);

console.log(randomNumberTwo);