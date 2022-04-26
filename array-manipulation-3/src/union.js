/* exported union */
const union = (first, second) => {
  const dups = [...first];

  second.forEach(s => {
    if (!dups.includes(s)) dups.push(s);
  });

  return dups;
};
