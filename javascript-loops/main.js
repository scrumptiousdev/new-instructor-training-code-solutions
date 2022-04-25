/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

const getNumbersToTen = () => {
  const numbers = [];
  let currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }

  return numbers;
};

const getEvenNumbersToTwenty = () => {
  const evenNumbers = [];
  let currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }

  return evenNumbers;
};

const repeatWord = (word, times) => {
  let count = 1;
  let repeated = '';

  while (count <= times) {
    repeated += word;
    count++;
  }

  return repeated;
};

const logEachCharacter = string => {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
};

const doubleAll = numbers => {
  const doubled = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }

  return doubled;
};

const getKeys = object => {
  const keys = [];

  for (const key in object) {
    keys.push(key);
  }

  return keys;
};

const getValues = object => {
  const values = [];

  for (const key in object) {
    values.push(object[key]);
  }

  return values;
};
