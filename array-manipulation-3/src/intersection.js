/* exported intersection */
const intersection = (first, second) => {
  const intersected = [];

  first.forEach(f => {
    if (second.includes(f)) intersected.push(f);
  });

  return intersected;
};
