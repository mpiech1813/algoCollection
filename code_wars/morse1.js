"use strict";
// extra spaces before or after should be ignores
// treat SOS as special character
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeMorse = void 0;
// go letter by letter
// take the string and convert it into array
// if first or last character is ' ' ignore it
// go from first character until space
// collect all characters and concat into string into uppercase
// add to final sentence
// if single space, ignore it and proceed to next letter
// if tripple space, add space to final sentence
// return final sentence
const MORSE_CODE_1 = require("./MORSE_CODE");
function decodeMorse(morseCode) {
    // your code here
    let finalSentence;
    let arrayOfLetters;
    arrayOfLetters = morseCode.split('   ');
    finalSentence = arrayOfLetters
        .map((letter) => {
        MORSE_CODE_1.MORSE_CODE[letter];
    })
        .join(' ');
    return finalSentence;
}
exports.decodeMorse = decodeMorse;
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
