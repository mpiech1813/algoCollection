// extra spaces before or after should be ignores
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

  // break the string into individual words
  if (morseCode.length > 3) {
    arrayOfWords = morseCode.split('   ');
  } else {
    arrayOfWords = morseCode.split('');
    arrayOfWords = [arrayOfWords.join('')];
  }

  translatedLetters = arrayOfWords.map((word: string) => {
    // break words into letters
    return (
      word
        .split(' ')
        // translate each letter from morse to latin
        .map((letter: string) => MORSE_CODE[letter])
        // combine latin letters into words
        .join('')
    );
  });

  // return final sentence
  return (finalSentence = translatedLetters.join(' ').trim());
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
console.log(
  decodeMorse(
    '   -- -.--   -. .- -- .   .. ...   .-. --- -... . .-. - --..--   .--. .-.. . .- ... .   ... . -. -..   .... . .-.. .--. -.-.--   ...---...'
  )
);
console.log(decodeMorse('   .   .'));
(' E E');
console.log(decodeMorse('.   .   '));
('E E ');
console.log(decodeMorse('   .   .   '));
(' E E ');
console.log(decodeMorse('      .   .   '));
('  E E ');
console.log(decodeMorse('         .   .   '));
('   E E ');
console.log(decodeMorse('      .   .      '));
('  E E  ');

console.log(
  decodeMorse(
    `      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-     `
  )
);

console.log(
  decodeMorse(
    ' -- -.--   -. .- -- .   .. ...   .-. --- -... . .-. - --..--   .--. .-.. . .- ... .   ... . -. -..   .... . .-.. .--. -.-.--   ...---...'
  )
);

console.log(decodeMorse(' . ')); // E
console.log(decodeMorse('--..'));
