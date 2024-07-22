// R: create a function which checks if a string is a pangram
// E: str = 'The quick brown fox jumps over the lazy dog' => true || str = 'Hello world' => false
// A: check if str is a string,change all letters to uppercase , break str into array of characters, remove all spaces, punctuations and digits, create an array that will hold a list of letters encountered ENC, go throu str array and if
// ENC does not contain a letter add, if it does skip it, check the length of ENC, if 51 return true
// C:

const isPangram = (str) => {
  if (typeof str !== "string") throw "use only strings";
};

isPangram("The quick brown fox jumps over the lazy dog");
isPangram("hello world");
isPangram(13546798);
