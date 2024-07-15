/**
 * R: Given a starting number X, an increment Y and final number Z, write a function which will check if starting at X and increming by a number Y, will reach number Z. If it does not, was will be the closest number.
 * E: X= 2 Y= 3 Z= 5 => yes
 * X= 5 Y= 1 Z= 99 => yes
 * X= 3 Y= 5 Z= 4 => no
 * X= 1 Y= 0.5 Z= 4 => yes
 * X= 1 Y= 0.3 Z= 4 => ?
 * A: create a for loop from x increasing by y until => Z. if === Z then return yes, if > then Z check 2 whether the last number before Z or the number after is closer to the Z.
 */

const XYZ_checker = (start, increment, final) => {
  let tracker = start;

  while (tracker < final) {
    tracker += increment;
  }
  console.log("tracker: ", tracker);

  if (tracker === final) {
    console.log("equal");
  } else {
    const lower = tracker - increment;
    const lowerDifference = final - lower;
    const higherDifference = tracker - final;
    if (higherDifference < lowerDifference) {
      console.log("higher");
    } else {
      console.log("lower");
    }
  }
};

XYZ_checker(3, 0.7, 6);
