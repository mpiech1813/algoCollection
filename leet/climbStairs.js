/**
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * Example 1:
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 *  */

/**
 * Approach:
 *
 * just 1's => longest, will always get the result
 * just 2's => shortest, only works with evens
 *
 * will need the while loop
 *
 * launch only 2's if n is even
 * launch only 1's all the time
 *
 * 1 = 1
 * 2 = 2
 * 3 = 3
 * 4 = 5
 * 5 = 8
 *
 *
 * 1+1+1+1+1
 * 2+1+1+1
 * 1+2+1+1
 * 1+1+2+1
 * 1+1+1+2
 * 2+2+1
 * 2+1+2
 * 1+2+2
 *
 */

var climbStairs = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;

    let prev = 2;
    let prevPrev = 1;
    let cur;

    for (let i = 2; i < n; i++) {
        cur = prev + prevPrev;
        prevPrev = prev;
        prev = cur;
    }

    return cur;
};
