export const likes = (a: string[]): string => {
  // TODO
  let text: string = '';
  let pluralS: string = 's';
  if (a.length === 0) {
    text = `no one`;
  } else if (a.length <= 3) {
    text += `${a.shift()}`;
    while (a.length) {
      if (a.length === 1) {
        pluralS = '';
        text += ` and ${a.shift()}`;
      } else {
        text += `, ${a.shift()}`;
      }
    }
  } else {
    pluralS = '';
    text += `${a.shift()}, ${a.shift()} and ${a.length} others`;
  }
  text += ` like${pluralS} this`;
  return text;
};

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
console.log(likes(['Kacper', 'Maciek', 'Alex', 'Jacob', 'Mark', 'Max']));
