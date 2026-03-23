const { cadastrarTarefa, totalTarefas } = require("../services/tarefaService")

function criarTarefa(req, res) {
    const { descricao } = req.body

    const sucesso = cadastrarTarefa(descricao)

    if (!sucesso) {
        return res.status(400).send("Descrição obrigatória")
    }

    return res.status(201).send("Tarefa cadastrada")
}

function obterTotal(req, res) {
    const total = totalTarefas()

    return res.send({ total })
}

module.exports = {
    criarTarefa,
    obterTotal
}