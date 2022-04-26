/* exported capitalizeWord */
const capitalizeWord = word => {
  const lowered = word.toLowerCase();

  if (lowered === 'javascript') return 'JavaScript';

  return lowered[0].toUpperCase() + lowered.slice(1);
};
