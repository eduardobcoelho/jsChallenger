// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array
const myFunction = (arr, continent) =>
  arr.map((item) => ({ ...item, continent: continent }));
