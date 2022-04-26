/* exported isAnagram */
const isAnagram = (firstString, secondString) => {
  const first = firstString.replaceAll(' ', '').split('');
  const second = secondString.replaceAll(' ', '').split('');

  if (first.length !== second.length) return false;

  second.forEach(s => {
    const index = first.indexOf(s);
    if (index > -1) first.splice(index, 1);
  });

  return !first.length;
};
