// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
const myFunction = (elements) =>
  elements.reduce((acc, cur) => acc + cur, 0) / elements.length;
