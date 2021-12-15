// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all
const myFunction = (elements, n) => {
  let index = n;
  const arr = [];
  while (index > 0) {
    if (elements[elements.length - index])
      arr.push(elements[elements.length - index]);
    index--;
  }
  return arr;
};
// author's solution
// return elements.slice(-n);
