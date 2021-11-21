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
 */

/**
 * create tempholder for ele shift from nums2
 * create index tracker for nums1 and start at 0
 * while (nums2.length)
 * check if tempholder is smaller than nums1[0]
 * use index tracker to check if tempholder fits between it and it+1
 * check if temp holder is larger then nums1.length
 * return nums1
 */

var merge = function (nums1, nums2) {
    let temp = nums2.shift();
    let idx = 0;
    // console.log('current temp is ', temp);
    // console.log('current idx is ', idx);

    while (temp !== undefined) {
        // console.log(nums2);
        // console.log(nums1);
        if (temp < nums1[0]) {
            nums1.unshift(temp);
            temp = nums2.shift();
            idx++;
        } else if (nums1[idx] <= temp && temp <= nums1[idx + 1]) {
            // console.log('hello');
            nums1.splice(idx + 1, 0, temp);
            temp = nums2.shift();
            idx++;
        } else if (temp > nums1[nums1.length - 1]) {
            nums1.push(temp);
            temp = nums2.shift();
            idx++;
        } else {
            idx++;
        }
    }

    return nums1;
};

// const nums1 = [1, 2, 3];
// const nums2 = [2, 5, 6];

const nums1 = [1, 1, 2, 3, 4, 5];
const nums2 = [1, 2, 3, 4];

console.log(merge(nums1, nums2));
