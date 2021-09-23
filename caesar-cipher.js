// encrypts a string using the caesar cipher

const originalMessage = 'attack from the north at dawn';
// const originalArray = Array.from(originalMessage);
const key = 5;
// let cipherNumberMessage = [];
// let cipherArray = [];


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

function convertToArray(message) {
  message = message.toLowerCase();
  let messageArray = Array.from(message);
  return messageArray;
}

// converts original message array to numbered values
function convertToNumbers(messageArray) {
  let numberMessage = [];
  messageArray.forEach(character => {
    if (character in alphabetObject) {
      numberMessage.push(alphabetObject[character]);
    } else {
      numberMessage.push(character);
    }
  })
  return numberMessage;
}

// applies key to numbered message to get new values
function applyKey(numberMessage) {
  let cipherNumberMessage = [];
  numberMessage.forEach(element => {
    if (!Number.isInteger(element)) {
      cipherNumberMessage.push(element);
    } else if (element > (25 - key)) {
      let total = (element + key) - 25;
      let newNumber = 0 + (total - 1);
      cipherNumberMessage.push(newNumber);
    } else {
      cipherNumberMessage.push(element + key)
    }
  })
  return cipherNumberMessage;
}

// converts the array of enciphered numbers back their corresponding letters
function convertToLetters(cipherNumberMessage) {
  let cipherArray = [];
  cipherNumberMessage.forEach(element => {
    if (!Number.isInteger(element)) {
      cipherArray.push(element);
    } else {
      cipherArray.push(Object.keys(alphabetObject).find(key => alphabetObject[key] === element));
    }
  })
  let cipherMessage = cipherArray.join('');
  return cipherMessage;
}

function caesarCipher(message) {
  let messageArray = convertToArray(message);
  let numberMessage = convertToNumbers(messageArray);
  let cipherNumberMessage = applyKey(numberMessage);
  return convertToLetters(cipherNumberMessage);
}

caesarCipher(originalMessage);

module.exports = caesarCipher;