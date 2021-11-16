const axios = require('axios');

const entireList = async (link) => {
    try {
        const currentList = (await axios.get(`${link}`)).data;

        // console.log('currentList is ', currentList);
        return currentList;
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = entireList;
