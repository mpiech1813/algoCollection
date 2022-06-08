// dot 1 => time unit
// dash 3 => time units
// pause between dots and dashes inside the character => 1 time unit
// pause between characters in the word => 3 time units
// pause between words => 7 units

// 2 functions:
// 1) decodeBits => find transmission rate, decode to dots, dashes and spaces(1 between character and 3 between words),
// return result as string, ignore extra 0's 
// 2) decode morseCode => translate from dots and dashes to human language => will just import from previous task to save time.

/**
 * PYTANIE: jak naprawić import
 */
import  MORSE_CODE  from './MORSE_CODE';
import {decodeMorse} from './morse1'


export const decodeBits = (bits: string) => {
  // ToDo: Accept 0's and 1's, return dots, dashes and spaces

  // establish time unit dot
  let dot: string = ''
  let dash: string = ''
  let temp: string = ''

  // split bits into an array of individual characters to determine time unit
  let bitsArray: string[] = bits.split('')
  
  // new method
  for(let i = 0; i <= bitsArray.length; i++ ){
    if( bitsArray[i] === '1' && bitsArray[i+1] === '1'){
      temp += '1'
    } else if (bitsArray[i] === '1' && bitsArray[i+1] === '0' || bitsArray[i] === '1' && bitsArray[i+1] === undefined){
      if(dot === ''){
          temp += '1'
          dot = temp
          temp = ''
      } else {
          temp += '1'
          temp > dash ? dash = temp : ''
          temp < dash && temp > dot ? dot = temp : ''
          temp = ''
      }
    }
  }

  const dots = new RegExp(dot, 'g')
  const dashes = new RegExp(dash, 'g')
  const spaces = new RegExp('0'.repeat(dot.length), 'g')

  // split bits into an array of words in bits
  if(dash.length > 0){
    /**
     * PYTANIE:
     * jest: return bits.map.join()
     * czy lepiej jest zrobić let result = return bits.map.join()
     * bo: result zaczyna jako array a kończy jako string
     */
    bitsArray = bits.split('0'.repeat(dash.length))

    // translate bits to dots and dashes
    return bitsArray.map((word: string) => {
      // check for spaces between words
      if (word === '') return word = ' '
      
      return word.replace(dashes, '-').replace(spaces, '').replace(dots, '.')
    }).join(' ')
  } else {
    return bits.replace(dots, '.').replace(/0/g,'')
  }
};



const heyJudeBits: string = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'
// const heyJudeMorse: string = decodeBits(heyJudeBits)
const heyJudeBits2: string = '00000011001100110011000000110000001111110011001111110011111100000000000000110011111100111111001111110000001100110011111100000011111100110011000000110000000'
const E1 = '1'
const E2 = '111'
const E3 = '01110'
// console.log(decodeBits(E3))
console.log(decodeMorse(decodeBits(E1)))
console.log(decodeMorse(decodeBits(E2)))
console.log(decodeMorse(decodeBits(E3)))
console.log(decodeMorse(decodeBits(heyJudeBits2)))