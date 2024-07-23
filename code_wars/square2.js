// R: create a function that checks if the number provided is square of a number
// E: -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
// A: use Math.sprRt on the number, use Number.isInteger to check if integer, if -1 return false, else return true
//C :

var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

console.log(isSquare(4));
console.log(isSquare(0));
console.log(isSquare(1));
console.log(isSquare(-1));
console.log(isSquare(64));
console.log(isSquare(121));
console.log(isSquare(13));
console.log(isSquare(1111));
console.log(isSquare(26));
