const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    //for future goal, this userID can be set to PUBLIC ? and that will
    // determine that this is a public recipe that cant be edited, but can be up/down voted
    //TODO add upvote field?
    userID: {
        type: String,
        required: true,
    },
    recipeName: {
        type: String,
        required: true,
        lowercase: true,
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