/* exported lastChars */
const lastChars = (length, string) => {
  if (string.length <= length) return string;
  return string.slice(string.length - length);
};
