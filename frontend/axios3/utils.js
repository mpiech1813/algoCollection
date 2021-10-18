const axios = require('axios');

const entireList = (link) => {
    console.log('list.next is', list);
    const totalList = [];
    const currentList = list.results;

    currentList.forEach((ele) => totalList.push(ele.name));

    if (list.next !== null) {
        entireList(list.next);
    }
    return totalList;
};

module.exports = entireList;
