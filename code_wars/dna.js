// R: give a string of parts of DNA composed of 'A', 'T', 'G', 'C', create a function that returns a matching pairs
// E: 'ATTGC' => 'TAACG' || 'GTAT' => 'CATA'
// A: create an object with keys A,T,G,C and values as their matching pairs, conver string into an array, itterate through the array and replace each value with corresponding pair based on the object,
// concat array into string and return. Will try to use the reducer.
// C:

function dnaStrand(dna) {
  const pairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };

  return dna
    .toUpperCase()
    .split("")
    .reduce((acc, letter) => acc + pairs[letter], "");
}

console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));
console.log(dnaStrand("AAAA"));
