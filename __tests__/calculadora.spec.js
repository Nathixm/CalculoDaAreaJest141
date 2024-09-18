const { test, expect } = require('@jest/globals')

const calculadora = require('../src/calculadora')

test('areaDoQuadrado', () => {
    const lado = 4;
    const resultadoEsperado = 16;

    const resultadoObtido = calculadora.areaDoQuadrado(lado);

    expect(resultadoObtido).toBe(resultadoEsperado);

})

test('areaDoParalelogramo', () => {
    const base = 5;
    const altura = 3;
    const resultadoEsperado = 15;

    const resultadoObtido = calculadora.areaDoParalelogramo(base, altura);

    expect(resultadoObtido).toBe(resultadoEsperado);

})

test('areaDoTriangulo', () => {
    const base = 5;
    const altura = 3;
    const resultadoEsperado = 7.5;

    const resultadoObtido = calculadora.areaDoTriangulo(base, altura);

    expect(resultadoObtido).toBe(resultadoEsperado);

})


// Teste unitário