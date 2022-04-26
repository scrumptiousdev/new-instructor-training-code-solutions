/* exported includes */
const includes = (array, value) => {
  let found = false;
  let count = 0;

  while (count < array.length) {
    if (array[count] === value) {
      found = true;
      break;
    }
    count++;
  }

  return found;
};
