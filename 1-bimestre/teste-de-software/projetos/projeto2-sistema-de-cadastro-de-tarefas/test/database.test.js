const { adicionarTarefa, listarTarefas, limparBanco } = require("../database/tarefaDatabase")

beforeEach(() => {
    limparBanco()
})

test("deve adicionar uma tarefa", () => {
    adicionarTarefa({ descricao: "Estudar" })

    const tarefas = listarTarefas()

    expect(tarefas.length).toBe(1)
})

test("banco deve começar vazio", () => {
    const tarefas = listarTarefas()

    expect(tarefas.length).toBe(0)
})