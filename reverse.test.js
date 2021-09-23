const reverseString = require('./reverse');

// tests a string with no spaces
test('returns reversed string with no spaces', () => {
  expect(reverseString('nospaces')).toBe('secapson');
});

// test a string with spaces
test('returns reversed string with spaces', () => {
  expect(reverseString('a string with spaces')).toBe('secaps htiw gnirts a');
});
