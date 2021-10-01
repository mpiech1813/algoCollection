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
