const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
    ingredientName: {
        type: String,
        required: true,
        lowercase: true,
    },
    ingredientIconLink: {
        type: String,
        required: false,
    },
    ingredientCategory: {
        type: String,
        required: false,
        lowercase: true,
    },
    ingredientCategoryIconLink: {
        type: String,
        required: false,
    },
    totalUsedCount: {
        type: Number,
        "minimum": 0
    },
});

const ingredientsModel = mongoose.model("ingredientsTable", ingredientsSchema);

module.exports = ingredientsModel;