// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum
const myFunction = (elements, num) =>
  elements.filter((el) => el > num).reduce((acc, cur) => acc + cur, 0);
