// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
const myFunction = (obj) => {
  const reversedObj = new Object();
  for (const key in obj) reversedObj[obj[key]] = key;
  return reversedObj;
};
// Author's solution
// Object.keys(obj).reduce((acc, cur) => {
//   return { ...acc, [obj[cur]]: cur };
// }, {});
