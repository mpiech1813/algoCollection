"use strict";
// dot 1 => time unit
// dash 3 => time units
// pause between dots and dashes inside the character => 1 time unit
// pause between characters in the word => 3 time units
// pause between words => 7 units
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeMorse = exports.decodeBits = void 0;
// 2 functions:
// 1) decodeBits => find transmission rate, decode to dots, dashes and spaces(1 between character and 3 between words),
// return result as string, ignore extra 0's 
// 2) decode morseCode => translate from dots and dashes to human language => will just import from previous task to save time.
const MORSE_CODE_1 = __importDefault(require("./MORSE_CODE"));
// import {decodeMorse} from './morse1'
const decodeBits = (bits) => {
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    // trims unnecessary 0's at the begging and end
    // establish time unit dot = 2 or 1
    let dot = 0;
    let dash = 0;
    let temp = 0;
    let bitsArray = bits.split('');
    for (let i = 0; i <= bitsArray.length; i++) {
        if (bitsArray[i] === '1' && bitsArray[i + 1] === '1') {
            temp++;
        }
        else if (bitsArray[i] === '1' && bitsArray[i + 1] === '0') {
            temp++;
            temp > dash ? dash = temp : '';
            temp < dash && temp > dot ? dot = temp : '';
            temp = 0;
        }
    }
    // splits into an array of characters in bits
    bitsArray = bits.split('0'.repeat(dash));
    // translate bits to dots and dashes
    const result = bitsArray.map((word) => {
        // check for spaces between words
        if (word === '')
            return word.replaceAll('', '  ');
        // breaks up into 11 or 111111
        return word.replaceAll('1'.repeat(dash), '-').replaceAll('0'.repeat(dot), '').replaceAll('1'.repeat(dot), '.');
    }).join(' ');
    return result;
};
exports.decodeBits = decodeBits;
const decodeMorse = (morseCode) => {
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    return morseCode.replace('.', MORSE_CODE_1.default['.']).replace('-', MORSE_CODE_1.default['-']).replace(' ', '');
};
exports.decodeMorse = decodeMorse;
const heyJudeBits = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
const heyJudeMorse = (0, exports.decodeBits)(heyJudeBits);
console.log(heyJudeMorse);
// dave => rippling 
// israel => gmail
// panoskin pro for Nick 
