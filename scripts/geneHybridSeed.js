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
        recipeDescription:"this is a recipe description field",
        recipeCategory:"baked recipes",
        recipeTags: [
            "dessert", "breakfast"
        ],
        ingredients: [
            {
                ingredientName: "flour",
                quantity: 2,
                units: "cups"
            }
        ],
        cookingActions: [
            {
                action: "mix",
            }
        ]
    }, 
    {
        recipeName: "pancakes Alt recipe",
        ingredients: [
            {
                ingredientName: "flour",
                quantity: 2,
                units: "cups"
            },
            {
                ingredientName: "eggs",
                quantity: 2,
                units: "Grade A"
            }
        ],
        cookingActions: [
            {
                action: "mix2",
            }
        ]
    }
];
//ingredients seed
let ingredientsSeed = [
    {
        ingredientName: "flour",
        userUsedCount: 1,
        ingredientsCategory: "baked goods"
    },
    {
        ingredientName: "eggs",
    },
    {
        ingredientName: "milk",
    },
];
async function seedAsyncFunction() {
    try {
        await recipesModel.deleteMany();
        await ingredientsModel.deleteMany();
        await recipesModel.insertMany(recipesSeed);
        await ingredientsModel.insertMany(ingredientsSeed);
        process.exit(0);
    } catch (err) {
        console.log(err);
    }
}
seedAsyncFunction();