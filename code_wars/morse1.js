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
    if (morseCode.length > 3) {
        arrayOfWords = morseCode.split('   ');
        // checkEmptySpaces();
    }
    else {
        arrayOfWords = morseCode.split('');
        // checkEmptySpaces();
        arrayOfWords = [arrayOfWords.join('')];
    }
    translatedLetters = arrayOfWords.map((word) => {
        // break words into letters
        return (word
            .split(' ')
            // translate each letter from morse to latin
            .map((letter) => MORSE_CODE_1.default[letter])
            // combine latin letters into words
            .join(''));
    });
    // return final sentence
    return (finalSentence = translatedLetters.join(' ').trim());
    //   return arrayOfWords;
    //   return translatedLetters.join(' ').trim();
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
console.log(decodeMorse('      .   .   '));
('  E E ');
console.log(decodeMorse('         .   .   '));
('   E E ');
console.log(decodeMorse('      .   .      '));
('  E E  ');
console.log(decodeMorse(`      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-     `));
console.log(decodeMorse(' -- -.--   -. .- -- .   .. ...   .-. --- -... . .-. - --..--   .--. .-.. . .- ... .   ... . -. -..   .... . .-.. .--. -.-.--   ...---...'));
console.log(decodeMorse(' . ')); // E
console.log(decodeMorse('.-'));
