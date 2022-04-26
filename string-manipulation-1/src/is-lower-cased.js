/* exported isLowerCased */
const isLowerCased = word => {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === word[i]) count++;
  }

  return count === word.length;
};
