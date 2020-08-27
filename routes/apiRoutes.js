// const recipesModel = require("../models/recipesModel");

// module.exports = function (app) {

//     app.get("/jsonall", async (req, res) => {
//         try {
//             data = await recipesModel.find({})
//             res.json(data);
//         } catch (err) {
//             console.log(err);
//         }
//     });
// };


const router = require("express").Router();
const db = require("../models");

router.get("/recipes", (req, res) => {
    db.RecipesModel.find()
        .then(recipes => {
            res.json(recipes)
        })
        .catch(err => res.status(422).end());
});

module.exports = router;