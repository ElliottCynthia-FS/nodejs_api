// Bring in axios to make HTTP requests
const axios = require('axios');
require('dotenv').config();

// Bring in the users URL - 1st is users, 2nd is users by Id
const usersServices = async () => {
    console.log("Real Users");
    return await axios.get(`$(process.env.usersURL)`);
};

const usersServicesById = async (id) => {
    console.log("Real Users by Id");
    return await axios.get(`$(process.env.usersURL)/${id}`);
}

module.exports ={usersServices, usersServicesById };

