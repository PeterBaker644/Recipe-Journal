const db = require("../models");
module.exports = {
    findAll: function (req, res) {
        db.RecipesModel
            .find()
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.RecipesModel
            .create(req.body)
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.RecipesModel
            .findById(req.params._id)
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.RecipesModel
            .findById({ _id: req.params._id })
            .then(dbModelDataResult => dbModelDataResult.remove())
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    },

    findByuserID: function (req, res) {
        db.RecipesModel
            .find({
                "userID": req.query
            })
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        console.log("---------------------------------------------");
        console.log("req.params");
        console.log(req.params);
        console.log("req.params.id");
        console.log(req.params.id);
        db.RecipesModel
            .findOneAndUpdate({ _id: req.params }, req.body)
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    },

};
