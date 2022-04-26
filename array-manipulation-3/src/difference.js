/* exported difference */
const difference = (first, second) => {
  const diff = [];
  const secondSet = [...second];

  first.forEach(f => {
    secondSet.includes(f) ? secondSet.splice(second.indexOf(f), 1) : diff.push(f);
  });

  return diff.concat(secondSet);
};
