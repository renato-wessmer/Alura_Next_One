/* 1) Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".*/

let dayOfTheWeek = promt('Qual é o dia da semana?');
console.log('Dia escolhido', dayOfTheWeek);

if (dayOfTheWeek == 'Sábado') {
    alert('Bom fim de semana!');
} else if (dayOfTheWeek == 'Domingo') {
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
}
    
/* 2) Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando. */

let chosenNumber = promp('Escolha um número positivo ou negativo');

if (chosenNumber > 0) {
    alert('O número' + chosenNumber + 'digitado é positivo');
} else {
    alert('O número' + chosenNumber + 'digitado é negativo');
}

/* 3) Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.". */

let chosenScore = 150

if (chosenScore >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.')
}

/* 4) Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo. */

let amountInTheAccount = 5000;

let withdraw = prompt('Digite um valor a sacar!');

withdraw = amountInTheAccount - withdraw;

alert(`O saldo na conta é: ${withdraw}`);

/* 5) Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome. */

let yourName = prompt('Digite seu nome');

alert(`Boas-vindas ${yourName}`);


