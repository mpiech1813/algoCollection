const axios = require('axios');

const entireList = async (link) => {
    try {
        const totalList = [];
        const currentList = (
            await axios.get('https://pokeapi.co/api/v2/pokemon')
        ).data;
        const currentResult = currentList.results;
        console.log('current result is ', currentResult);

        // currentList.forEach((ele) => totalList.push(ele.name));

        // if (list.next !== null) {
        //     entireList(list.next);
        // }
        // return totalList;
    } catch (error) {
        next(error);
    }
};

module.exports = entireList;
