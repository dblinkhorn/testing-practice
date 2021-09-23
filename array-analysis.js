// takes an array of numbers and returns an object with
// average, smallest number, largest number, and array length

const array = [4, 15, 23, 2, 52, 30, 11];
let object = {};

function getAverage(array) {
  let total = 0;
  array.forEach(number => {
    total += number;
  })
  let average = Math.round(total / array.length);
  object['average'] = average;
}

function getMinimum(array) {
  array.reduce((previous, current) => {
    if (previous < current) {
      return object['min'] = previous;
    } else {
      return object['min'] = current;
    }
  })
}

function getMaximum(array) {
  array.reduce((previous, current) => {
    if (previous > current) {
      return object['max'] = previous;
    } else {
      return object['max'] = current;
    }
  })
}

function analyzeArray(array) {
  getAverage(array);
  getMinimum(array);
  getMaximum(array);
  object['length'] = array.length;
  return object;
}

analyzeArray(array);

module.exports = analyzeArray;