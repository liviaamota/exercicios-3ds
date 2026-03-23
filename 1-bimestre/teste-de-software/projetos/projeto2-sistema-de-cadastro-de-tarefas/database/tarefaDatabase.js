let tarefas = []

function adicionarTarefa(tarefa) {
    tarefas.push(tarefa)
}

function listarTarefas() {
    return tarefas
}

function limparBanco() {
    tarefas = []
}

module.exports = {
    adicionarTarefa,
    listarTarefas,
    limparBanco
}