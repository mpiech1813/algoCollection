/**
 * R: 
 * Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

E:
Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

A: 

1) split the string into an array
2) pop the last element off the array
3) check if it is a empty space
3 yes) discard and move to the next
3 no) use this string
4) try to use .lenght on this last element to see if the number of characters can be shown
5) if above not working, split the elemnet into an array
6) use .length to check the number of characters
 */

// C:
var lengthOfLastWord = function (s) {
    const wordArr = s.split(' ').filter((word) => word !== '');

    return wordArr.pop().split('').length;
    // const lastWord = wordArr.pop();
    // while (lastWord === '' && wordArr.length > 0) {
    //     lastWord = wordArr.pop();
    // }

    // return lastWord.split('').length;

    // console.log(wordArr.pop().split('').length);
};

const word1 = 'Hello World';
const word2 = '   fly me   to   the moon  ';
const word3 = 'luffy is still joyboy';
const word4 = '                     ';

lengthOfLastWord(word2);
