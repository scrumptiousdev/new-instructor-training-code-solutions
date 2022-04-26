/* exported reverseWords */
const reverseWords = string => string.split(' ').map(word => word.split('').reverse().join('')).join(' ');
