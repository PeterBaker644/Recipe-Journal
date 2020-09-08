import React from "react";
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
import { useHistory } from "react-router-dom";
import TestCard from "../TestCard";

function RecipeInfo() {

    const { recipe, setValues } = useRecipe();
    const history = useHistory();
    const categories = ['appetizer', 'soup', 'salad', 'entree', 'side', 'dessert'];

    const onChange = (e) => {
        setValues({[e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(recipe);
        history.push('/create/ingredients');
    }

    return (
        <TestCard>
            <h2 className="font-brand">new recipe:</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label className="font-book-italic mt-2">Name:</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="recipeName"
                        value={recipe.recipeName}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label className="font-book-italic mt-2">Description:</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="recipeDescription"
                        value={recipe.recipeDescription}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label className="font-book-italic mt-2">Category:</label>
                    <select
                        // ref="userInput"  not valid for functional component
                        required
                        className="form-select"
                        name="category"
                        defaultValue="default"
                        //avalue of select was a string  array
                        //new property of category
                        //display what category so user can see it
                        //where are info coming from API
                        onChange={e => onChange(e)}
                    >
                        <option className="text-muted" name="default">Select a category...</option>
                        {categories.map(category => {
                            return (
                                <option key={category} value={category}>{category}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label className="font-book-italic mt-2">Tags:</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="recipeTags"
                        value={recipe.recipeTags}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <button
                        type="submit"
                        value="create"
                        className="rb-btn btn-primary mt-3"
                    >Create</button>
                </div>
            </form>
        </TestCard>
    )
}

export default RecipeInfo;