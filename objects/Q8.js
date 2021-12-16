// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
const myFunction = (obj) => {
  return {
    fn: obj.fn,
    ln: obj.fn,
    ...(obj.size && { size: `${obj.size}kg` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
};
