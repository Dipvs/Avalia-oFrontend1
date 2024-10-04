function verificarPalindromo() {
    const palavra = document.getElementById("palavra").value;
    const resultadoElement = document.getElementById("resultado");
    let ehPalindromo = true; // Supondo que seja palíndromo

    // Remover espaços e transformar para minúsculas
    const palavraFormatada = palavra.replace(/\s+/g, '').toLowerCase();

    for (let i = 0; i < palavraFormatada.length / 2; i++) {
        if (palavraFormatada[i] !== palavraFormatada[palavraFormatada.length - 1 - i]) {
            ehPalindromo = false; // Não é um palíndromo
            break;
        }
    }

    if (ehPalindromo) {
        resultadoElement.textContent = `"${palavra}" é um palíndromo!`;
    } else {
        resultadoElement.textContent = `"${palavra}" não é um palíndromo.`;
    }
}
