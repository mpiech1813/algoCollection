/**
 * R: 
 * Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

    For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Constraints:

    1 <= s.length, goal.length <= 2 * 104
    s and goal consist of lowercase letters.
 * -----------------------------------------------------------------
 * E:
 * Example 1:

Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

Example 2:

Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

Example 3:

Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

Example 4:

Input: s = "aaaaaaabc", goal = "aaaaaaacb"
Output: true
 * -----------------------------------------------------------------
 * A:
 * 2 loops approach: (going to have a bad Big O)
 *  convert string to array
 *  for loop i loops through entire string from 0
 *  for loop j loops through entire string from n+1
 *  create a new array and flip letters from positions i <> j
 *  **convert to string and then compare
 *  **compare new array to the goal array (using filter)
 *  return either true or false
 * -----------------------------------------------------------------

 * C: 
 * -----------------------------------------------------------------
 * T: 
 * -----------------------------------------------------------------
 * O: 
 * -----------------------------------------------------------------
 */

// const buddyStrings = function (s, goal) {
//     const sArr = s.split('');
//     const goalArr = goal.split('');

//     if (sArr.length !== goalArr.length) {
//         return false;
//     } else if (){}

//     for (let i = 0; i < sArr.length - 1; i++) {
//         for (let j = i + 1; j < sArr.length; j++) {
//             let iLetter = sArr[i];
//             let jLetter = sArr[j];
//             let tempArr = sArr;
//             // console.log(`I Letter is ${iLetter}`);
//             // console.log(`J Letter is ${jLetter}`);
//             tempArr[i] = jLetter;
//             tempArr[j] = iLetter;

//             console.log(tempArr);
//         }
//     }
// };

var buddyStrings = function (s, goal) {
    let diffIndices = [];
    if (s.length !== goal.length) {
        return false;
    } else if (s === goal) {
        let seen = [];
        let find;
        for (let i = 0; i < s.length; i++) {
            if (seen.findIndex((element) => element === s[i]) !== -1) {
                find = true;
            }
            seen.push(s[i]);
        }
        if (find) {
            return true;
        } else {
            return false;
        }
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== goal[i]) {
                diffIndices.push(i);
            }
            if (diffIndices.length > 2) {
                return false;
            }
        }
        if (diffIndices.length !== 2) {
            return false;
        } else {
            if (
                s[diffIndices[0]] === goal[diffIndices[1]] &&
                s[diffIndices[1]] === goal[diffIndices[0]]
            ) {
                return true;
            } else {
                return false;
            }
        }
    }
};

buddyStrings('abcdef', 'bacdef');
