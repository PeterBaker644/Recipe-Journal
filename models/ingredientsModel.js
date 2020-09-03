const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
    ingredientName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    ingredientsCategory: {
        type: String,
        required: false,
        unique: true,
        lowercase: true,
    },

    //how many times the ingredient has been used total
    userUsedCount: {
        type: Number,
        "minimum": 0
    },   
    //TODO add individual user used count
    //TODO add category icon?
});

const ingredientsModel = mongoose.model("ingredientsTable", ingredientsSchema);

module.exports = ingredientsModel;