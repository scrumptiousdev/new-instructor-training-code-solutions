/* exported filterOutNulls */
const filterOutNulls = values => {
  const nonNulls = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i]) nonNulls.push(values[i]);
  }

  return nonNulls;
};
