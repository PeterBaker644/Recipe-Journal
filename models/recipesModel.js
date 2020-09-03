const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    recipeName: {
        type: String,
        required: false,
        unique: true,
        lowercase: true,
    },
    recipeDescription: {
        type: String,
        required: false,
    },
    recipeCategory: {
        type: String,
        required: false,
        lowercase: true,
    },
    recipeTags: [
        {
            type: String,
            required: false,
            unique: true,
            lowercase: true,
        }
    ],
    ingredients: [
        {
            ingredientName: {
                type: String,
                required: true,
                lowercase: true,
            },
            quantity: {
                type: Number,
                required: true,
                minimum: 0,
            },
            units: String
        }
    ],
    //TODO add cooking action icon?
    cookingActions: [
        {
            action: {
                type: String,
                required: true
            },
        }
    ]
}
);

const recipesModel = mongoose.model("recipesTable", recipesSchema);

module.exports = recipesModel;