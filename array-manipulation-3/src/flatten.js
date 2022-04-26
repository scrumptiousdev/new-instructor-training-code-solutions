/* exported flatten */
const flatten = array => {
  const newArray = [];

  array.forEach(arr => {
    Array.isArray(arr) ? arr.forEach(a => newArray.push(a)) : newArray.push(arr);
  });

  return newArray;
};
