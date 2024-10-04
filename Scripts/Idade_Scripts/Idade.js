// Array para armazenar as pessoas
const pessoas = [];

// Função para adicionar uma pessoa ao array
function adicionarPessoa() {
    const nome = document.getElementById("nomeInput").value.trim(); // Obtém o nome do input
    const idade = parseInt(document.getElementById("idadeInput").value); // Obtém a idade do input

    // Verifica se os dados são válidos
    if (nome === "" || isNaN(idade)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Adiciona a pessoa ao array
    pessoas.push({ nome: nome, idade: idade });

    // Limpa os campos de entrada
    document.getElementById("nomeInput").value = "";
    document.getElementById("idadeInput").value = "";

    alert(`Pessoa ${nome} adicionada!`);
}

// Função para exibir as pessoas com mais de 18 anos
function exibirMaioresDeDezoito() {
    const resultadoElement = document.getElementById("resultado"); // Obtém o elemento de resultado
    resultadoElement.innerHTML = ""; // Limpa resultados anteriores

    // Filtra e armazena nomes das pessoas maiores de 18 anos
    const maioresDeDezoito = pessoas.filter(pessoa => pessoa.idade > 18);

    if (maioresDeDezoito.length === 0) {
        resultadoElement.textContent = "Nenhuma pessoa com mais de 18 anos foi encontrada.";
        return;
    }

    // Exibe os nomes das pessoas maiores de 18 anos
    resultadoElement.innerHTML = "Pessoas com mais de 18 anos:<br>";
    maioresDeDezoito.forEach(pessoa => {
        resultadoElement.innerHTML += `${pessoa.nome} (${pessoa.idade} anos)<br>`;
    });
}
