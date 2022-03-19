const db = require("../models");
const Tutorial = db.tutorials;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const tutorial = new Tutorial({
        title: req.body.title,
    });

    tutorial
        .save(tutorial)
        .then(data => {
            res.status(200).send({
                message: "Success",
                data: data
            })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.getAll = (req, res) => {
    Tutorial.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};