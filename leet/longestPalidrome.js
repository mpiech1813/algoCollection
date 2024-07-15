/**
 * R: Given a string return the longest palidrome: word which reads the same from back to front
 * E: asdbdbiojwp, radar, kayak, bb, wojeejsdjobsofbgoweb
 * A:
 * - wrong
 *
 * C:
 */

var longestPalindrome = function (s) {
  let finalAnswer = "";
  const stringArray = s.split("");
  let start = null;
  let end = null;
  let x = 0;
  let y = stringArray.length - 1;

  for (let i = 0; i < y; i++) {
    console.log("i is: ", stringArray[i]);
    for (let p = stringArray.length - 1; p > i; p--) {
      console.log("p is: ", stringArray[p]);
      if (stringArray[i] === stringArray[p]) {
        if (start === null) start = x;
        if (end === null) end = y;
        while (y > x) {
          console.log("i got here", start, end);
          if (y === x + 1 || y === x + 2) {
            break;
          }
          if (stringArray[x] === stringArray[y]) {
            x++;
            y--;
          } else {
            start = null;
            end = null;
          }
        }
        if (start !== null && end !== null) {
          const candidate = s.slice(start, end + 1);

          if (finalAnswer.length < candidate.length) {
            finalAnswer = candidate;
          }
        }
      }
    }
  }

  console.log("final answer: ", finalAnswer);
};

const first = "asdbdbiojwp";
const second = "radar";
const third = "kayak";
const fourth = "wojeejsdjobsofbgoweb";
const fifth = "bbbb";

longestPalindrome(fourth);
