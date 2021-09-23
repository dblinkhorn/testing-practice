const analyzeArray = require('./array-analysis');

// tests that returned object has correct keys/values based on array
test('object should have correct keys/values based on array', () => {
  expect(analyzeArray([4, 15, 23, 2, 52, 30, 11])).toEqual({
    average: 20,
    min: 2,
    max: 52,
    length: 7
  });
});