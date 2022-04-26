/* exported isPalindromic */
const isPalindromic = string => {
  const splitted = string.replace(' ', '').split('');

  return splitted.join('') === splitted.reverse().join('');
};
