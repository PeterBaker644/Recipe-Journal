// const mongoose = require("mongoose");
// const db = require("../models");

// // This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactrecipes"
// );

const recipeSeed = [
  {
    title: "Chicken adobo",
    ingredients: [
      "1 pack chicken thigh",  //How many pieces? Costco size? Smaller?
      "1/2 cup soy sauce",
      "2/3 cups apple cide vinegar",
      "1-2 garlic cloves",
      "2 bay leaves",
      "1 onion, sliced",
      "salt and pepper to taste" 
    ],
    instructions: [
      "Put all ingredients in a pot and cover.",
      "Bring to boil.  Cover with lid and simmer for 40 minutes, turning half way through."
    ]
  },
  {
    title: "Egg salad sandwich",
    ingredients: [
      "2-4 eggs",
      "1 tablespoon mayo",
      "salt and pepper to taste" 
    ],
    instructions: [
      "Boil eggs for 7-9 minutes.",
      "Remove from stove, drain water and fill pan with cold water.",
      "Let sit and then peel eggs and crushed.",
      "Mix the mayo and eggs. Add salt and pepper to taste."
    ]
  },
  {
    title: "Peter's Mom's Soup",
    ingredients: [
      "40 ounce chicken broth",
      "1 can cream of chicken soup",
      "6 potatoes, cubed (yukon gold)",
      "1 package cream cheese",
      "bacon bits (cooked)",
      "pepper" 
    ],
    instructions: [
      "Melt cream cheese in a pot.",
      "Stir in cream of chicken, add broth, potatoes, bacon, pepper, and stir.",
      "Cover with lid and simmer for 3 hours or until potatoes are soft."
    ]
  },
  {
    title: "Aunt Betty's Sugar Cookies",
    ingredients: [
      "1 cup sugar",
      "1 cup brown sugar",
      "2 cups butter",
      "2 eggs",
      "2 teaspoons vanilla",
      "4 cups flour",
      "1 teaspoon salt",
      "2 teaspoons baking soda",
      "2 teaspoons creame of tartar"
    ],
    instructions: [
      "Preheat oven to 360F.",
      "Cream butter, sugars. Beat in eggs and vanilla.",
      "Stir in dry ingredients. Coat in sugar.",
      "Bake for 10 minutes."
    ]
  },
  {
    title: "Buttermilk pancakes",
    ingredients: [
      "1 cup flour",
      "1 teaspoon baking powder",
      "1/2 teaspoon baking soda",
      "1/4 teaspoon salt",
      "1 1/2 tablespoon sugar",
      "1 egg, lightly beaten",
      "1 1/2 cup buttermilk",
      "2 tablespoons unsalted butter"
    ],
    instructions: [
      "Whisk flour, baking soda, baking powder, salt, sugar.",
      "Add eggs, buttermilk, butter and whisk to combine. Batter should be lummpy.",
      "Heat a lightly oiled frying pan over medium high heat. Pour the batter onto pan, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot. "
    ]
  },
  {
    title: "Pork ribs ",
    ingredients: [
      "smoky pork seasoning (Lund's brand)",
      "barbeque sauce",
      "pork ribs"
    ],
    instructions: [
      "Preheat oven to 250F.",
      "Rub ribs with seasoning.",
      "Put wire reack in baking sheet. Wrap ribs in foil pack, meat side up on rack.",
      "Bake for 2 hours.  Unwrapp and bake for another 1-1.5 hours.",
      "Turn oven heat to 500F. Baste with sauce on both sides.",
      "Bake for 10 minutes and let rest."
    ]
  },
  {
    title: "Tortellini",
    ingredients: [
      "1 pound Italian sausage, casing removed",
      "3 cloves garlic, minced",
      "1 onion, diced",
      "2 cups chicken stock",
      "28 oz can crushed tomatoes",
      "1/2 teaspoon dried basil",
      "1/2 teaspoon dried oregano",
      "1/2 teaspoon read pepper flakes",
      "9 ounce chese tortellini",
      "1/3 half and half", //HOW MUCH?
      "1/4 grated parmesan"
    ],
    instructions: [
      "Heat olive oil in big pot and brown sausauge. Crumble sausage as it cooks, remove excess fat. Add garlic and onion until brown.",
      "Add stock, tomatoes, spices and 1 cup water. Season with salt and pepper.",
      "Bring to boil and stir in tortellini, reduce heat and simmer for 5-6 minutes.",
      "Add cream and parmesan.  Simmer for 4 minutes."
    ]
  },
  {
    title: "Peach Cobbler",
    ingredients: [
      "1/2 cup melted butter",
      "1 cup flour",
      "1 cup sugar",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "2/3 cup milk, room temp",
      "1 egg, room temp",
      "28 ounce sliced peaches",
      "1 cup sugar",
      "1 teaspoon cinnamon",
      "1/2 teaspoon nutmeg" 
    ],
    instructions: [
      "Preheat oven to 350F.",
      "Melt butter in pan.",
      "Mix dry ingredients. Stir in milk and egg. Pour over melted butter.",
      "Combine filling and spread over batter - don't stir.",
      "Bakie 35-45 minutes."
    ]
  },
  {
    title: "Zucchini bread",
    ingredients: [
      "3 cups flour",
      "1 teaspoon baking powder",
      "1 teaspoon baking soda",
      "1 teaspoon cinnamon", 
      "1 teaspoon salt",
      "2 1/2 cups sugar",
      "2 cups grated zucchini",
      "1 teaspon vanilla",
      "1 cup oil",
      "3 eggs, beaten"
    ],
    instructions: [
      "Preheat the oven to 350F.",
      "Sift flour, baking powder, baking soda, cinnamon, salt and sugar.",
      "In a separate bowl, combine vanilla, oil, and eggs.",
      "Add the dry and wet ingredients togetehr and fold in the zucchini.",
      "Pour into bread loaf container and bake for 1 hour."

    ]
  },
  {
    title: "Homemade Italian Turkey Sausage ",
    ingredients: [
      "1 teaspoon dried oregano",
      "1 1/2 teaspoons fennel seed, crushed",
      "2 teaspoon garlic powder",
      "1 pound lean ground turkey",
      "1/2 teaspoon black pepper",
      "1 teaspoon salt",
      "1 1/2 teaspoons sugar"
    ],
    instructions: [
      "In a bowl, combine the turkey, garlic powder, fennel seed, sugar, salt, oregano and pepper.",
      "Cover and refrigerate for at least 8 hours or overnight.",
      "Shape into eight patties.",
      "Cook in a nonstick skillet coated with nonstick cooking spray for about 3 minutes on each side or until a meat thermometer reads 165F.",
    ]
  },
  {
    title: "Country Potato Pancakes ",
    ingredients: [
      "baking powder",
      "2 eggs, slightly beaten",
      "2 tablespoons all-purpose flour",
      "1 tablespoon grated onions",
      "3 large potatoes, peeled",
      "1 teaspoon salt",
      "vegetable oil"
    ],
    instructions: [
      "Finely grate potatoes. Drain any liquid.",
      "Add eggs, onion, flour, salt and baking powder.", 
      "In a frying pan, add oil to the depth of 1/8 in.",
      "Heat over medium-high (375F).", 
      "Drop batter by heaping tablespoonfuls in hot oil. ",
      "Flatten to form patties. ",
      "Fry until golden brown then turn and cook other side."
    ]
  },
  {
    title: "Chicken Tacos - the Tahiti Way ",
    ingredients: [
      "black pepper",
      "6 boneless chicken breasts",
      "cilantro, chopped",
      "10 corn tortillas",
      "2 garlic cloves, diced",
      "1/2 large onion, sliced",
      "1 (16 ounce) jar pepperoncini pepper"
    ],
    instructions: [
      "Combine everything including the ENTIRE jar of peppers, juice and all, but the tortillas into a slow cooker.",
      "Cook on low 5 hours.",
      "Shred chicken with 2 forks.",
      "Mix well with everything in the pot.",
      "Heat tortillas till soft.",
      "Serve warm."
    ]
  },
  {
    title: "Tomato-Mint Quinoa Salad ",
    ingredients: [
      "almonds",
      "cucumber",
      "cumin",
      "lime juice",
      "onions",
      "quinoa",
      "radish",
      "raisins",
      "salt",
      "vegetable oil",
      "tomato",
      "water"
    ],
    instructions: [
      "Bring water to boil in a small saucepan.",
      "Pour in quinoa, raisins, and a pinch of salt. Cover, and let simmer for 12 to 15 minutes, then remove from heat, and allow to cool to room temperature.",
      "Toss together the tomatoes, onion, radish, cucumber, and almonds in a large bowl.",
      "Stir in the cooled quinoa, then season with mint, parsley, cumin, lime juice, sesame oil, and salt. Chill 1 to 2 hours before serving."
    ]
  }
];

// db.Recipe.remove({})
//   .then(() => db.Recipe.collection.insertMany(recipeSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
