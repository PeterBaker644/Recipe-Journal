const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    iconLink: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
        lowercase: true,
    },
    categoryIconLink: {
        type: String,
        required: false,
    },
    usedCount: {
        type: Number,
        "minimum": 0
    },
});

const ingredientsModel = mongoose.model("ingredientsTable", ingredientsSchema);

module.exports = ingredientsModel;