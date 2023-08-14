const express = require('express');
const app = express();
const usersRouter = require('../router/usersRouter');

// http://localhost:3000
app.get("/", (req, res) => {
    res.status(200).json({ message: "Service is UP!" });
});

//^ Alternatively you can use the following syntax to just send a simple message:
//^ It won't be a JSON object, just a string, so no curly braces
//* app.get("/", (req, res) => {
   //* res.status(200).send("Service is UP!");
//* });

// Router middleware
app.use("/todos", usersRouter);

// add middleware to handle errors and bad url paths
// this middleware will be executed if the above routes are not executed
// next() will pass the error to the next middleware in the stack
app.use((req, res, next) => {
    const error = new Error("NOT FOUND!!");
    error.status = 404;
    next(error);
});

// this middleware will be executed if the above middleware is executed
// this middleware will handle all errors
app.use((error, req, res, next) => {
    // passed error to us, so we send response
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        }
    })
});

module.exports = app;