// Write a function that takes two sets, say setA and setB, as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in setA as well as setB
const myFunction = (setA, setB) =>
  new Set([...setA].filter((item) => [...setB].includes(item)));
// author's solution
// const int = new Set();
// setA.forEach((el) => setB.has(el) && int.add(el));
// return int;
