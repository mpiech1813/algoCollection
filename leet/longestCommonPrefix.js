/**
 * @param {string[]} strs
 * @return {string}
 */

/*
    R: 
    Write a function to find the longest common prefix string amongst an array of strings.
    If there is no common prefix, return an empty string "".

    E:
    Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"

    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

    A:
    let finalAnswer initially be ""
    go through the arr with .forEach
    change each string into an array (this will create an array with arrays)
    while loop (typeOf element !== undefined) or element.length>0
    go through all of the inner arrays[0] and check if all are the same
    - yes? .shift that element and add that letter to the final answer
    - no? end the loop
    return final answer


    -----------------------------------------------------------------------------
    we can create an array, using new Array(strs.length)
    we will then seed it with strs.forEach(e=> return e.slice(''))


*/
var longestCommonPrefix = function (strs) {
    let finalAnswer = '';
    let currentLetter = '';

    if (strs.length === 0) {
        return finalAnswer;
    } else {
        const letterArr = new Array(strs.length)
            .fill('filter')
            .map((ele, idx) => {
                return strs[idx].split('');
            });

        currentLetter = letterArr[0][0];

        while (typeof letterArr !== 'undefined') {
            const toggle = letterArr.every((ele) => ele[0] === currentLetter);
            if (toggle) {
                finalAnswer += currentLetter;
                currentLetter = letterArr[0][1];
                letterArr.forEach((ele) => ele.shift());
            } else {
                break;
            }
        }
    }
    return finalAnswer;
};

const strs = ['flower', 'flow', 'floght', 'flosh', 'floe'];

longestCommonPrefix(strs);
