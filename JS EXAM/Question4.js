//Write a code to Remove the spaces found in a string
const stringWithSpaces = "Hello, World! This is a string with spaces.";
const stringWithoutSpaces = stringWithSpaces.replace(/\s/g, '');

console.log(stringWithoutSpaces);
