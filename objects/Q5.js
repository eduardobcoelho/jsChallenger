// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'
const myFunction = (objOne, objTwo) => {
  objTwo.city = objTwo.country;
  delete objTwo.country;
  return Object.assign(objOne, objTwo);
};
// Author's solution
// const { country, ...rest } = second;
// return { ...first, ...rest, city: country };
