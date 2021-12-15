// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
const myFunction = (elements) => elements.every((val) => val === elements[0]);
// Author's solution
// return new Set(input).size === 1
