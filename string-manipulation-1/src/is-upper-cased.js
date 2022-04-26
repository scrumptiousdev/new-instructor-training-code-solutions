/* exported isUpperCased */
const isUpperCased = word => {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) count++;
  }

  return count === word.length;
};
