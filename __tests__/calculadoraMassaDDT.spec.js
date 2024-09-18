const { test, expect } = require('@jest/globals')

const calculadora = require('../src/calculadora')

let massaAreaParalelogramo = [
    [5, 3, 15],
    [15, 10, 150],
    [30, 20, 600],
    [10, 20, 200],
    [43, 53, 2279]
]

test.each(massaAreaParalelogramo)('base %f * %f altura', (base, altura, resultadoEsperado) => {
 
    const resultadoObtido = calculadora.areaDoParalelogramo(base, altura);

    expect(resultadoObtido).toBe(resultadoEsperado);
})


// Teste com lista de valores