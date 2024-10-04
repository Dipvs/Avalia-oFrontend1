// Função para gerar a tabela de multiplicação
function gerarTabela() {
    const numero = parseInt(document.getElementById("numeroInput").value); // Obtém o número do input
    const resultadoElement = document.getElementById("tabelaMultiplicacao").getElementsByTagName("tbody")[0]; // Obtém o corpo da tabela

    // Limpa resultados anteriores
    resultadoElement.innerHTML = "";

    // Verifica se o número é positivo
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, insira um número positivo.");
        return;
    }

    // Gera a tabela de multiplicação
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i; // Calcula o resultado da multiplicação
        console.log(`${numero} x ${i} = ${resultado}`); // Exibe no console

        // Cria uma nova linha na tabela
        const novaLinha = resultadoElement.insertRow();
        const celulaMultiplicador = novaLinha.insertCell(0);
        const celulaResultado = novaLinha.insertCell(1);

        celulaMultiplicador.textContent = i; // Insere o multiplicador
        celulaResultado.textContent = resultado; // Insere o resultado
    }
}
