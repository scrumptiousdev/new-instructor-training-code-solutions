/* exported takeRight */
const takeRight = (array, count) => {
  if (array.length - count < 0) return array;
  return array.slice(array.length - count);
};
