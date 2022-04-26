/* exported pick */
const pick = (source, keys) => {
  const picked = {};

  keys.forEach(key => {
    if (typeof source[key] !== 'undefined') picked[key] = source[key];
  });

  return picked;
};
