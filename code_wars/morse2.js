"use strict";
// dot 1 => time unit
// dash 3 => time units
// pause between dots and dashes inside the character => 1 time unit
// pause between characters in the word => 3 time units
// pause between words => 7 units
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBits = void 0;
const morse1_1 = require("./morse1");
const decodeBits = (bits) => {
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    // establish time unit dot = 2 or 1
    let dot = 0;
    let dash = 0;
    let temp = 0;
    // split bits into an array of individual characters to determine time unit
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
    const dotNum = '1'.repeat(dot);
    const dots = new RegExp('1'.repeat(dot), 'g');
    const dashNum = '1'.repeat(dash);
    const dashes = new RegExp('1'.repeat(dash), 'g');
    const spaceNum = '0'.repeat(dot);
    const spaces = new RegExp('0'.repeat(dot), 'g');
    // split bits into an array of words in bits
    bitsArray = bits.split('0'.repeat(dash));
    // translate bits to dots and dashes
    const result = bitsArray.map((word) => {
        // check for spaces between words
        if (word === '')
            return word = ' ';
        return word.replace(dashes, '-').replace(spaces, '').replace(dots, '.');
    }).join(' ');
    return result;
};
exports.decodeBits = decodeBits;
const heyJudeBits = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
// const heyJudeMorse: string = decodeBits(heyJudeBits)
const heyJudeBits2 = '00000011001100110011000000110000001111110011001111110011111100000000000000110011111100111111001111110000001100110011111100000011111100110011000000110000000';
// console.log(decodeBits(heyJudeBits))
console.log((0, morse1_1.decodeMorse)((0, exports.decodeBits)(heyJudeBits)));
console.log((0, morse1_1.decodeMorse)((0, exports.decodeBits)(heyJudeBits2)));
// dave => rippling 
// israel => gmail
// panoskin pro for Nick 
