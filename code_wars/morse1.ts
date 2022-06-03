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

import MORSE_CODE from './MORSE_CODE';
export function decodeMorse(morseCode: string): string {
  // your code here
  let finalSentence: string;
  let arrayOfWords: string[];
  let translatedLetters: string[];

  arrayOfWords = morseCode.split('   ');

  translatedLetters = arrayOfWords.map((word: string) => {
    return word
      .split(' ')
      .map((letter: string) => {
        return MORSE_CODE[letter];
      })
      .join('');
  });

  return (finalSentence = translatedLetters.join(' '));
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
