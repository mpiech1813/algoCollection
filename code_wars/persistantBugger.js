// R: given a number, check and return the number of multiplicative persistances. Take digits of a number and multiply them together, keep repeating the process untill left with only oen digit,
// record and return number of itterations
// E: 39 => 3 || 999 => 4 || 4 =>0
// A: Create an object that will hold itteration and current value, break the number into array, use reducer to multiply all of the numbers together, when done: add 1 to itterator and replace
// current value with acc, keep repeating until current value.length === 1, return itterator
// C:

function persistence(num) {
  const tracker = {
    itteration: 0,
    currentVal: num.toString().split(""),
  };

  while (tracker.currentVal.length > 1) {
    const value = tracker.currentVal.reduce((acc, digit) => acc * digit);
    tracker.currentVal = value.toString().split("");
    tracker.itteration++;
  }
  return tracker.itteration;
}

console.log(persistence(18));
