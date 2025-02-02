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

    // Verificação dos nomes para não ter duplicados, a verificação ela ignora se é maiúsculas/minúsculas a escrita das palavras na lista 'friend', exibe um alerta.
    if (friend.some(name => name.toLowerCase() === friendName.toLowerCase())) {
        alert("Esse nome já foi inserido. Por favor, insira um nome que ainda não foi inserido.");
        inputField.value = ""; // Limpa o campo para nova entrada
        return;
    }

    // Adiciona o nome a lista com nome de friend
    friend.push(friendName);

    // Limpa o campo de entrada para nova inserção
    inputField.value = "";

    // Exibe no console o nome adicionado e o array atualizado
    console.log("Nome adicionado:", friendName);
    console.log("Lista de amigos:", friend);

    // Atualiza a lista exibida na página
    updateFriendList();
}


function updateFriendList() {

    let friendList = document.querySelector("#listFriends");

    friendList.innerHTML = "";

    for (let i = 0; i < friend.length; i++) {
        let li = document.createElement("li");
        li.textContent = friend[i];
        friendList.appendChild(li);
    }
}


function drawFriend() {

    if (friend.length === 0) {
        alert("Adicione o nome dos seus amigos para sortear!");
        return;
    }

    let randomIndex = Math.floor(Math.random() * friend.length);
    let selectedFriend = friend[randomIndex];

    friend.splice(randomIndex, 1);

    console.log(`Amigo sorteado é : ${selectedFriend}`);

    let resultList = document.querySelector("#result");
    resultList.innerHTML = ""; 
    let li = document.createElement("li");
    li.textContent = "Amigo sorteado: " + selectedFriend;
    resultList.appendChild(li);

    updateFriendList();
}

function renewGame() {
    friend = [];
    updateFriendList();
    document.querySelector("#result").innerHTML = "";
    console.log("Jogo reiniciado! A lista de amigos agora está vazia.");
  }
  
  
