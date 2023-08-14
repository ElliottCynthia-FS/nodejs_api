const express = require('express');
const usersRouter = express.Router();
const { usersServices, usersServicesById } = require('../services/usersServices');

// use .then() and .catch() b/c usersServices() returns a promise (async)
// REMEMBER: "/" applies to EVERYTHING
usersRouter.get("/", (req, res, next) => {
    usersServices()
        .then(result => {
            res.status(200).json(result.data);
        })
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });
});

// do the same for users by Id
// REMEMBER: "/:id" applies after /users/ (as per the router middleware in app.js)
usersRouter.get("/:id", (req, res, next) => {
    usersServicesById(req.params.id)
        .then(result => {
            res.status(200).json(result.data);
        })
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });
});

module.exports = usersRouter;