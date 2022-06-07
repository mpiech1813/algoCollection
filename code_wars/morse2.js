"use strict";
// dot 1 => time unit
// dash 3 => time units
// pause between dots and dashes inside the character => 1 time unit
// pause between characters in the word => 3 time units
// pause between words => 7 units
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBits = void 0;
const decodeBits = (bits) => {
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    // establish time unit dot = 2 or 1
    // new method
    let dot = '';
    let dash = '';
    let temp = '';
    //old method
    //   let dot: number = 0
    //   let dash: number = 0
    //   let temp: number = 0
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
    // old method
    //   for (let i = 0; i <= bitsArray.length; i++){
    //       if( bitsArray[i] === '1' && bitsArray[i+1] === '1'){
    //           temp ++
    //       } else if (bitsArray[i] === '1' && bitsArray[i+1] === '0'){
    //           temp ++
    //           temp > dash ? dash = temp : ''
    //           temp < dash && temp > dot ? dot = temp : ''
    //           temp = 0
    //       }
    //   }
    const dots = new RegExp(dot, 'g');
    // empty spaces get turned into dashes
    const dashes = new RegExp(dash, 'g');
    const spaces = new RegExp('0'.repeat(dot.length), 'g');
    // //   split bits into an array of words in bits
    bitsArray = bits.split('0'.repeat(dash.length));
    // //   translate bits to dots and dashes
    const result = bitsArray.map((word) => {
        //     // check for spaces between words
        if (word === '')
            return word = ' ';
        if (dash.length > 0)
            return word.replace(dashes, '-').replace(spaces, '').replace(dots, '.');
        console.log('i trigerred: ', typeof dot);
        return word.replace(dots, '.');
    });
    if (dash.length > 0) {
        return result.join(' ');
    }
    else {
        return result.join('');
    }
    //   return result
    // return `dot: ${dot.length} and dash: ${dash.length}`
};
exports.decodeBits = decodeBits;
const heyJudeBits = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
// const heyJudeMorse: string = decodeBits(heyJudeBits)
const heyJudeBits2 = '00000011001100110011000000110000001111110011001111110011111100000000000000110011111100111111001111110000001100110011111100000011111100110011000000110000000';
const E1 = '1';
const E2 = '111';
const E3 = '01110';
console.log((0, exports.decodeBits)(E2));
// console.log(decodeMorse(decodeBits(E1)))
// console.log(decodeMorse(decodeBits(heyJudeBits2)))
