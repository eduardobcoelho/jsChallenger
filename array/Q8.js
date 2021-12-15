// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
const myFunction = (arrayOne, arrayTwo) =>
  [...new Set([...arrayOne, ...arrayTwo])].sort((a, b) => a - b);
