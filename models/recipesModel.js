const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    recipeName: String,
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