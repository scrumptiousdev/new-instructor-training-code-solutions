/* exported unique */
const unique = array => {
  const newArray = new Set();

  array.forEach(a => newArray.add(a));

  return [...newArray];
};
