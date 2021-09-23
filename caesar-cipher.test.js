const caesarCipher = require('./caesar-cipher');

// tests the encipher
test('test proper return value given a sample string', () => {
  expect(caesarCipher('attack from the north at dawn')).toBe('fyyfhp kwtr ymj stwym fy ifbs');
});

// tests that it works with punctuation
test('should work with punctuation', () => {
  expect(caesarCipher('gather 500 men, send them south now!')).toBe('lfymjw 500 rjs, xjsi ymjr xtzym stb!');
});

// tests that it keeps same casing
// test('should preserve letter casing', () => {
//   expect(caesarCipher('Attack Rome at dusk!')).toBe('lfymjw 500 rjs, xjsi ymjr xtzym stb!');
// });