/**
 * R: Given a string return the longest palidrome: word which reads the same from back to front
 * E: asdbdbiojwp, radar, kayak, bb, wojeejsdjobsofbgoweb
 * A:
 * - convert string to array
 * - create array for final answer
 * - start first loop at the 0 index
 * - slice the first character
 * - start second loop at index of .length - 1
 * - if that === 0 then reutrn first character
 * - slice the last character
 * - if first and last are the same, store these values
 * - if not the same, get rid of the last one and proceed with second loop, and reset second character storage
 * - keep going until both trackers are next to each other or there is 1 character inbetween
 * - if they are next to each other: are they the same? no => next itteration of first loop | yes => check if final answer is longer finalAnswer and replace if necessary
 */

var longestPalindrome = function (s) {};
