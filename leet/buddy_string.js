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

const buddyStrings = function (s, goal) {};

buddyStrings('ab', 'ba');
