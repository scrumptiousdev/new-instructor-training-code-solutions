/* exported addSuffixToAll */
const addSuffixToAll = (words, suffix) => {
  const added = [];

  for (let i = 0; i < words.length; i++) {
    added.push(words[i] + suffix);
  }

  return added;
};
