/* exported zip */
const zip = (first, second) => {
  let i = 0;
  const zipped = [];
  const max = first.length > second.length ? second.length : first.length;

  while (i < max) {
    zipped.push([first[i], second[i]]);
    i++;
  }

  return zipped;
};
