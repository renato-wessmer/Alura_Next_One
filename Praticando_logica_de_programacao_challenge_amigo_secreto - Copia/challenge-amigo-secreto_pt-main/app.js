// Mensagem inicial para o usuário
alert(
    'Prepare-se para o nosso sorteador de amigos.'
  );
  
  // Seletores dos elementos do DOM centralizados para facilitar a manutenção
  const selectors = {
    friendInput: "#friend",
    friendList: "#listFriends",
    result: "#result",
  };
  
  // Array que armazenará os nomes dos amigos
  let friends = [];
  
  /**
   * Adiciona um novo amigo à lista.
   */
  const addFriend = () => {
    const inputField = document.querySelector(selectors.friendInput);
    let friendName = inputField.value.trim();
  
    // Validação: verifica se a entrada está vazia ou é um número
    if (!friendName || !isNaN(friendName)) {
      alert("Por favor, insira um nome válido.");
      return;
    }
  
    // Verifica se o nome já existe (ignorando maiúsculas/minúsculas)
    if (friends.some(name => name.toLowerCase() === friendName.toLowerCase())) {
      alert("Esse nome já foi inserido. Por favor, insira um nome que ainda não foi inserido.");
      inputField.value = "";
      return;
    }
  
    // Adiciona o nome à lista e limpa o campo de entrada
    friends.push(friendName);
    inputField.value = "";
  
    console.log("Nome adicionado:", friendName);
    console.log("Lista de amigos:", friends);
  
    updateFriendList();
  };
  
  /**
   * Atualiza a exibição da lista de amigos na página.
   */
  const updateFriendList = () => {
    const friendListElement = document.querySelector(selectors.friendList);
    friendListElement.innerHTML = "";
  
    friends.forEach(name => {
      const li = document.createElement("li");
      li.textContent = name;
      friendListElement.appendChild(li);
    });
  };
  
  /**
   * Realiza o sorteio de um amigo e remove-o da lista.
   */
  const drawFriend = () => {
    if (friends.length === 0) {
      alert("Adicione o nome dos seus amigos para sortear!");
      return;
    }
  
    // Seleciona um índice aleatório
    const randomIndex = Math.floor(Math.random() * friends.length);
    const selectedFriend = friends[randomIndex];
  
    // Remove o amigo sorteado da lista
    friends.splice(randomIndex, 1);
    console.log(`Amigo sorteado é: ${selectedFriend}`);
  
    // Exibe o resultado na página
    const resultElement = document.querySelector(selectors.result);
    resultElement.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `Amigo sorteado: ${selectedFriend}`;
    resultElement.appendChild(li);
  
    updateFriendList();
  };
  
  /**
   * Reinicia o jogo, limpando a lista de amigos e o resultado exibido.
   */
  const renewGame = () => {
    friends = [];
    updateFriendList();
    document.querySelector(selectors.result).innerHTML = "";
    console.log("Jogo reiniciado! A lista de amigos agora está vazia.");
  };
  