import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
import TableControl from "../DynamicTable/TableControl";
import TableButton from "../DynamicTable/TableButton";
import TestCard from "../TestCard";
import ExitBtn from "./ExitBtn";

function AddIngredients() {

    const { recipe, setValues } = useRecipe();
    const history = useHistory();
    const editMode = !!recipe._id;

    const initState = ({
        name: "",
        details: "",
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
        setValues({ ingredients: ingredients });
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
        setIngredient({ ...ingredient, [e.target.name]: e.target.value.toLowerCase() });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIngredients([...ingredients, ingredient]);
        setIngredient(initState);
    }

    return (
        <TestCard>
            <div className="d-flex justify-content-between">
                <h2 className="font-brand">
                    {editMode ? <span>edit ingredients:</span> : <span>add ingredients:</span>}
                </h2>
                <Link className="d-flex btn-delete font-sans" to={{ pathname: "/recipebox" }}>
                    <ExitBtn />
                </Link>
            </div>
            <TableControl ingredients={ingredients} delete={deleteIngredient} header={true}></TableControl>
            <form onSubmit={e => onSubmit(e)} className="">
                <div className="mb-2 row g-2">
                    <div className="col-8 d-flex align-items-stretch">
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
                    <div className="col">
                        <button type="submit" className="btn-block d-flex rb-btn-subtle align-items-center justify-content-center">
                            <span className="text-nowrap text-muted">ADD INGREDIENT</span>
                            <span
                                className="rb-btn-icon btn-transparent ml-2"
                            >
                                <TableButton />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="row g-2">
                    <div className="col-8">
                        <input
                            type="text"
                            className="form-control"
                            name="details"
                            value={ingredient.details}
                            onChange={e => onChange(e)}
                            placeholder="(details)"
                            aria-label="Details"
                        />
                    </div>
                    <div className="col">
                        <div className="input-group">
                            <input
                                type="number"
                                required
                                className="form-control"
                                name="quantity"
                                value={ingredient.quantity}
                                onChange={e => onChange(e)}
                                placeholder="Amount"
                                aria-label="Amount"
                            />
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
                    </div>

                </div>

            </form>
            <div className="mt-4 d-flex justify-content-between">
                <div className="d-flex justify-content-center">
                    <Link className="rb-btn btn-info" to={{ pathname: "/create/info" }}>Back</Link>
                    <button type="button" className="rb-btn btn-danger ml-2" onClick={clearIngredients}>Clear</button>
                </div>
                <button className="rb-btn btn-info" onClick={completeIngredients}>
                    {editMode ? <span>edit steps</span> : <span>add steps</span>}
                </button>
            </div>
        </TestCard>
    )
}

export default AddIngredients;