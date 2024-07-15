// R: create a function that takes a string and ending string. If string ends with ending string, return true
// E: solution('abcde', 'cde'), true || solution('abcde', 'abc'), false
// A: slice string from end until ending -1. if slice === ending return true
// C:

function solution(str, ending) {
  if (str.length === 0 || ending.length === 0) return false;
  const compare = str.slice(-ending.length);

  //   if (compare === ending) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return compare === ending ? true : false;
}

// solution("abcde", "cde");
console.log(solution("abcde", "cde"));
// console.log(solution("abcde", "abc"));
