// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
const myFunction = (...params) => params.reduce((acc, cur) => [...acc, ...cur]);
// author's solution
// return params.flat()