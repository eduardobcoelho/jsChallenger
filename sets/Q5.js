// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result
const myFunction = (set, el) => new Set([...set].filter((item) => item !== el));
// author's solution
// set.delete(val)
// return set
