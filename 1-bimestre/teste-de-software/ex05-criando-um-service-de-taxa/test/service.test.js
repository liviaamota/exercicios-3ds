const calculaTaxa = require('../service/taxaService')

describe("Testando taxaService", () =>{
    test("Aplicar 5% acima de 500", () => {
        expect(calculaTaxa(600)).toBe(630)
    })

    test("Caso contrário → sem taxa", () => {
        expect(calculaTaxa(300)).toBe(300)
    } )
} )