/* exported ransomCase */
const ransomCase = string => {
  let newWord = '';

  for (let i = 0; i < string.length; i++) {
    newWord += i % 2 === 0 ? string[i].toLowerCase() : string[i].toUpperCase();
  }

  return newWord;
};
