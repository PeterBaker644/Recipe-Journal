import React, { useState } from "react";
import API from "../../utils/API";
import { UlList, RecipeListItem, IngredientsListItem, NestedIngredientsList, NestedTagsList, } from "../../component/RecipeList/index";
import firebase from 'firebase';

// import 'firebase/storage'; 
// try {
//     const serviceAccount = require("./serviceAccountKey.json");
//     firebase.initializeApp({
//         serviceAccount
//     });
// } catch (error) {
//     console.log("-------------------------------------------");
//     console.error(error);

// }

// var storage = require('@google-cloud/storage');

// const storage = gcloud.storage({
//     projectId: 'recipe-box-6f07a',
//     keyFilename: 'service-account-credentials.json',
// });

// const bucket = storage.bucket('recipe-box-6f07a.appspot.com')



// Get a reference to the storage service, which is used to create references in your storage bucket





function Genepagetest() {
    const [recipes, setRecipes] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    let [newRecipe, setNewRecipe] = useState([
        {
            userID: "",
            name: "",
        },
    ]);


    const upload = event => {
        event.preventDefault();
        // Points to the root reference
        var storageRef = firebase.storage().ref();


        // // Points to the root reference
        // var storageRef = firebase.storage().ref();

        // // Points to 'images'
        // var imagesRef = storageRef.child('images');

        // // Points to 'images/space.jpg'
        // // Note that you can use variables to create child values
        // var fileName = 'space.jpg';
        // var spaceRef = imagesRef.child(fileName);

        // // File path is 'images/space.jpg'
        // var path = spaceRef.fullPath

        // // File name is 'space.jpg'
        // var name = spaceRef.name

        // // Points to 'images'
        // var imagesRef = spaceRef.parent;


        var peterPic = "./PeterReactionFace.jpg";
        var storageRef = firebase.storage().ref("recipePics/" + peterPic.name);
        var uploadProgressTask = storageRef.put(peterPic);

        uploadProgressTask.on('state_changed',
            function progress(snapshot) {
                console.log(snapshot);
            },
            function error(err) {
                console.log(err);
            },
            function complete() {
                console.log("complete");
            },
        )
    };
    const choosefile = event => {
        event.preventDefault();

    };

    const recipeSubmit = event => {
        event.preventDefault();
        API.getAllRecipes()
            .then(res => setRecipes(res.data))
            .catch(err => console.log(err));
    };
    const ingredientsSubmit = event => {
        event.preventDefault();
        API.getAllIngredients()
            .then(res => setIngredients(res.data))
            .catch(err => console.log(err));
    };

    const createRecipeSubmit = event => {
        event.preventDefault();

        console.log('creating dummy object');

        function setDummyObject() {
            setNewRecipe({
                userID: "usernumber1",
                name: "asdfasdfasdf pancakes",
                description: "this is a recipe description field",
                imageUrls:
                    [
                        "recipePicLink goes here",
                        "recipePicLink2 goes here",
                    ],
                category: "baked recipes",
                tags: [
                    "dessert", "breakfast"
                ],
                ingredients: [
                    {
                        name: "flour",
                        quantity: 2,
                        units: "cups"
                    },
                    {
                        name: "eggs",
                        quantity: 2,
                        units: "Grade A"
                    },
                    {
                        name: "Sugar",
                        quantity: 3,
                        units: "gallons"
                    }
                ],
                actions: [
                    {
                        title: "mix",
                        text: "mix and blah blah blah",
                    }
                ]
            })
        };

        setDummyObject();

        API.createRecipe(newRecipe)
            .catch(err => console.log(err));
    };

    const createRecipeUpdateSubmit = event => {
        event.preventDefault();
        API.updateRecipe()
            .then(res => setNewRecipe(res.data))
            .catch(err => console.log(err));
    };
    const deleteRecipe = event => {
        event.preventDefault();
        // manually put the recipe id here to verify this works 
        API.deleteRecipe("5f5550b4ea82aa49a4f93a84")
            .catch(err => console.log(err));
    };

    const oneRecipe = event => {
        event.preventDefault();
        API.getOneRecipe("5f5550b4ea82aa49a4f93a84")
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };




    return (
        <div>

            <h1>Genes testing page</h1>
            <button onClick={upload} className="btn btn-primary">
                {" "}upload{" "}
            </button>
            <button onClick={choosefile} className="btn btn-primary">
                {" "}choosefile{" "}
            </button>

            <button onClick={deleteRecipe} className="btn btn-primary">
                {" "}deleteRecipe Test{" "}
            </button>

            <button onClick={createRecipeSubmit} className="btn btn-primary">
                {" "}create Test{" "}
            </button>

            <button onClick={createRecipeUpdateSubmit} className="btn btn-primary">
                {" "}Update Test{" "}
            </button>

            <button onClick={oneRecipe} className="btn btn-primary">
                {" "}One recipe{" "}
            </button>
            <button onClick={recipeSubmit} className="btn btn-primary">
                {" "}RecipeList{" "}
            </button>
            <UlList>
                {recipes.map(recipe => {
                    return (<div>
                        <RecipeListItem
                            key={recipe._id}
                            name={recipe.name}
                            description={recipe.description}
                            imageUrls={recipe.imageUrls}
                            category={recipe.category}
                            imageUrls={recipe.imageUrls[0]}
                            title={recipe.actions[0].title}
                            text={recipe.actions[0].text}
                        />
                        <h2>tags UL list</h2>
                        <UlList>
                            {recipe.tags.map(tags => {
                                return (
                                    <NestedTagsList
                                        key={tags._id}
                                        tags={tags}
                                    />

                                );
                            })}

                        </UlList>
                        <h2>ingredients UL list</h2>
                        <UlList>
                            {recipe.ingredients.map(ingredients => {
                                return (
                                    <NestedIngredientsList
                                        key={ingredients._id}
                                        name={ingredients.name}
                                        quantity={ingredients.quantity}
                                        units={ingredients.units}
                                    />

                                );
                            })}

                        </UlList>
                    </div>
                    );
                })}

            </UlList>

            <button onClick={ingredientsSubmit} className="btn btn-primary">
                {" "}Ingredients List{" "}
            </button>
            <UlList>
                {ingredients.map(ingredient => {
                    return (
                        <IngredientsListItem
                            key={ingredient._id}
                            name={ingredient.name}
                            ingredientIconLink={ingredient.ingredientIconLink}
                            ingredientCategory={ingredient.ingredientCategory}
                            ingredientCategoryIconLink={ingredient.ingredientCategoryIconLink}
                            totalUsedCount={ingredient.totalUsedCount}

                        />
                    );
                })}
            </UlList>
        </div>
    );
}
export default Genepagetest;