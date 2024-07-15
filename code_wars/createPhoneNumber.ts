// R: create a fuction that takes an array of number and returns it in the phone number format : (xxx) xxx-xxxx
// E: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// A: check that there are no more or no less than 10 digits, check if all digits are numbers, create a template and return as string
// C:
function createPhoneNumber(number) {
  const error = number.find((ele) => typeof ele !== "number");
  if (error !== undefined || number.length !== 10) throw "Check the numbers";

  const numbers = number.join("");
  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(-4)}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// console.log(createPhoneNumber([1, 2, 3, 4, 5, "A", 7, 8, 9, 0]));
