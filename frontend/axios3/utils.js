const axios = require('axios');

const entireList = async (link) => {
    try {
        const totalList = [];

        const work = (link) => {
            const currentList = (await axios.get(`${link}`)).data;
            const currentResult = currentList.results;

            currentResult.forEach((ele) => totalList.push(ele.name));

            if (currentList.next !== null) {
                work(currentList.next);
            }
            console.log('totalList is : ', totalList);
            return totalList;
        };
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = entireList;
