// takes a string and returns the reverse
function reverseString(string) {
  let arrayFromString = Array.from(string);
  // reverses, converts to string, and replaces commas in resulting string
  let reversedString = arrayFromString.reverse().toString().replace(/,/g,"");
  return reversedString;
}

module.exports = reverseString;
