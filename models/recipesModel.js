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
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: false,
    },
    imageUrls: [
        {
            type: String,
            required: false,
        }
    ],
    category: {
        type: String,
        required: false,
        lowercase: true,
    },
    tags: [
        {
            type: String,
            required: false,
            lowercase: true,
        }
    ],
    ingredients: [
        {
            name: {
                type: String,
                required: true,
                lowercase: true,
            },
            quantity: {
                type: String,
                required: true,
                minimum: 0,
            },
            units: String
        }
    ],
    actions: [
        {
            title: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
        }
    ]
}
);
const recipesModel = mongoose.model("recipesTable", recipesSchema);

module.exports = recipesModel;