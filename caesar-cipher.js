// encrypts a string using the caesar cipher

const originalMessage = 'attack from the north at dawn';
const originalArray = Array.from(originalMessage);
const key = 1;
let numberMessage =[];
let cipherNumberMessage = [];


const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// array to store number values for each letter in alphabet
const alphabetIndex = [];
// populates alphabetIndex with number values
for (let i = 1; i <= alphabet.length; i++) {
  alphabetIndex.push(i);
}
// object will store each letter as a property and its corresponding
// numberical equivalent as the value
const alphabetObject = {};

// populates alphabetObject with the letter/number property/value pairs
alphabet.forEach((letter, index) => {
  alphabetObject[letter] = index;
})


// converts original message array to numbered values
function convertToNumbers(originalMessageArray) {
  originalMessageArray.forEach(character => {
    if (character in alphabetObject) {
      numberMessage.push(alphabetObject[character]);
    }
  })
}

convertToNumbers(originalArray);

console.log(numberMessage);

// applies key to numbered message to get new values
function applyCipher(numberMessage) {
  numberMessage.forEach(number => {
    if (number > (25 - key)) {
      let total = number + key;
      let newNumber = 0 + (total - 1);
      cipherNumberMessage.push(newNumber);
    }
    cipherNumberMessage.push(number + key)
  })
}

applyCipher(numberMessage);

console.log(cipherNumberMessage);

module.exports = caesarCipher;