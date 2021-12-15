// Write a function that takes an array of strings as argument
// It should return the longest string
const myFunction = (elements) =>
  elements.reduce((acc, cur) => (cur.length >= acc.length ? cur : acc));