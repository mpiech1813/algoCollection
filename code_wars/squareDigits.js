// R: take a number and square every digit in it, return the squares concatenated as number
// E: num = 9119 => 811181 || num =765 => 493625
// A: convert number into an array, may have to convert it into a string first, each element in the array get multiplied by itself, concatenate into string, change into number (parseInt())
// C:

function squareDigits(num) {
  const numArr = num
    .toString()
    .split("")
    .map((ele) => Math.pow(ele, 2))
    .join("");

  return parseInt(numArr);
}

console.log(squareDigits(1123));
console.log(squareDigits(9119));
console.log(squareDigits(765));
console.log(squareDigits(0));
console.log(squareDigits("123"));
