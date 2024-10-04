// Função para calcular e exibir a média
function calcularMedia() {
    const nome = document.getElementById("nomeInput").value.trim(); // Obtém o nome do aluno
    const nota1 = parseFloat(document.getElementById("nota1Input").value); // Obtém a primeira nota
    const nota2 = parseFloat(document.getElementById("nota2Input").value); // Obtém a segunda nota
    const nota3 = parseFloat(document.getElementById("nota3Input").value); // Obtém a terceira nota

    const resultadoElement = document.getElementById("resultado"); // Elemento para exibir o resultado

    // Verifica se o nome e todas as notas foram inseridos
    if (!nome || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultadoElement.textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    // Define o objeto aluno
    const aluno = {
        nome: nome,
        notas: [nota1, nota2, nota3],
        
        // Método para calcular a média das notas
        media: function() {
            let soma = 0; // Variável para acumular a soma das notas
            for (let i = 0; i < this.notas.length; i++) {
                soma += this.notas[i]; // Adiciona cada nota à soma
            }
            return soma / this.notas.length; // Retorna a média
        }
    };

    // Calcula a média e exibe o resultado
    const mediaAluno = aluno.media(); // Chama o método de média
    resultadoElement.textContent = `A média de ${aluno.nome} é ${mediaAluno.toFixed(2)}.`; // Exibe o resultado
}
