// dot 1 => time unit
// dash 3 => time units
// pause between dots and dashes inside the character => 1 time unit
// pause between characters in the word => 3 time units
// pause between words => 7 units

// 2 functions:
// 1) decodeBits => find transmission rate, decode to dots, dashes and spaces(1 between character and 3 between words),
// return result as string, ignore extra 0's 
// 2) decode morseCode => translate from dots and dashes to human language => will just import from previous task to save time.

import { MORSE_CODE } from './MORSE_CODE';
import {decodeMorse} from './morse1'


export const decodeBits = (bits: string) => {
  // ToDo: Accept 0's and 1's, return dots, dashes and spaces
  return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '');
};

export const decodeMorse = (morseCode: string) => {
  // ToDo: Accept dots, dashes and spaces, return human-readable message
  return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
};
