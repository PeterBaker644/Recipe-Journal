const db = require("../models");

module.exports = {
    //TODO filter by name
    findAll: function (req, res) {
        db.IngredientsModel
            .find()
            // .sort( { usedCount: -1 } )
            // .sort({ usedCount })
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    },
    
    findAllLimitTen: function (req, res) {
        db.IngredientsModel
            .find()
            .limit( 10 )
            .sort( { usedCount: -1 } )
            // .sort({ usedCount })
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    },
    updateIngredientCount: function (req, res) {

        // console.log("[addingredients page] sending ingredients list API",ingredients );
        // API.updateIngredientCount(ingredients).then(() => {
        //     console.log('pushed ingredients and updated count');
        // })


        let ingredientArray = [];
        for (i in req.body) {
            let newThing = {
                updateOne: {
                    filter: {name: req.body[i].name},
                    update: { $inc: { usedCount: 1 }},
                    upsert: true
                }
            }
            ingredientArray.push(newThing);
        }
        db.IngredientsModel.bulkWrite(ingredientArray)
            .then(dbModelDataResult => res.json(dbModelDataResult))
            .catch(err => res.status(422).json(err));
    }
};
