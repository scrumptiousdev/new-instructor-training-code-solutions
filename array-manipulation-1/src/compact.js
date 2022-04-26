/* exported compact */
const compact = array => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] && array[i] !== '') newArray.push(array[i]);
  }

  return newArray;
};
