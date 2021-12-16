// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set
const myFunction = (set, arr) => new Set([...set, ...arr]);
// author's solution
// arr.forEach((e) => set.add(e));
// return set
