/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 */

/**
 *Example 1:
 
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0

Example 5:

Input: nums = [1], target = 0
Output: 0

 */

/**
 * Approach:
 * 1) check the array for the target using . findIndex()
 * Yes) return the index
 * No):
 * - take 2 numbers next each other
 * - check if 1>target. If yes, return index 0
 * - check if 1<target<2
 * - Yes: return index of 2
 * - No: check
 *
 */
