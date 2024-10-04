const produtos = []; // Array de produtos
const tabelaProdutos = document.getElementById("tabelaProdutos").querySelector("tbody");
const resultadoElement = document.getElementById("resultado");

// Função para atualizar a tabela
function atualizarTabela() {
    tabelaProdutos.innerHTML = ""; // Limpa a tabela
    produtos.forEach((produto, index) => {
        const valorTotal = (produto.preco * produto.quantidade).toFixed(2);
        const row = tabelaProdutos.insertRow();
        
        row.innerHTML = `
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td>${produto.quantidade}</td>
            <td>R$ ${valorTotal}</td>
            <td><button onclick="removerProduto(${index})">Remover</button></td>
        `;
    });
    calcularValorTotal();
}

// Função para adicionar um produto
document.getElementById("produtoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById("nome").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);

    const novoProduto = { nome, preco, quantidade };
    produtos.push(novoProduto); // Adiciona o produto ao array
    atualizarTabela(); // Atualiza a tabela
    this.reset(); // Reseta o formulário
});

// Função para remover um produto
function removerProduto(index) {
    produtos.splice(index, 1); // Remove o produto do array
    atualizarTabela(); // Atualiza a tabela
}

// Função para calcular e exibir o valor total do estoque
function calcularValorTotal() {
    const total = produtos.reduce((acc, produto) => acc + (produto.preco * produto.quantidade), 0);
    resultadoElement.textContent = `Valor total do estoque: R$ ${total.toFixed(2)}`;
}


// Inicializa a tabela
atualizarTabela();
