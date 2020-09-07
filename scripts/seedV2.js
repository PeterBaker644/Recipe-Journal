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
        userID:"", //DO NOT NEED TO ANYINPUT ANYTHING?
        recipeName: "Chicken Adobo",
        recipeDescription:"This classic adobo recipe is simple to make and famous with all who have tasted it. It is delicious served over rice.",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"entree", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "chicken", "dinner", "easy",
        ],
        ingredients: [
            {
                ingredientName: "chicken thigh or drumsticks",
                quantity: 2,
                units: "lb"
            },
            {
                ingredientName: "soy sauce",
                quantity: .5,
                units: "cup"
            },
            {
                ingredientName: "apple cider vinegar",
                quantity: .66,
                units: "cup"
            },
            {
                ingredientName: "garlic",
                quantity: 2,
                units: "cloves"
            },
            {
                ingredientName: "bay leaves",
                quantity: 2,
                units: "" 
            },
            {
                ingredientName: "onion",
                quantity: 1,
                units: ""
            },
            {
                ingredientName: "salt",
                quantity: 0,
                units: "to taste"
            },
            {
                ingredientName: "pepper",
                quantity: 0,
                units: "to taste"
            }
        ],
        cookingActions: [
            {
                cookingActionTitle: "Step 1", 
                cookingActionText: "Put all ingredients in a pot and cover. Bring pot to boil.",
            },
            {
                cookingActionTitle: "Step 2",  
                cookingActionText: "Cover with lid and simmer for 40 minutes, turning have way through."
            }
        ]
    }, 
    {
        userID:"", 
        recipeName: "Egg Salad Sandwich",
        recipeDescription:"This sandwich is so easy to make, you'd wish you've made it earlier.",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"entree", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "egg", "lunch", "easy",
        ],
        ingredients: [
            {
                ingredientName: "eggs",
                quantity: 3,
                units: ""  
            },
            {
                ingredientName: "mayo",
                quantity: 1,
                units: "tbspn"
            },
            {
                ingredientName: "salt",
                quantity: 0,
                units: "to taste"
            },
            {
                ingredientName: "pepper",
                quantity: 0,
                units: "to taste"
            }
        ],
        cookingActions: [
            {
                cookingActionTitle:"Step 1",
                cookingActionText: "Boil eggs for 7-9 minutes. Remove from stove, drain water and fill pan with cold water.",
            },
            {
                cookingActionTitle: "Step 2", 
                cookingActionText: "Let sit and then peel eggs and crushed. Mix the mayo and eggs. Add salt and pepper to taste.",
            }
        ]
    },
    {
        userID:"", 
        recipeName: "Peter's Mom's Soup",
        recipeDescription:"Easy to make soup. Sure makes you think of home!",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"soup", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "soup", "chicken", "potato", "slow-cook"
        ],
        ingredients: [
            {
                ingredientName: "chicken broth",
                quantity: 40,
                units: "oz"  
            },
            {
                ingredientName: "cream of chicken soup",
                quantity: 1,
                units: "can"
            },
            {
                ingredientName: "potatoes, cubed (Yukon)",
                quantity: 6,
                units: "" 
            },
            {
                ingredientName: "cream cheese",
                quantity: 1,
                units: "package"
            },
            {
                ingredientName: "bacon bits",
                quantity: 1,
                units: "to taste" 
            },
            {
                ingredientName: "black pepper",
                quantity: 0,
                units: "to taste"
            }
        ],
        cookingActions: [
            {
                cookingActionTitle:"Step 1",
                cookingActionText: "Melt cream cheese in a pot.",
            },
            {
                cookingActionTitle: "Step 2", 
                cookingActionText: "Stir in cream of chicken, add broth, potatoes, bacon, pepper, and stir.",
            },
            {
                cookingActionTitle: "Step 3",
                cookingActionText: "Cover with lid and simmer for 3 hours or until potatoes are soft.",
            }
        ]
    },
    {
        userID:"", //auto generate?
        recipeName: "Sugar Cookie",
        recipeDescription:"The best cookies to enjoy anytime of the year!",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"dessert", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "Aunt Betty's", "cookies", "sweets", "holiday", "treats"
        ],
        ingredients: [
            {
                ingredientName: "sugar",
                quantity: 1,
                units: "cup"  
            },
            {
                ingredientName: "brown sugar",
                quantity: 1,
                units: "cup"
            },
            {
                ingredientName: "butter",
                quantity: 2,
                units: "cup"
            },
            {
                ingredientName: "eggs",
                quantity: 2,
                units: ""
            },
            {
                ingredientName: "vanilla extract",
                quantity: 2,
                units: "tspn"
            },
            {
                ingredientName: "flour",
                quantity: 4,
                units: "cup"
            },
            {
                ingredientName: "salt",
                quantity: 1,
                units: "tspn"
            },
            {
                ingredientName: "baking soda",
                quantity: 1,
                units: "tspn"
            },
            {
                ingredientName: "cream of tartar",
                quantity: 2,
                units: "tspn"
            }
        ],
        cookingActions: [
            {
                cookingActionTitle: "Step 1", 
                cookingActionText: "Preheat oven to 360F.",
            },
            {
                cookingActionTitle: "Step 2",
                cookingActionText: "Cream butter, sugars. Beat in eggs and vanilla.",
            },
            {
                cookingActionTitle: "Step 3", 
                cookingActionText: "Stir in dry ingredients. Coat in sugar.",
            },
            ,
            {
                cookingActionTitle: "Step 4", 
                cookingActionText: "Bake for 10 minutes.",
            },
        ]
    },
    {
        userID:"", 
        recipeName: "Buttermilk Pancakes",
        recipeDescription:"A decadent weekend breakfast for when you want to treat yourself.",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"entree", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "breakfast", "treat", "weekend", "pancake"
        ],
        ingredients: [
            {
                ingredientName: "flour",
                quantity: 1,
                units: "cup"  
            },
            {
                ingredientName: "baking powder",
                quantity: 1,
                units: "tspn"
            },
            {
                ingredientName: "baking soda",
                quantity: .5,
                units: "tspn"
            },
            {
                ingredientName: "salt",
                quantity: .25,
                units: "tspn"
            },
            {
                ingredientName: "sugar",
                quantity: 1.5, 
                units: "tbspn",
            },
            {
                ingredientName: "eggs, lightly beaten",
                quantity: 1,
                units: ""
            },
            {
                ingredientName: "buttermilk",
                quantity: 1.5,
                units: "cup"
            },
            {
                ingredientName: "butter, unsalted",
                quantity: 2,
                units: "tbspn"
            }
        ],
        cookingActions: [
            {
                cookingActionTitle:"Step 1", 
                cookingActionText: "Whisk flour, baking soda, baking powder, salt, sugar.",
            },
            {
                cookingActionTitle: "Step 2",//WHAT TO PUT HERE?
                cookingActionText: "Add eggs, buttermilk, butter and whisk to combine. Batter should be lummpy.",
            },
            {
                cookingActionTitle: "Step 3",//WHAT TO PUT HERE?
                cookingActionText: "Heat a lightly oiled frying pan over medium high heat. Pour the batter onto pan, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
            }
        ]
    },
    {
        userID:"", 
        recipeName: "Pork ribs",
        recipeDescription:"A versatile dish to be enjoyed with salad, on a sandwich, or with vegetables and potatoes or rice. ",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"entree", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "pork", "ribs", "BBQ", 
        ],
        ingredients: [
            {
                ingredientName: "smoky pork seasoning (Lund's brand)",
                quantity: 1,
                units: "package"  
            },
            {
                ingredientName: "BBQ sauce",
                quantity: 0,
                units: "to taste"
            },
            {
                ingredientName: "pork ribs",
                quantity: 1,
                units: "rack" 
            }
        ],
        cookingActions: [
            {
                cookingActionTitle:"Step 1", 
                cookingActionText:"Preheat oven to 250F.",
            },
            {
                cookingActionTitle: "Step 2",
                cookingActionText: "Rub ribs with seasoning.",
            },
            {
                cookingActionTitle: "Step 3",
                cookingActionText:"Put wire rack in baking sheet. Wrap ribs in foil pack, meat side up on rack.",
            },
            {
                cookingActionTitle: "Step 4",
                cookingActionText: "Bake for 2 hours.  Unwrap and bake for another 1-1.5 hours.",

            },
            {
                cookingActionTitle: "Step 5",
                cookingActionText: "Turn oven heat to 500F. Baste with sauce on both sides.",

            },
            {
                cookingActionTitle: "Step 6",
                cookingActionText: "Bake for 10 minutes and let rest.",
            }
        ]
    },
    {
        userID:"",
        recipeName: "Tortellini",
        recipeDescription:"A cheese, meaty, Italian pasta dish that is sure to remind  you of your trip to Italy!",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"entree", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "pasta", "italian", "sausage", "cheese"
        ],
        ingredients: [
            {
                ingredientName: "Italian sausage, casing removed",
                quantity: 1,
                units: "lb"  
            },
            {
                ingredientName: "garlic, minced",
                quantity: 3,
                units: "cloves"
            },
            {
                ingredientName: "onion, diced",
                quantity: 1,
                units: ""
            },
            {
                ingredientName: "chicken stock",
                quantity: 2,
                units: "cup"
            },
            {
                ingredientName: "crushed tomato",
                quantity: 28,
                units: "oz"
            },
            {
                ingredientName: "dried basil",
                quantity: .5,
                units: "tspn"
            },
            {
                ingredientName: "dried oregano",
                quantity: .5,
                units: "tspn"
            },
            {
                ingredientName: "red pepper flakes",
                quantity: .5,
                units: "tspn"
            },
            {
                ingredientName: "cheese tortellini",
                quantity: 9,
                units: "oz"
            },
            {
                ingredientName: "half and half",
                quantity: .33,
                units: "cup"
            },
            {
                ingredientName: "parmesan, grated",
                quantity: .25,
                units: "cup"
            }
        ],
        cookingActions: [
            {
                cookingActionTitle:"Step 1", 
                cookingActionText:"Heat olive oil in big pot and brown sausage. Crumble sausage as it cooks, remove excess fat. Add garlic and onion until brown.",

            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Add stock, tomatoes, spices and 1 cup water. Season with salt and pepper.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Bring to boil and stir in tortellini, reduce heat and simmer for 5-6 minutes.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Add cream and parmesan.  Simmer for 4 minutes."
            }
        ]
    },
    {
        userID:"", //auto generate?
        recipeName: "Peach Cobbler",
        recipeDescription:"A summer delight, pairs perfectly with ice cream!",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"dessert", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "peach", "dessert", "treat",
        ],
        ingredients: [
            {
                ingredientName: "butter, melted",
                quantity: 1/2,
                units: "cup"  
            },
            {
                ingredientName: "flour",
                quantity: 1,
                units: "cup"
            },
            {
                ingredientName: "sugar",
                quantity: 1,
                units: "cup"
            },
            {
                ingredientName: "baking powder",
                quantity: 2,
                units: "tspn"
            },
            {
                ingredientName: "salt",
                quantity: 1/2,
                units: "tspn"
            },
            {
                ingredientName: "milk, room temp",
                quantity: 2/3,
                units: "cup"
            },
            {
                ingredientName: "egg, room temp",
                quantity: 1,
                units: "" 
            },
            {
                ingredientName: "peaches, sliced",
                quantity: 28,
                units: "oz"
            },
            {
                ingredientName: "sugar",
                quantity: 1,
                units: "cup"
            },
            {
                ingredientName: "cinnamon, ground",
                quantity: 1,
                units: "tspn"
            },
            {
                ingredientName: "nutmeg, ground",
                quantity: 1/2,
                units: "tspn"
            }
        ],
        cookingActions: [
            {
                cookingActionTitle:"", //WHAT TO PUT HERE?
                cookingActionText: "Preheat oven to 350F.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Melt butter in pan.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Mix dry ingredients. Stir in milk and egg. Pour over melted butter.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Combine filling and spread over batter - don't stir.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Bake 35-45 minutes.",
            },
        ]
    },
    {
        userID:"", //auto generate?
        recipeName: "Zucchini bread",
        recipeDescription:"",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"dessert", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "bread", "snack", "treat",
        ],
        ingredients: [
            {
                ingredientName: "flour",
                quantity: 3,
                units: "cups"  
            },
            {
                ingredientName: "baking powder",
                quantity: 1,
                units: "tspn"
            },
            {
                ingredientName: "baking soda",
                quantity: 1,
                units: "tspn"
            },
            {
                ingredientName: "cinnamon",
                quantity: 1,
                units: "tspn"
            },
            {
                ingredientName: "salt",
                quantity: 1,
                units: "tspn"
            },
            {
                ingredientName: "sugar",
                quantity: 1.5,
                units: "cups"
            },
            {
                ingredientName: "zuchini, grated",
                quantity: 2,
                units: "cups"
            },
            {
                ingredientName: "vanilla extract",
                quantity: 1,
                units: "tspn"
            },
            {
                ingredientName: "vegetable oil",
                quantity: 1,
                units: "cup"
            },
            {
                ingredientName: "eggs, beaten",
                quantity: 1,
                units: ""
            }
        ],
        cookingActions: [
            {
                cookingActionTitle:"", //WHAT TO PUT HERE?
                cookingActionText: "Preheat the oven to 350F.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Sift flour, baking powder, baking soda, cinnamon, salt and sugar.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "In a separate bowl, combine vanilla, oil, and eggs.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Add the dry and wet ingredients together and fold in the zucchini.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Pour into bread loaf container and bake for 1 hour.",
            }
        ]
    },
    {
        userID:"", //auto generate?
        recipeName: "Homemade Italian Turkey Sausage",
        recipeDescription:"",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"entree", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "Italian", "sausage",
        ],
        ingredients: [
            {
                ingredientName: "dried oregano",
                quantity: 1,
                units: "tspn"  
            },
            {
                ingredientName: "fennel seed, crushed",
                quantity: 1.5,
                units: "tspn"
            },
            {
                ingredientName: "garlic powder",
                quantity: 2,
                units: "tspn"
            },
            {
                ingredientName: "lean ground turkey",
                quantity: 1,
                units: "lb"
            },
            {
                ingredientName: "black pepper",
                quantity: 1/2,
                units: "tspn"
            },
            {
                ingredientName: "salt",
                quantity: 1,
                units: "tspn"
            },
            {
                ingredientName: "sugar",
                quantity: 1.5,
                units: "tspn"
            }
        ],
        cookingActions: [
            {
                cookingActionTitle:"", //WHAT TO PUT HERE?
                cookingActionText: "In a bowl, combine the turkey, garlic powder, fennel seed, sugar, salt, oregano and pepper.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Cover and refrigerate for at least 8 hours or overnight.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Shape into eight patties.",
            },
            ,
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText:  "Coated nonstick pan with cooking spray and cook for 3 minutes on each side or until meat thermometer reads 165F.",
            },
        ]
    },
    {
        userID:"", //auto generate?
        recipeName: "Country Potato Pancake",
        recipeDescription:"",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"entree", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "pancake", "potato", "breakfast", "savory",
        ],
        ingredients: [
            {
                ingredientName: "baking powder",
                quantity: 1,
                units: "tspn"  
            },
            {
                ingredientName: "eggs, lightly beaten",
                quantity: 2,
                units: ""
            },
            {
                ingredientName: "all-purpose flour",
                quantity: 2,
                units: "tbspn"
            },
            {
                ingredientName: "onion, grated",
                quantity: 1,
                units: "tbspn"
            },
            {
                ingredientName: "larg potatoes, peeled",
                quantity: 3,
                units: ""
            },
            {
                ingredientName: "salt",
                quantity: 1,
                units: "tspn"
            },
            {
                ingredientName: "vegetable oil",
                quantity: 1,
                units: "tspn"
            }
        ],
        cookingActions: [
            {
                cookingActionTitle:"", //WHAT TO PUT HERE?
                cookingActionText: "Finely grate potatoes. Drain any liquid.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Add eggs, onion, flour, salt and baking powder.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText:"In a frying pan, add oil to the depth of 1/8 in.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Heat over medium-high (375F).",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Drop batter by heaping tablespoonfuls in hot oil. ",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Flatten to form patties. ",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText:  "Fry until golden brown then turn and cook other side."
            },
        ]
    },
    {
        userID:"", //auto generate?
        recipeName: "Chicken Tacos - the Tahiti Way",
        recipeDescription:"",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"entree", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "tacos", "chicken", "Tahiti"
        ],
        ingredients: [
            {
                ingredientName: "black pepper",
                quantity: 0,
                units: "to taste"  
            },
            {
                ingredientName: "chicken breast, boneless",
                quantity: 6,
                units: ""
            },
            {
                ingredientName: "cilantro, chopped",
                quantity: 1,
                units: "handful"
            },
            {
                ingredientName: "corn tortillas",
                quantity: 10,
                units: ""
            },
            {
                ingredientName: "garlic, diced",
                quantity: 2,
                units: "cloves"
            },
            {
                ingredientName: "large onion, sliced",
                quantity: 1/2,
                units: ""
            },
            {
                ingredientName: "pepperoncini pepper",
                quantity: 16,
                units: "oz"
            }
        ],
        cookingActions: [
            {
                cookingActionTitle:"", //WHAT TO PUT HERE?
                cookingActionText: "Combine everything including the ENTIRE jar of peppers, juice and all, but the tortillas into a slow cooker.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Cook on low 5 hours.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText:  "Shred chicken with 2 forks.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Mix well with everything in the pot.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Heat tortillas till soft.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Served warm.",
            },
        ]
    },
    {
        userID:"", //auto generate?
        recipeName: "Tomato-Mint Quinoa Salad",
        recipeDescription:"A delicious summer delight using fresh ingredients from the farmer's markets.",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "salad", "tomato", "quinoa",
        ],
        ingredients: [
            {
                ingredientName: "water",
                quantity: 2.5,
                units: "cups"  
            },
            {
                ingredientName: "quinoa",
                quantity: 1.25,
                units: "cups"
            },
            {
                ingredientName: "raisins",
                quantity: .75,
                units: "cups"
            },
            {
                ingredientName: "salt",
                quantity: 1,
                units: "pinch"
            },
            {
                ingredientName: "medium tomato, diced",
                quantity: 2,
                units: ""
            },
            {
                ingredientName: "medium onion, minced",
                quantity: 1,
                units: ""
            },
            {
                ingredientName: "radish, quartered",
                quantity: 10,
                units: ""
            },
            {
                ingredientName: "cucumber, diced",
                quantity: .5,
                units: ""
            },
            {
                ingredientName: "sliced almonds, toasted",
                quantity: 2,
                units: "tbspn"
            },
            {
                ingredientName: "fresh parsley, chopped",
                quantity: 2,
                units: "tbspn"
            },
            {
                ingredientName: "ground cumin",
                quantity: 1,
                units: "tspn"
            },
            {
                ingredientName: "lime juice",
                quantity: 1/4,
                units: "cup"
            },
            {
                ingredientName: "same oil",
                quantity: 2,
                units: "tbspn"
            },
            {
                ingredientName: "salt",
                quantity: 1/4,
                units: "tspn to taste"
            }
        ],
        cookingActions: [
            {
                cookingActionTitle:"", //WHAT TO PUT HERE?
                cookingActionText: "Bring water to boil in a small saucepan. Pour in quinoa, raisins, and a pinch of salt. Cover, and let simmer for 12 to 15 minutes, then remove from heat, and allow to cool to room temperature.",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "Toss together the tomatoes, onion, radish, cucumber, and almonds in a large bowl. Stir in the cooled quinoa, then season with mint, parsley, cumin, lime juice, sesame oil, and salt. Chill 1 to 2 hours before serving.",
            }
        ]
    },
    {
        userID:"", //auto generate?
        recipeName: "",
        recipeDescription:"",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "", "", "",
        ],
        ingredients: [
            {
                ingredientName: "",
                quantity: ,
                units: ""  
            },
            {
                ingredientName: "",
                quantity: ,
                units: ""
            },
            {
                ingredientName: "",
                quantity: ,
                units: ""
            },
            {
                ingredientName: "",
                quantity: ,
                units: ""
            }
        ],
        cookingActions: [
            {
                cookingActionTitle:"", //WHAT TO PUT HERE?
                cookingActionText: "",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: ""
            },
        ]
    },
    /////THIS IS THE LAST SAMPLE ONE ==================
    {
        userID:"", //auto generate?
        recipeName: "",
        recipeDescription:"",
        ingredientPictureLink:"ingredientPictureLink goes here",
        recipeCategory:"", 
        ingredientCategoryIconLink: "ingredientCategoryIconLink goes here",
        recipeTags: [
            "", "", "",
        ],
        ingredients: [
            {
                ingredientName: "",
                quantity: ,
                units: ""  
            },
            {
                ingredientName: "",
                quantity: ,
                units: ""
            },
            {
                ingredientName: "",
                quantity: ,
                units: ""
            },
            {
                ingredientName: "",
                quantity: ,
                units: ""
            }
        ],
        cookingActions: [
            {
                cookingActionTitle:"", //WHAT TO PUT HERE?
                cookingActionText: "",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: "",
            },
            {
                cookingActionTitle: "",//WHAT TO PUT HERE?
                cookingActionText: ""
            },
        ]
    }
];



//Is there anything we need to do for the following below?
//Only thing that I see different is the totalUseCount...?

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