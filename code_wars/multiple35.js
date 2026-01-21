// R: Write a function which takes a number, checks all of the natural numbers from 1 input number,
// if divisible by 3 or 5, add and sum (useReducer?)
// return sum
// if number is negative, return 0
// E: num = 10
// natural numbers : 3, 5, 6, 9
// sum: 23
// A: build an array from 3 up to num (use enum?)
// use reducer to going number by number
// if divisible by 3, add to sum and move on!
// if not divisible by 3, check if divisible by 5 and add to sum
// if not divisible by both, skip
// return sum
// check if number is negative
// C:

function solution(num) {
  const numsArr = Array.from({ length: num - 1 }, (_, index) => ++index);

  function reduceFunction(total, currNum) {
    if (currNum % 3 === 0 || currNum % 5 === 0) {
      return total + currNum;
    }
    return total;
  }

  return numsArr.reduce(reduceFunction, 0);
}

console.log("array is: ", solution(100));
