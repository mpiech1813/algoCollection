// extra spaces before or after should be ignores
// treat SOS as special character

// go letter by letter
// take the string and convert it into array
// if first or last character is ' ' ignore it
// go from first character until space
// collect all characters and concat into string into uppercase
// add to final sentence
// if single space, ignore it and proceed to next letter
// if tripple space, add space to final sentence
// return final sentence

import { MORSE_CODE } from './MORSE_CODE';
export function decodeMorse(morseCode: string): string {
  // your code here
  let finalSentence: string;
  let arrayOfLetters: string[];

  arrayOfLetters = morseCode.split('   ');
  finalSentence = arrayOfLetters
    .map((letter: string) => {
      MORSE_CODE[letter];
    })
    .join(' ');

  return finalSentence;
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
