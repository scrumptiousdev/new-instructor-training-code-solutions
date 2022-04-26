/* exported capitalizeWords */
const capitalizeWords = string => {
  const newString = [];
  const splitted = string.split(' ');

  for (let i = 0; i < splitted.length; i++) {
    newString.push(`${splitted[i][0].toUpperCase()}${splitted[i].slice(1).toLowerCase()}`);
  }

  return newString.join(' ');
};
