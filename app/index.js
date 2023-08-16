const express = require('express');
const app = express();
const todosHandler = require('../router/usersRouter');
const usersHandler = require('../router/usersRouter');
const morgan = require('morgan');

app.use(morgan('dev'))
// http://localhost:3000
app.get("/", (req, res) => {
    res.status(200).json({ message: "Service is UP!" });
});

// Router middleware
app.use("/todos", todosHandler);
app.use("/users", usersHandler);

// add middleware to handle errors and bad url paths
app.use((req, res, next) => {
    const error = new Error("NOT FOUND!!");
    error.status = 404;
    next(error);
});

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
