/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of digits.
 */

/**
 * Example 1:
 *
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4].
 *
 * Example 2:
 *
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * Incrementing by one gives 4321 + 1 = 4322.
 * Thus, the result should be [4,3,2,2].
 *
 * Example 3:
 *
 * Input: digits = [0]
 * Output: [1]
 * Explanation: The array represents the integer 0.
 * Incrementing by one gives 0 + 1 = 1.
 * Thus, the result should be [1].
 *
 * Example 4:
 *
 * Input: digits = [9]
 * Output: [1,0]
 * Explanation: The array represents the integer 9.
 * Incrementing by one gives 9 + 1 = 10.
 * Thus, the result should be [1,0].
 *
 */

/**
 * convert arr to number
 * add 1
 * convert to string
 * convert string back to arr
 */

// const arr = [1, 2, 3];

// const num = parseInt(arr.join(''));

// const arr2 = num;

// console.log(typeof String(num));

// var myInt = 235345;

// // Getting the string as a parameter
// // and typecasting it into an integer
// let myFunc = num => Number(num);

// var intArr = Array.from(String(myInt), myFunc);

// var plusOne = function (digits) {
//     let n = digits.length - 1;
//     let currNum = digits[n] + 1;

//     while (currNum >= 10) {
//         console.log('current number: ', digits[n]);
//         digits[n] = currNum - 10;
//         n--;
//         currNum = digits[n] + 1;
//     }
//     if (n < 0) {
//         // digits[n] = currNum - 10;
//         digits.unshift(1);
//         currNum = 0;
//     } else {
//         digits[n] = currNum;
//     }
//     return digits;
// };

/**
 * Runtime: 76 ms, faster than 57.18% of JavaScript online submissions for Plus One.
 * Memory Usage: 40.2 MB, less than 5.24% of JavaScript online submissions for Plus One.
 */

var plusOne = function (digits) {
    let num = BigInt(digits.join(''));
    num++;
    return String(num).split('');
};

const digits = [1, 2, 3];
const digits2 = [4, 3, 2, 1];
const digits3 = [0];
const digits4 = [9];
const digits5 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
const digits6 = [9, 9, 9, 9, 9];
const digits7 = [8, 9, 9, 9];

console.log(plusOne(digits5));
