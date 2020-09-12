const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    recipeName: {
        type: String,
        required: true,
        lowercase: true,
    },
    recipeDateCreated: {
        type: Date,
        default: Date.now,
        required: true,
    },
    recipeComments: {
        type: String,
        required: false,
    },
    recipeDescription: {
        type: String,
        required: false,
    },
    recipePicLinks: [
        {
            type: String,
            required: false,
        }
    ],
    recipeCategory: {
        type: String,
        required: false,
        lowercase: true,
    },
    recipeTags: [
        {
            type: String,
            required: false,
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
    Actions: [
        {
            ActionTitle: {
                type: String,
                required: true
            },
            ActionText: {
                type: String,
                required: true
            },
        }
    ]
}
);
const recipesModel = mongoose.model("recipesTable", recipesSchema);

module.exports = recipesModel;