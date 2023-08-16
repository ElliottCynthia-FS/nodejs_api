const http = require("http");
const app = require("./app");

// Let NodeJS know that we are using dotenv
// .config() = read the .env file and assign it to process.env
require("dotenv").config();

http.createServer(app).listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});
