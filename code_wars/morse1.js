"use strict";
// extra spaces before or after should be ignores
// treat SOS as special character
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
const MORSE_CODE_1 = __importDefault(require("./MORSE_CODE"));
function decodeMorse(morseCode) {
    // your code here
    let finalSentence;
    let arrayOfWords;
    let translatedLetters;
    arrayOfWords = morseCode.split('   ');
    translatedLetters = arrayOfWords.map((word) => {
        return word
            .split(' ')
            .map((letter) => {
            return MORSE_CODE_1.default[letter];
        })
            .join('');
    });
    return (finalSentence = translatedLetters.join(' '));
}
exports.decodeMorse = decodeMorse;
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
