const { test, expect } = require('@jest/globals')

const calculadora = require('../src/calculadora')

const massa = require('../../fixtures/massaCalculo')

test.each(massa.array.map(bloco => [
    bloco.lado, 
    bloco.esperadoQuadrado]))
    ('calcula area %f * %f do quadrado', (lado, resultadoEsperado) => {

       const resultadoObtido = calculadora.areaDoQuadrado(lado);
       
       expect(resultadoObtido).toBe(resultadoEsperado);
    })

test.each(massa.array.map(bloco => [
    bloco.base, 
    bloco.altura,
    bloco.esperadoParalelogramo]))
    ('calcula area %f * %f do paralelogramo', (base, altura, resultadoEsperado) => {

       const resultadoObtido = calculadora.areaDoParalelogramo(base, altura);
       
       expect(resultadoObtido).toBe(resultadoEsperado);
    })

test.each(massa.array.map(bloco => [
    bloco.base, 
    bloco.altura,
    bloco.esperadoTriangulo]))
    ('calcula area %f * %f do triangulo', (base, altura, resultadoEsperado) => {

       const resultadoObtido = calculadora.areaDoTriangulo(base, altura);
       
       expect(resultadoObtido).toBe(resultadoEsperado);
    })

    