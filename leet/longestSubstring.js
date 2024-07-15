/* R: Given string s, find the longest substring without repeating characters
 E: 
s = 'abc'  answer= 3: abc
s = 'abcabcabc answer = 3: abc 
s = 'bbbbbb' answer = 1: b 
s = 'kwwkeys' answer = 4: keys 
 A:
 - break the string into characters
 - create a variable for final answer string
 - while loop (keep going until string array empty or final answer is longer than current string array): pop the first character off the array, create index array, if not present add && add to current answer | if yes, compare current answer vs final, pcik longer 
 - display the answer
 C: 
*/

const longestSubstring = (s) => {
  let finalAnswer = "";

  const characterArray = s.split("");

  while (characterArray.length > 0) {
    let currentLetter = characterArray.shift();
    const index = [];
    index.push(currentLetter);
    let breaker = false;
    let x = 0;

    while (!breaker && characterArray.length > x) {
      const character = characterArray[x];
      if (index.includes(character)) {
        breaker = true;
      } else {
        index.push(character);
        currentLetter += character;
        x++;
      }
    }

    if (currentLetter.length > finalAnswer.length) {
      finalAnswer = currentLetter;
    }
  }

  console.log(
    "Final string: ",
    finalAnswer,
    " and length: ",
    finalAnswer.length
  );
};

const firstString = "asdfhgjlqoeiruab";
const firstSecond = "abcabc";
const firstThird = "bbbbb";
const firstFourth = "aongbgouerbekolmnbvcxzaqwertyuikjhgfds";
const laststring = "kwwkeys";
const exampleOne = "abcabcbb";

longestSubstring(exampleOne);
