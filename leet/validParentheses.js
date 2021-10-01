/**
 * @param {string} s
 * @return {boolean}
 */

/*
R: 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

E:
Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([)]"
Output: false

Example 5:

Input: s = "{[]}"
Output: true

A:
1) Create an object with pairs Key:( Value:)
1.5) Change s from string to array
1.6) If new arr if odd, return false
2) First just check if s contains both ( and )
2.1) recursive:
2.2) check if the letter is an opening
no?) throw an error
yes?) check if the next one is a closing (any)
    no?) return false
    yes?) is it the correct closing?
        yes?) return true
        no?) return false
3) Check if there are all of the inside closing before outside: ([)] => false
4) profit

C:
*/

var isValid = function (s) {
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    const strArr = s.split('');

    const recursiveFunction = (ele) => {
        const firstLetter = ele;
        const indexOfNext = strArr.indexOf(ele) + 1;
        const nextLetter = strArr[indexOfNext];
        const thirdLetter = strArr[indexOfNext + 1];

        console.log(`first letter: ${firstLetter}`);
        console.log(`second letter: ${nextLetter}`);

        // is the first letter an opening?

        if (pairs[firstLetter] === nextLetter) {
            if (typeof thirdLetter === 'undefined') {
                return true;
            } else {
                if (recursiveFunction(thirdLetter)) {
                    return true;
                }
            }
        } else {
            if (typeof pairs[firstLetter] !== 'undefined') {
                recursiveFunction(nextLetter);
            } else {
                return false;
            }
        }

        if (typeof pairs[firstLetter] === 'undefined') return false;
        if (pairs[firstLetter] === nextLetter) {
            //check if there is a next one and if its an opening
            if (typeof thirdLetter === 'undefined') {
                return true;
            } else {
                recursiveFunction(thirdLetter);
            }
        } else {
            // if the next letter an opening
            if (typeof pairs[firstLetter] === undefined) {
                return false;
            } else {
                console.log('this got triggered');
                recursiveFunction(nextLetter);
            }
        }
    };

    if (strArr.length % 2 !== 0) {
        return false;
    } else {
        recursiveFunction(strArr[0]);
    }
};

const stringKol = '{[]()}';

console.log(isValid(stringKol));
