// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max
const myFunction = (start, end) => {
  const range = [];
  for (let i = start; i <= end; i++) range.push(i);
  return range;
};
