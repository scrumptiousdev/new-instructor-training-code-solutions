/* exported swapChars */
const swapChars = (firstIndex, secondIndex, string) => {
  const splitted = string.split('');
  const first = string[firstIndex];
  const second = string[secondIndex];

  splitted[firstIndex] = second;
  splitted[secondIndex] = first;

  return splitted.join('');
};
