const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.IngredientsModel
            .find(req.query)
            // .sort({ recipeName })
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    },
    //only find all is working at the moment
    findById: function (req, res) {
        db.IngredientsModel
            .findById(req.params.id)
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.IngredientsModel
            .create(req.body)
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.IngredientsModel
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.IngredientsModel
            .findById({ _id: req.params.id })
            .then(dbModelDataResult => dbModelDataResult.remove())
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    }
};
