/* exported includesSeven */
const includesSeven = array => {
  let found = false;
  let count = 0;

  while (count < array.length) {
    if (array[count] === 7) {
      found = true;
      break;
    }
    count++;
  }

  return found;
};
