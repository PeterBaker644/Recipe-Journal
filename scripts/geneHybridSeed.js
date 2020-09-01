//change package json to the below code to go back to the seedDB.js
// "seed": "node scripts/seedDB.js"

let mongoose = require("mongoose");
let recipesModel = require("../models/recipesModel");
let ingredientsModel = require("../models/ingredientsModel");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recipes_hybrid_DB", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
//recipe seed
let recipesSeed = [
    {
        recipeName: "pancakes",
        cookingActions: [
            {
                action: "mix",
            }
        ]
    }, {
        recipeName: "pancakes Alt recipe",
        cookingActions: [
            {
                action: "mix",
            }
        ]
    }
];
//ingredients seed
let ingredientsSeed = [
    {
        name: "flour",
        quantity: 2,
        units: "cups"
    }, {
        name: "2flour",
        quantity: 2,
        units: "cups"
    }
];
async function seedAsyncFunction() {
    try {
        await recipesModel.deleteMany();
        await recipesModel.insertMany(recipesSeed);
        await ingredientsModel.deleteMany();
        await ingredientsModel.insertMany(ingredientsSeed);
        process.exit(0);
    } catch (err) {
        console.log(err);
    }    
}
seedAsyncFunction();