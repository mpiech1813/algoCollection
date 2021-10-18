const axios = require('axios');

const entireList = (link) => {
    const totalList = [];

    const work = async (link) => {
        try {
            const currentList = (await axios.get(`${link}`)).data;
            const currentResult = currentList.results;

            // console.log('currentList is ', currentList);

            // const pokeNames = currentResult.map((ele) => ele.name);

            currentResult.forEach((ele) => totalList.push(ele.name));

            // console.log('pokenames are : ', pokeNames);
            // totalList.push(pokeNames);

            if (currentList.next !== null) {
                work(currentList.next);
            }
        } catch (error) {
            console.log(error);
            next(error);
        }
    };

    work(link);

    return totalList;
    // console.log('totalList is : ', totalList);
};

module.exports = entireList;
