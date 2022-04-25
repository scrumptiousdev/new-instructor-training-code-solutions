/* exported oddOrEven */
const oddOrEven = numbers => {
  const res = [];

  for (let i = 0; i < numbers.length; i++) {
    res.push(numbers[i] % 2 ? 'odd' : 'even');
  }

  return res;
};
