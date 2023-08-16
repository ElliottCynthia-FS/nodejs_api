const axios = require('axios');
require('dotenv').config();

// use async and await b/c this is a promise
const usersServices = async () => {
    console.log("Real Users");
    return await axios.get(`${process.env.usersURL}`);
};

const usersServicesById = async (id) => {
    console.log("Real Users by Id");
    return await axios.get(`${process.env.usersURL}${id}`);
}

module.exports = { 
    usersServices, 
    usersServicesById 
};
