module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/add", tutorials.create);

    // Retrieve all Tutorials
    router.get("/get", tutorials.getAll);

    // base url structure
    app.use('/api/tutorials', router);
};