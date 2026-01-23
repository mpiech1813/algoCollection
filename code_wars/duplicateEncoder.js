// R: create a function that takes a string and return '(' if the character is unique and ')' if the
// character appears more than once.
// Ignore capitalization
// A: convert the string into all lower case
// create an object that will have letter and key and number of times it appears as value
// convert a string into an array and itterate over the letters.
// during the itteration, try to see if that letter is in the object? yes => increase count,
// no=> create new one with count of 1
// create a new array and itterate through letters array with map. Compare each letter with the object and
// return '(' or ')' accordingly
// convert the final array into string and return
