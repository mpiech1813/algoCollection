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
                temp > dash ? dash = temp : '';
                temp < dash && temp > dot ? dot = temp : '';
                temp = '';
            }
        }
    }
    const dots = new RegExp(dot, 'g');
    const dashes = new RegExp(dash, 'g');
    const spaces = new RegExp('0'.repeat(dot.length), 'g');
    // split bits into an array of words in bits
    if (dash.length > 0) {
        /**
         * PYTANIE:
         * jest: return bits.map.join()
         * czy lepiej jest zrobić let result = return bits.map.join()
         * bo: result zaczyna jako array a kończy jako string
         */
        bitsArray = bits.split('0'.repeat(dash.length));
        // translate bits to dots and dashes
        return bitsArray.map((word) => {
            // check for spaces between words
            if (word === '')
                return word = ' ';
            return word.replace(dashes, '-').replace(spaces, '').replace(dots, '.');
        }).join(' ');
    }
    else {
        return bits.replace(dots, '.').replace(/0/g, '');
    }
};
exports.decodeBits = decodeBits;
const heyJudeBits = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
// const heyJudeMorse: string = decodeBits(heyJudeBits)
const heyJudeBits2 = '00000011001100110011000000110000001111110011001111110011111100000000000000110011111100111111001111110000001100110011111100000011111100110011000000110000000';
const E1 = '1';
const E2 = '111';
const E3 = '01110';
// console.log(decodeBits(E3))
console.log((0, morse1_1.decodeMorse)((0, exports.decodeBits)(E1)));
console.log((0, morse1_1.decodeMorse)((0, exports.decodeBits)(E2)));
console.log((0, morse1_1.decodeMorse)((0, exports.decodeBits)(E3)));
console.log((0, morse1_1.decodeMorse)((0, exports.decodeBits)(heyJudeBits2)));
