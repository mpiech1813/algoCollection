// dot 1 => time unit
// dash 3 => time units
// pause between dots and dashes inside the character => 1 time unit
// pause between characters in the word => 3 time units
// pause between words => 7 units

// 2 functions:
// 1) decodeBits => find transmission rate, decode to dots, dashes and spaces(1 between character and 3 between words),
// return result as string, ignore extra 0's 
// 2) decode morseCode => translate from dots and dashes to human language => will just import from previous task to save time.

import  MORSE_CODE  from './MORSE_CODE';
// import {decodeMorse} from './morse1'


export const decodeBits = (bits: string) => {
  // ToDo: Accept 0's and 1's, return dots, dashes and spaces

  // trims unnecessary 0's at the begging and end

  // establish time unit dot = 2 or 1
  let dot: number = 0
  let dash: number = 0
  let temp: number = 0
  let bitsArray: string[] = bits.split('')

  for (let i = 0; i <= bitsArray.length; i++){
      if( bitsArray[i] === '1' && bitsArray[i+1] === '1'){
          temp ++
      } else if (bitsArray[i] === '1' && bitsArray[i+1] === '0'){
          temp ++
          temp > dash ? dash = temp : ''
          temp < dash && temp > dot ? dot = temp : ''
          temp = 0
      }
  }
  bitsArray = bits.split('0'.repeat(dash))

//   const result = `dots: ${dot}
//   dashes: ${dash}`
//   return result
return bitsArray
};

export const decodeMorse = (morseCode: string) => {
  // ToDo: Accept dots, dashes and spaces, return human-readable message
  return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
};


const heyJudeBits: string = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'
const heyJudeMorse: string = decodeBits(heyJudeBits)
console.log(heyJudeMorse)


// dave => rippling 
// israel => gmail
// panoskin pro for Nick 