/* exported filterOutStrings */
const filterOutStrings = values => {
  const filtered = [];

  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') filtered.push(values[i]);
  }

  return filtered;
};
