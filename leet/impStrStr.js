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
