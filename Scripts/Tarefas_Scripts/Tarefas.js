let tarefas = [];

function adicionarTarefa() {
    const tarefaInput = document.getElementById("tarefaInput");
    const tarefa = tarefaInput.value.trim();

    if (tarefa) {
        if (tarefas.length < 5) {
            tarefas.push(tarefa);
            tarefaInput.value = ""; // Limpar o campo de entrada
            exibirTarefas();
        } else {
            alert("Você já inseriu 5 tarefas!");
        }
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
}

function exibirTarefas() {
    const tarefasLista = document.getElementById("tarefasLista");
    tarefasLista.innerHTML = ""; // Limpa a lista atual

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}: ${tarefa}`;
        tarefasLista.appendChild(li);
    });
}

function concluirTarefa() {
    const tarefaIndex = document.getElementById("tarefaIndex").value - 1; // Subtrai 1 para usar o índice correto

    if (tarefaIndex >= 0 && tarefaIndex < tarefas.length) {
        tarefas.splice(tarefaIndex, 1); // Remove a tarefa do array
        exibirTarefas();
        document.getElementById("tarefaIndex").value = ""; // Limpa o campo de entrada
    } else {
        alert("Número de tarefa inválido.");
    }
}
