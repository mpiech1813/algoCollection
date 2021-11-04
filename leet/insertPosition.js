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
 * Approach 1 (low mem):
 * 1) check the array for the target using . findIndex()
 * Yes) return the index
 * No):
 * - take 2 numbers next each other
 * compare if X<Y ==> if false return index X - 1
 * when reaches the end return arr.length
 *
 * Approach 2 (low time):
 * 1) copy the arr
 * 2) check the array for the target using . findIndex()
 * If not found:
 * keep track of the X and Z index numbers
 * grab the first and last elements from arr
 * compare if X<Y ==> if false return index X - 1
 * compare if Z>Y ==> if false return index Z + 1
 * if true, memorize current X<Y<Z
 * if false get X and X+1
 * compare if X<Y ==> if false return index X - 1
 * compare if Z>Y ==> if false return index Z + 1
 * if false get
 */

// First Method (low mem)
// What if aray has only 1 element
var searchInsert = function (nums, target) {
    let idxNum = nums.findIndex((ele) => ele === target);
    if (idxNum >= 0) {
        return idxNum;
    } else if (nums[0] > target) {
        return 0;
    } else if (nums[nums.length - 1] < target) {
        return nums.length;
    } else {
        for (let i = 0; i < nums.length; i++) {
            const numX = nums[i];
            const numZ = nums[i + 1];

            if (numX < target && numZ > target) {
                return i + 1;
            }
        }
    }
};

const nums = [1];

searchInsert(nums, 1);

/**
 * Runtime: 76 ms, faster than 63.31% of JavaScript online submissions for Search Insert Position.
 * Memory Usage: 40 MB, less than 22.00% of JavaScript online submissions for Search Insert Position.
 */
