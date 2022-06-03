"use strict";
// extra spaces before or after should be ignores
// go letter by letter
// take the string and convert it into array
// if first or last character is ' ' ignore it
// go from first character until space
// collect all characters and concat into string into uppercase
// add to final sentence
// if single space, ignore it and proceed to next letter
// if tripple space, add space to final sentence
// return final sentence
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeMorse = void 0;
const MORSE_CODE_1 = __importDefault(require("./MORSE_CODE"));
function decodeMorse(morseCode) {
    // your code here
    let finalSentence;
    let arrayOfWords;
    let translatedLetters;
    // break the string into individual words
    arrayOfWords = morseCode.split('   ');
    // check and remove empty spaces
    arrayOfWords[0] === '' ? arrayOfWords.shift() : '';
    arrayOfWords[arrayOfWords.length - 1] === '' ? arrayOfWords.pop() : '';
    translatedLetters = arrayOfWords.map((word) => {
        // break words into letters
        return (word
            .split(' ')
            // translate each letter from morse to latin
            .map((letter) => {
            if (letter !== '   ') {
                return MORSE_CODE_1.default[letter];
            }
        })
            // combine latin letters into words
            .join(''));
    });
    // return final sentence
    return (finalSentence = translatedLetters.join(' '));
}
exports.decodeMorse = decodeMorse;
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
console.log(decodeMorse('   -- -.--   -. .- -- .   .. ...   .-. --- -... . .-. - --..--   .--. .-.. . .- ... .   ... . -. -..   .... . .-.. .--. -.-.--   ...---...'));
console.log(decodeMorse('   .   .'));
(' E E');
console.log(decodeMorse('.   .   '));
('E E ');
console.log(decodeMorse('   .   .   '));
(' E E ');
