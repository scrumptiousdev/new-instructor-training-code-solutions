/* exported equal */
const equal = (first, second) => {
  let isEqual = true;
  let i = second.length;

  if (first.length !== second.length) return !isEqual;

  while (i > -1) {
    if (first[i] !== second[i]) {
      isEqual = false;
      break;
    }
    i--;
  }

  return isEqual;
};
