/* exported titleCase */
const specialCases = { javascript: 'JavaScript', api: 'API' };
const minors = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

const titleCase = string => {
  let isSubtitle = false;
  const title = [];

  string.split(' ').forEach((word, i) => {
    const lowered = word.toLowerCase();
    const capitalized = `${lowered[0].toUpperCase()}${lowered.slice(1)}`;
    const titleCheck = lowered.split(':');
    const checkForTitle = titleCheck.length > 1;

    if (typeof specialCases[titleCheck[0]] !== 'undefined') {
      title.push(`${specialCases[titleCheck[0]]}${checkForTitle ? ':' : ''}`);
    } else if (lowered.length > 3 || isSubtitle) {
      const checkHyphen = capitalized.split('-');

      title.push(checkHyphen.length > 1 ? `${checkHyphen[0]}-${checkHyphen[1][0].toUpperCase()}${checkHyphen[1].slice(1)}` : capitalized);
      isSubtitle = false;
    } else {
      title.push(minors.includes(lowered) && i > 0 ? lowered : capitalized);
    }

    if (checkForTitle) isSubtitle = true;
  });

  return title.join(' ');
};
