//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

alert('Prepare-se para viver momentos de pura emoção! Com o nosso sorteador de amigos, você vai registrar os nomes de toda a sua turma e, a cada rodada, descobrir de forma surpreendente quem será o escolhido. Será que hoje a sua sorte vai brilhar? Venha jogar e transforme cada sorteio em uma festa de surpresas!');

let friend = [];

function addFriend() {

let inputField = document.querySelector("#friend");

let friendName = inputField.value;

// Usado para remover os espaços em branco no início e no fim dos caracteres agrupados, foi utilizado essa página para ter a ideia do funcionamento https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
friendName = friendName.trim();

// Condicional para validar se a entrada não está vazia ou se não é um número, para isso se usou essa página da documentação https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Logical_AND e https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN
if (friendName === "" || !isNaN(friendName)) {
    alert("Por favor, insira um nome válido.");
    return;
}

// Adiciona o nome a lista com nome de friend
friend.push(friendName);

// Limpa o campo de entrada para nova inserção
inputField.value = "";

// Exibe no console o nome adicionado e o array atualizado
console.log("Nome adicionado:", friendName);
console.log("Lista de amigos:", friend);
}



// drawFriend()





//Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

// Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.

// Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

//Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().

//Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.


// Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

// Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

// Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

// Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.
