// capitalizes the first letter of any string
function capitalizeFirst(string) {
  let rawFirstLetter = string.charAt(0);
  if (!rawFirstLetter.match(/[a-z]/i)) {
    throw new Error('First character must be a letter.');
  }
  let capitalizedFirstLetter = rawFirstLetter.toUpperCase();
  let capitalizedString = string.replace(rawFirstLetter, capitalizedFirstLetter);
  return capitalizedString;
}

module.exports = capitalizeFirst;
