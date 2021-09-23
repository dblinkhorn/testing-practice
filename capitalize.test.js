const capitalizeFirst = require('./capitalize');

// tests a short string
test('capitalizes first letter of "hello world"', () => {
  expect(capitalizeFirst('hello world')).toBe('Hello world');
});

// tests a long string
test('capitalizes first letter of "this is an unnecessarily long string"', () => {
  expect(capitalizeFirst('this is an unnecessarily long string'))
    .toBe('This is an unnecessarily long string');
});

// tests a string with no spaces
test('capitalizes first letter of "nospaces"', () => {
  expect(capitalizeFirst('nospaces')).toBe('Nospaces');
});

// test a string with an invalid first character
test('throws error if first character is not a letter', () => {
  expect(() => capitalizeFirst('0 is not a letter')).toThrow('First character must be a letter.');
});
