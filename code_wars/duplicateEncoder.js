// R: create a function that takes a string and return '(' if the character is unique and ')' if the
// character appears more than once.
// Ignore capitalization
// E:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// A: convert the string into all lower case
// create an object that will have a character and key and number of times it appears as value
// convert a string into an array and itterate over the characters.
// during the itteration, try to see if that character is in the object? yes => increase count,
// no=> create new one with count of 1
// create a new array and itterate through characters array with map. Compare each character with the object and
// return '(' or ')' accordingly
// convert the final array into string and return
// C:

function duplicateEncode(word) {
  const characterCount = {};
  const characterArray = Array.from(word.toLowerCase());
  characterArray.forEach((char) => {
    if (!characterCount[char]) {
      characterCount[char] = 1;
    } else {
      characterCount[char] = ++characterCount[char];
    }
  });

  const finalArray = characterArray
    .map((char) => {
      if (characterCount[char] === 1) return "(";

      return ")";
    })
    .join("");

  return finalArray;
}

console.log("din", duplicateEncode("din"));
console.log("recede", duplicateEncode("recede"));
console.log("Success", duplicateEncode("Success"));
console.log("(( @", duplicateEncode("(( @"));
console.log("hElLo w()orld", duplicateEncode("hElLo w()orld"));
