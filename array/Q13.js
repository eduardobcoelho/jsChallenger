// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
const myFunction = (elements, n) =>
  n >= 6 ? [n, ...elements] : [0, ...elements];
// author's solution
// [...(num > 5 ? [num] : [0]), ...array];
