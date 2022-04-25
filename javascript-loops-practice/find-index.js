/* exported findIndex */
const findIndex = (array, value) => {
  let index = -1;
  let count = 0;

  while (count < array.length) {
    if (array[count] === value) {
      index = count;
      break;
    }
    count++;
  }

  return index;
};
