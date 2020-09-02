const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
            name: String,
            quantity: Number,
            units: String
});

const ingredientsModel = mongoose.model("ingredientsTable", ingredientsSchema);

module.exports = ingredientsModel;