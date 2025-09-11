const calc = require('./Calculadora');
const { describe, test, expect } = require('@jest/globals');

describe('Testando a calculadora de notas', () => {
    test('1 + 3 = 4', () => {
        expect(calc.somar(1, 3)).toBe(4);
    });
});
