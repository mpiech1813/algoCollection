/**
 * Implement strStr().
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Clarification:
 *
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 *
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 */

/**
 * Example 1:
 *
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 * Example 2:
 *
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 *
 * Example 3:
 *
 * Input: haystack = "", needle = ""
 * Output: 0
 *
 */

/**
 * conver string to array
 * if no string is given, return 0
 * use the method of transversal similar to the problem with very long array
 * travel through the array once
 * start at 0
 * suwak => length of it will be decide by length of the needle
 * slice from n to needle.length
 * compare slice to needle
 * if the same return n
 * if not the same continue
 * if reached the end, return -1
 */

var strStr = function (haystack, needle) {
    // const letterArr = haystack.split('');
    // const sliceLength = needle.length;

    // if (needle.length === 0) return 0;

    // for (let n = 0; n <= letterArr.length - sliceLength; n++) {
    //     const slice = letterArr.slice(n, n + sliceLength).join('');
    //     if (slice === needle) return n;
    // }

    // return -1;
    return haystack.indexOf(needle);
};

const haystack = '';
const needle = 'a';

console.log(strStr(haystack, needle));

/**
 * worked but very slowly
 * Runtime: 4880 ms, faster than 7.10% of JavaScript online submissions for Implement strStr().
 * Memory Usage: 45 MB, less than 5.49% of JavaScript online submissions for Implement strStr().
 */

/**--------------solution 2---------------- */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};
