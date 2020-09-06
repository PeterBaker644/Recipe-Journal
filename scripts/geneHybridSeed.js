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
let recipesSeed = [
    {
        userID:"usernumber1",
        recipeName: "pancakes",
        recipeDescription:"this is a recipe description field",
        recipePicLinks:
        [
            "recipePicLink goes here",
            "recipePicLink2 goes here",
        ],
        recipeCategory:"baked recipes",
        recipeTags: [
            "dessert", "breakfast"
        ],
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
            },
            {
                ingredientName: "Sugar",
                quantity: 3,
                units: "gallons"
            }
        ],
        Actions: [
            {
                ActionTitle: "mix",
                ActionText: "mix and blah blah blah",
            }
        ]
    }, 
];
//ingredients seed
let ingredientsSeed = [
    {
        ingredientName:"pasta",
        ingredientIconLink: "pasta icon link example here",
        ingredientCategory: "pasta ingredient category here",
        ingredientCategoryIconLink:"ingredient category icon link here",
        totalUsedCount:15,
    },
    {
        ingredientName: "flour",
        totalUsedCount: 1,
        ingredientCategory: "baked goods"
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