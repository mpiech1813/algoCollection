/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
 * where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

/**
 * Example 1:
 *
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 *
 * Example 2:
 *
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * Explanation: The arrays we are merging are [1] and [].
 * The result of the merge is [1].
 *
 * Example 3:
 *
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 * Explanation: The arrays we are merging are [] and [1].
 * The result of the merge is [1].
 * Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 *
 * Example 4:
 *
 * Input: nums1 = [1, 1, 2, 3, 4, 5], m = 6, nums2 = [1, 2, 3, 4], n = 4
 *
 * Example 5 :
 *
 * What if nums2 is larger
 */

/**
 * start at nums1[nums1.length -1] move n spaces towards the front, remove trailing 0s
 * create tempholder for ele shift from nums2
 * create index tracker for nums1 and start at 0
 * while (nums2.length)
 * check if tempholder is smaller than nums1[0]
 * use index tracker to check if tempholder fits between it and it+1
 * check if temp holder is larger then nums1.length
 * return nums1
 */

var merge = function (nums1, m, nums2, n) {
    let temp = nums2.shift();
    let idx = nums1.length - 1;

    nums1.splice(m - n, n);
    idx = 0;

    if (nums1[0] === undefined) {
        nums1.push(temp);
        temp = nums2.shift();
    }

    while (temp !== undefined && nums1[idx] !== undefined) {
        if (temp < nums1[idx]) {
            nums1.splice(idx, 0, temp);
            temp = nums2.shift();
        } else if (nums1[idx] <= temp && temp <= nums1[idx + 1]) {
            nums1.splice(idx + 1, 0, temp);
            temp = nums2.shift();
        } else if (temp > nums1[idx] && nums1[idx + 1] === undefined) {
            nums1.splice(idx + 1, 0, temp);
            temp = nums2.shift();
            idx++;
        } else {
            idx++;
        }
    }

    return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];

// const nums1 = [1, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0];
// const nums2 = [1, 2, 3, 4, 6];

// const nums1 = [0];
// const nums2 = [1];

// const nums1 = [4, 5, 6, 0, 0, 0];
// const nums2 = [1, 2, 3];

// const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
// const nums2 = [1, 2, 2];

const m = nums1.length;
const n = nums2.length;

console.log(merge(nums1, m, nums2, n));
