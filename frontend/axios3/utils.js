const axios = require('axios');

const entireList = (link) => {
    const totalList = [];
    const work = async (link) => {
        try {
            const currentList = (await axios.get(`${link}`)).data;
            const currentResult = currentList.results;

            currentResult.forEach((ele) => totalList.push(ele.name));

            // console.log('totalList is: ', totalList);
            if (currentList.next !== null) {
                work(currentList.next);
            }
        } catch (error) {
            console.log(error);
            next(error);
        }
    };
    work(link);
    // console.log('totalList is : ', totalList);
    return totalList;
};

module.exports = entireList;
