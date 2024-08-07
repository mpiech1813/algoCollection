// R: Write a function which checks if the given number is a narcissistic number. The sum of all of its digits
// raised to the power of total number of digits has to equal to the number.
// E: 153 =>  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 || 7 => 7^1 =7
// A: Break the number into an array, check if length is 1, yes return true, establish length of array (pwr),
// use reducer to calculate the total acc + ele^pwr, check if acc === original number
// C:

function narcissistic(value) {
  const arrayOfNumbers = Array.from(String(value), Number);
  const pwr = arrayOfNumbers.length;

  if (pwr === 1) return true;

  const sum = arrayOfNumbers.reduce((acc, ele) => acc + Math.pow(ele, pwr), 0);

  console.log(sum);

  if (value === sum) {
    return true;
  }

  return false;
}

// console.log(narcissistic(153));
// console.log(narcissistic(7));
// console.log(narcissistic(0));
// console.log(narcissistic(7213));
// console.log(narcissistic(15477));
// console.log(narcissistic(56774));
console.log(narcissistic(4338281769391370));
