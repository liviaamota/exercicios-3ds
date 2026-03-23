const { adicionarTarefa, listarTarefas } = require("../database/tarefaDatabase")

function cadastrarTarefa(descricao) {
    if (!descricao) {
        return false
    }

    const tarefa = { descricao }

    adicionarTarefa(tarefa)

    return true
}

function totalTarefas() {
    return listarTarefas().length
}

module.exports = {
    cadastrarTarefa,
    totalTarefas
}