// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object
const myFunction = (obj) => {
  const newObj = { ...obj };
  for (const key in newObj) {
    if (newObj[key].trim() === "") newObj[key] = null;
  }
  return newObj;
};
