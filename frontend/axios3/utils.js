const axios = require('axios');

const entireList = async (link) => {
    const totalList = [];

    const work = async (link) => {
        try {
            const currentList = (await axios.get(`${link}`)).data;
            const currentResult = currentList.results;

            while (currentList.next !== null) {
                work(currentList.next);
                currentResult.forEach((ele) => totalList.push(ele.name));
            }

            // console.log('totalList is: ', totalList);
            // if (currentList.next !== null) {
            //     work(currentList.next);
            // } else {
            //     return totalList;
            // }
        } catch (error) {
            console.log(error);
            next(error);
        }
    };

    await work(link);
    console.log('totalList is : ', totalList);
};

module.exports = entireList;
