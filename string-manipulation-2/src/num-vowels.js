/* exported numVowels */
const numVowels = string => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (['a', 'i', 'o', 'u', 'e'].includes(string[i].toLowerCase())) count++;
  }

  return count;
};
