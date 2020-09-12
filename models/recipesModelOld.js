const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//TODO cookingActions should require ingredients from This schema, probably done from front end when entry is added to DB
//when user adds a recipe they first select ingredients 
//and then when selecting cooking actions are limited to current ingredients

const recipesSchema = new Schema({
    // date: {
    //     type: Date,
    //     required: true,
    //     default: Date.now
    // },
    //total ingredient list
    name: String,
    ingredients: [
        {
            //example flour
            //example 2
            //example cups
            name: String,
            quantity: Number,
            units: String
        }
    ],
    cookingActions: [
        {
            //action of the ingredients, example mix or bake or whip or whatever
            action: {
                type: String,
                required: true
            },
            //ingredient list for only this cooking action
            ingredients: [
                {
                    name: String,
                    quantity: Number,
                    units: String
                }
            ],
        }
    ]
}
);

const RecipesModel = mongoose.model("recipes_DB", recipesSchema);

module.exports = RecipesModel;