"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = void 0;
const likes = (a) => {
    // TODO
    let text = '';
    let pluralS = 's';
    if (a.length === 0) {
        text = `no one`;
    }
    else if (a.length <= 3) {
        text += `${a.shift()}`;
        while (a.length) {
            if (a.length === 1) {
                pluralS = '';
                text += ` and ${a.shift()}`;
            }
            else {
                text += `, ${a.shift()}`;
            }
        }
    }
    else {
        pluralS = '';
        text += `${a.shift()}, ${a.shift()} and ${a.length} others`;
    }
    text += ` like${pluralS} this`;
    return text;
};
exports.likes = likes;
console.log((0, exports.likes)([]));
console.log((0, exports.likes)(['Peter']));
console.log((0, exports.likes)(['Jacob', 'Alex']));
console.log((0, exports.likes)(['Max', 'John', 'Mark']));
console.log((0, exports.likes)(['Alex', 'Jacob', 'Mark', 'Max']));
console.log((0, exports.likes)(['Kacper', 'Maciek', 'Alex', 'Jacob', 'Mark', 'Max']));
