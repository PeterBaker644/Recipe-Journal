const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
        required: true,
    },
    comments: [
        {
            text: {
                type: String,
                required: false,
            },
            dateCreated: {
                type: Date,
                default: Date.now,
                required: true,
            },
        }
    ],
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