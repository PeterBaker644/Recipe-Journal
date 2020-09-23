import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
import TableControl from "../DynamicTable/TableControl";
import TableButton from "../DynamicTable/TableButton";
import TestCard from "../TestCard";
import ExitBtn from "./ExitBtn";
import IconComponent from "./Icon";
import API from "../../utils/API";


function AddIngredients() {

    const [ingredientIconList, setIngredientIconList] = useState([]);

    const { recipe, setValues } = useRecipe();
    const history = useHistory();
    const editMode = !!recipe._id;

    const initState = ({
        name: "",
        details: "",
        quantity: "",
        units: ""
    })

    const [ingredient, setIngredient] = useState(initState);
    const [ingredients, setIngredients] = useState([...recipe.ingredients || null]);

    const clearIngredients = (e) => {
        setIngredients([]);
    }

    const completeIngredients = (e) => {
        e.preventDefault();
        if (ingredients.length < 1) {
            let element = document.getElementById("warning");
            let margin = document.getElementById("margin")
            element.classList.add("is-invalid");
            margin.classList.add("error-margin");
        } else {
            setValues({ ingredients: ingredients });
            history.push('/create/steps');
        }
    }

    const deleteIngredient = (index) => {
        let array = [...ingredients];
        array.splice(index, 1);
        setIngredients(array);
    }

    const onChange = (e) => {
        setIngredient({ ...ingredient, [e.target.name]: e.target.value.toLowerCase() });
    }

    const onSubmit = (e) => {
        let element = document.getElementById("warning");
        let margin = document.getElementById("margin");
        margin.classList.remove("error-margin");
        element.classList.remove("is-invalid");
        e.preventDefault();
        setIngredients([...ingredients, ingredient]);
        setIngredient(initState);
    }
    useEffect(() => {
        API.getAllIngredientsLimitTen()
            .then(res => setIngredientIconList(res.data))
            .catch(err => console.log(err));
    }, [])

    const ingIconClicked = event => {
        event.preventDefault();
        // console.log("icon button clicked")
        // console.log(event.currentTarget.name)
        setIngredient({ ...ingredient, name: event.currentTarget.name })

    };

    return (
        <TestCard>
            <div className="d-flex justify-content-between">
                <h2 className="font-brand display-3">
                    {editMode ? <span>edit ingredients:</span> : <span>add ingredients:</span>}
                </h2>
                <Link className="d-flex btn-delete font-sans" to={{ pathname: "/recipebox" }}>
                    <ExitBtn />
                </Link>
            </div>
            <TableControl ingredients={ingredients} delete={deleteIngredient} header={true}></TableControl>
            <div className="d-flex justify-content-start align-items-center flex-wrap mb-3">
                <h4 className="rb-header w-100 mb-3">Popular Ingredients:</h4>
                {ingredientIconList.map(ingredient => {
                    return (
                        <IconComponent
                            key={ingredient._id}
                            iconname={ingredient.name}
                            onClick={ingIconClicked}
                        />
                    );
                })}
            </div>
            <form onSubmit={e => onSubmit(e)} className="" id="form">
                <div className="row g-2">
                    <div className="col-lg-6 col-xl-8 g-2">
                        <div className="d-flex flex-column align-items-stretch mb-2">
                            <input
                                type="text"
                                required
                                className="form-control form-tweak-2"
                                name="name"
                                id="warning"
                                value={ingredient.name}
                                onChange={e => onChange(e)}
                                placeholder="Ingredient"
                                aria-label="Ingredient"
                            />
                            <div className="invalid-feedback font-book-italic">
                                Recipe must include at least one ingredient.
                            </div>
                        </div>
                        <div className="mb-2">
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

                    </div>

                    <div className="col-lg mt-0 mt-lg-2 g-2 d-flex flex-column-reverse flex-lg-column">
                        <div className="mb-2" id="margin">
                            <button type="submit" className="btn-block d-flex rb-btn-subtle align-items-center justify-content-center">
                                <span className="text-nowrap">ADD INGREDIENT</span>
                                <span
                                    className="rb-btn-icon btn-transparent ml-2"
                                >
                                    <TableButton />
                                </span>
                            </button>
                        </div>

                        <div className="mb-2">

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
                                    name="units"
                                    value={ingredient.units}
                                    onChange={e => onChange(e)}
                                    placeholder="Measure"
                                    aria-label="Measure"
                                />
                            </div>
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


