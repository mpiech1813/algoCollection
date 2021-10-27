var buddyStrings = function (s, goal) {
    let diffIndices = [];
    if (s.length !== goal.length) {
        return false;
    } else if (s === goal) {
        let seen = [];
        let find;
        for (let i = 0; i < s.length; i++) {
            if (seen.findIndex((element) => element === s[i]) !== -1) {
                find = true;
            }
            seen.push(s[i]);
        }
        if (find) {
            return true;
        } else {
            return false;
        }
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== goal[i]) {
                diffIndices.push(i);
            }
            if (diffIndices.length > 2) {
                return false;
            }
        }
        if (diffIndices.length !== 2) {
            return false;
        } else {
            if (
                s[diffIndices[0]] === goal[diffIndices[1]] &&
                s[diffIndices[1]] === goal[diffIndices[0]]
            ) {
                return true;
            } else {
                return false;
            }
        }
    }
};
