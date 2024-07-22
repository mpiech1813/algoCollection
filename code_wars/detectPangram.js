// R: create a function which checks if a string is a pangram
// E: str = 'The quick brown fox jumps over the lazy dog' => true || str = 'Hello world' => false
// A: check if str is a string,change all letters to uppercase , break str into array of characters, remove all spaces, punctuations and digits, create an array that will hold a list of letters encountered ENC, go throu str array and if
// ENC does not contain a letter add, if it does skip it, check the length of ENC, if 51 return true
// C:

const isPangram = (str) => {
  if (typeof str !== "string") throw "use only strings";
  str.toUpperCase();

  const alphabit = [];
  const strArr = str.toUpperCase().split("").sort();

  const indexOfA = strArr.findIndex((ele) => ele === "A");
  const indexOfZ = strArr.findIndex((ele) => ele === "Z");

  if (indexOfA === -1 || indexOfZ === -1) return false;

  const sterileStrArr = strArr.slice(indexOfA, indexOfZ + 1);
  sterileStrArr.forEach((letter) => {
    if (!alphabit.includes(letter)) alphabit.push(letter);
  });

  if (alphabit.length === 26) {
    return true;
  } else {
    return false;
  }
};

// console.log(
//   isPangram("The111 'quick brown fox, jump[s over the -lazy ;dog./?")
// );
console.log(isPangram("hello world"));
// console.log(isPangram(13546798));
