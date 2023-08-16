const express = require('express');
const router = express.Router();
const { usersServices, usersServicesById } = require('../services/usersServices');

// use .then() and .catch() b/c usersServices() returns a promise (async)
router.get("/", (req, res, next) => {
    usersServices()
        .then(result => res.status(200).json(result.data))
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });
});

router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    usersServicesById(id)
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

module.exports = router;
