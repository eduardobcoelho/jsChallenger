// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version
const myFunction = (elements, elementToRemove) =>
  elements.filter((item) => item !== elementToRemove);
