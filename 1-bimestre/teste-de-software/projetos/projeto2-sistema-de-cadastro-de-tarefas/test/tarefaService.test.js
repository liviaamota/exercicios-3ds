const { cadastrarTarefa, totalTarefas } = require("../services/tarefaService")
const { limparBanco } = require("../database/tarefaDatabase")

beforeEach(() => {
    limparBanco()
})

describe("Testando tarefaService", () => {

    test("deve cadastrar uma tarefa", () => {
        cadastrarTarefa("Estudar Jest")

        expect(totalTarefas()).toBe(1)
    })

    test("não deve cadastrar tarefa sem descrição", () => {
        const resultado = cadastrarTarefa()

        expect(resultado).toBe(false)
    })

    test("deve contar total de tarefas", () => {
        cadastrarTarefa("Tarefa 1")
        cadastrarTarefa("Tarefa 2")

        expect(totalTarefas()).toBe(2)
    })

})