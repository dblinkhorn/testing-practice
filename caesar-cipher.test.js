const caesarCipher = require('./caesar-cipher');

// tests the encipher
test('test proper return value given a sample string', () => {
  expect(caesarCipher('attack from the north at dawn')).toBe('fyyfhp kwtr ymj stwym fy ifbs');
});

// tests the decipher