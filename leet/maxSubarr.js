/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * A subarray is a contiguous part of an array.
 */

/**
 * Example 1:
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Example 2:
 *
 * Input: nums = [1]
 * Output: 1
 *
 * Example 3:
 *
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 *
 */

/**
 * Approach:
 *
 * If arr.length === 1 return [0]
 * Let highestX
 * Let highestZ
 * Let highestSum
 * Use object for highest records
 * let tempArr = from X to Z using .slice()
 * Total using tempArr.reduce()
 * Compare with the sum, if larger record highestX and highestZ, else ignore
 * Return highest sum
 *
 * Probably will need 2 for loops
 */

//  if (nums.length === 1) console.log(nums[0]);

//  let highestSum = nums.slice(0, 1).reduce((a, b) => a + b);

//  for (let i = 0; i <= nums.length; i++) {
//      for (let j = i + 1; j <= nums.length; j++) {
//          const tempArr = nums.slice(i, j);

//          const tempSum = tempArr.reduce((tot, ele) => tot + ele);

//          if (tempSum > highestSum) highestSum = tempSum;
//      }
//  }

//  console.log(highestSum);

var maxSubArray = function (nums) {
    let highestSum = nums[0];

    let firstNum = nums.shift();
    while (nums.lenght) {
        let total = firstNum;
        nums.forEach((ele) => {
            total += ele;
            if (total > highestSum) {
                highestSum = total;
            }
        });
        firstNum.shift();
    }

    console.log(highestSum);
};

const nums = [5, 4, -1, 7, 8];
const nums2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums3 = [1];
const nums4 = [-2, -1];

maxSubArray(nums2);
