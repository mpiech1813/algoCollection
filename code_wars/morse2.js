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
    // establish time unit dot
    let dot = '';
    let dash = '';
    let space = '';
    let temp = '';
    // split bits into an array of individual characters to determine time unit
    let bitsArray = bits.split('');
    // new method
    for (let i = 0; i <= bitsArray.length; i++) {
        if (bitsArray[i] === '1' && bitsArray[i + 1] === '1') {
            temp += '1';
        }
        else if (bitsArray[i] === '1' && bitsArray[i + 1] === '0' || bitsArray[i] === '1' && bitsArray[i + 1] === undefined) {
            if (dot === '') {
                temp += '1';
                dot = temp;
                temp = '';
            }
            else {
                temp += '1';
                temp > dash && temp !== dot ? dash = temp : '';
                temp < dash && temp > dot ? dot = temp : '';
                temp = '';
            }
        }
    }
    // make sure that dot is always the smaller out of the two
    if (dot.length > dash.length && dash.length > 0) {
        temp = dot;
        dot = dash;
        dash = temp;
    }
    const dots = new RegExp(dot, 'g');
    const dashes = new RegExp(dash, 'g');
    const spaces = new RegExp('0'.repeat(dot.length), 'g');
    // split **the string** into an array of words in bits
    if (dash.length > 0) {
        bitsArray = bits.split('0'.repeat(dash.length));
        // translate bits to dots and dashes
        return bitsArray.map((word) => {
            // check for spaces between words
            if (word === '')
                return word = ' ';
            return word.replace(dashes, '-').replace(spaces, '').replace(dots, '.');
        }).join(' ');
    }
    return bits.replace(dots, '.').replace(/0/g, '');
};
exports.decodeBits = decodeBits;
const heyJudeBits = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
// const heyJudeMorse: string = decodeBits(heyJudeBits)
const heyJudeBits2 = '00000011001100110011000000110000001111110011001111110011111100000000000000110011111100111111001111110000001100110011111100000011111100110011000000110000000';
const E1 = '1';
const E2 = '111';
const E3 = '01110';
const I1 = '101';
const I2 = '110011';
const FOX = '00011100010101010001000000011101110101110001010111000101000111010111010001110101110000000111010101000101110100011101110111000101110111000111010000000101011101000111011101110001110101011100000001011101110111000101011100011101110001011101110100010101000000011101110111000101010111000100010111010000000111000101010100010000000101110101000101110001110111010100011101011101110000000111010100011101110111000111011101000101110101110101110';
const EE = '10001';
const M = '11111100111111';
// 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
console.log((0, exports.decodeBits)(EE));
console.log((0, morse1_1.decodeMorse)((0, exports.decodeBits)(EE)));
// console.log(decodeMorse(decodeBits(E2)))
// console.log(decodeMorse(decodeBits(E3)))
// console.log(decodeMorse(decodeBits(heyJudeBits)))
// console.log(decodeMorse(decodeBits(heyJudeBits2)))
// console.log(decodeMorse(decodeBits(I1)))
// console.log(decodeMorse(decodeBits(I2)))
// console.log(decodeMorse(decodeBits(FOX)))
