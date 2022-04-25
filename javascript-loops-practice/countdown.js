/* exported countdown */
const countdown = number => {
  const numbers = [];

  while (number >= 0) {
    numbers.push(number);
    number--;
  }

  return numbers;
};
