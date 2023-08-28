const express = require('express');
const router = express.Router();
const { usersServices, usersServicesById } = require('../services/usersServices');

// use .then() and .catch() b/c usersServices() returns a promise (async)
//* OPTION-1: use .then() and .catch()
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

//* OPTION-2: use async/await
//^ router.get("/", async (req, res, next) => {
//^      const result = await usersServices();
//^      res.status(200).json(result.data);
//^ });

//* OPTION-3 use try/catch with async/await
//^ router.get("/", async (req, res, next) => {
//^     try {
//^         const result = await usersServices();
//^         res.status(200).json(result.data);
//^     } catch (err) {
//^         res.status(500).json(result.data);
//^       }
//^     });
//^ });

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
