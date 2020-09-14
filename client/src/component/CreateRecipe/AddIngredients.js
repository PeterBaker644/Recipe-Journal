import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
import TableBody from "../DynamicTable/TableBody";
import TableHeader from "../DynamicTable/TableHeader";
import TableButton from "../DynamicTable/TableButton";
import TestCard from "../TestCard";

function AddIngredients() {

    const { recipe, setValues } = useRecipe();
    const history = useHistory();

    const initState = ({
        name: "",
        quantity: "",
        unit: ""
    })

    const [ingredient, setIngredient] = useState(initState);
    const [ingredients, setIngredients] = useState([...recipe.ingredients || ""]);

    const clearIngredients = (e) => {
        setIngredients([]);
    }

    const completeIngredients = (e) => {
        e.preventDefault();
        setValues({ingredients: ingredients});
        history.push('/create/steps');
    }

    const deleteIngredient = (index) => {
        let array = [...ingredients];
        array.splice(index, 1);
        setIngredients(array);
    }
    
    useEffect(() => {
        console.log("Recipe is:", recipe);
        console.log("Ingredients list is:", ingredients);
        console.log("Recipe contains the following ingredients:", recipe.recipeIngredients);
    })
    
    const onChange = (e) => {
        setIngredient({...ingredient, [e.target.name]: e.target.value.toLowerCase()});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIngredients([...ingredients, ingredient]);
        setIngredient(initState);
    }

    return (
        <TestCard>
            <h1 className="display-1 font-brand">add ingredients:</h1>
            <div className="table-responsive">
                <table className="table font-book">
                    <TableHeader/>
                    {/* This really ought to be fixed at some point to include table headers */}
                    <TableBody tableContents={ingredients} delete={deleteIngredient}/>
                </table>
            </div>
            <form onSubmit={e => onSubmit(e)} className="row g-2">
                <div className="form-group col-7">
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="name"
                        value={ingredient.name}
                        onChange={e => onChange(e)}
                        placeholder="Ingredient"
                        aria-label="Ingredient"
                    />
                </div>
                <div className="form-group col">
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="quantity"
                        value={ingredient.quantity}
                        onChange={e => onChange(e)}
                        placeholder="Amount"
                        aria-label="Amount"
                    />
                </div>
                <div className="form-group col">
                    <input
                        type="text"
                        className="form-control"
                        name="unit"
                        value={ingredient.unit}
                        onChange={e => onChange(e)}
                        placeholder="Measure"
                        aria-label="Measure"
                    />
                </div>
                <div className="col-1 d-flex align-items-center">
                    <button 
                        type="submit" 
                        className="rb-btn-icon btn-light p-0"
                    >
                        <TableButton/>
                    </button>
                </div>
            </form>
            <div className="mt-4 d-flex justify-content-between">
                <div className="d-flex justify-content-center">
                    <Link className="rb-btn btn-danger" to={{pathname: "/create/info"}}>Restart</Link>
                    <button type="button" className="rb-btn btn-warning ml-2" onClick={clearIngredients}>Reset</button>
                </div>
                <button className="rb-btn btn-success" onClick={completeIngredients}>Add steps</button>
            </div>
        </TestCard>
    )
}

export default AddIngredients;