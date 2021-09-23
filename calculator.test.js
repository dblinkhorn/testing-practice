const calculator = require('./calculator');

// tests that addition works
test('adds 1 and 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

// tests that subtraction works
test('subtracts 1 from 2 to equal 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

// tests that multiplication works
test('multiplies 2 by 3 to equal 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

// tests that division works
test('divides 6 by 2 to equal 3', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});
