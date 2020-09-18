import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import test from '../../firebase';
import ls from 'local-storage';
import RecipeCard from "../../component/RecipeBox/RecipeCard";
import AddRecipe from "../../component/RecipeBox/AddRecipe";
import Modal from "../../component/Modal/Modal";
import API from "../../utils/API";
import Box from "../../component/RecipeBox/Box"
import Header from "../../component/RecipeBox/Header"
import Navbar from "../../component/RecipeBox/Navbar"
import CardComplete from "../../component/CreateRecipe/CardComplete"
import '../../component/Modal/Modal.css';
import RecipeHistory from "../../component/Make/RecipeHistory"

const firebase = test.firebase_;

function RecipeBox() {

    const user = firebase.auth().currentUser.uid
    const [status, setStatus] = useState(false);
    // Setting component intial state
    const [recipes, setRecipes] = useState([]);
    const [form, setForm] = useState({
        input: "",
        filterBy: ""
    });
    const [selected, setSelected] = useState({ index: "" });
    const [flip, setFlip] = useState(false);
    const history = useHistory();

    // Load all recipes and store with setRecipes
    useEffect(() => {
        loadRecipes();
        selectRecipe();
    }, [])

    // Loads recipes and set them to recipes
    function loadRecipes() {
        API.getAllRecipes(user)
            .then(res => {
                setRecipes(res.data);
                // console.log(res.data);
            })
            .catch(err => console.log(err));


    };

    function onClick(e) {
        const index = e.currentTarget.dataset.index;
        // console.log("this is a test", index)
        setSelected({ index: index })
        setStatus(true);
    }

    function selectRecipe(recipe) {
        if (!recipe) {
            ls.remove("recipe")
        } else {
            ls.set("recipe", recipe)
        }
    }

    function deleteRecipe(event, id) {
        event.stopPropagation()
        API.deleteRecipe(id)
            .then(res => loadRecipes())
            .catch(err => console.log(err));
    }

    const selectAndGo = (route) => {
        selectRecipe(recipes[selected.index]);
        switch (route) {
            case "make":
                history.push('/make');
                return;
            case "edit":
                history.push('/create/info');
                return;
        }
    }

    const handleInputChange = event => {
        const value = event.target.value;
        setForm({ ...form, input: value });
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        if (form.input) {
            setForm({
                ...form,
                filterBy: form.input,
                input: ""
            });
        } else {
            // some kind of warning. 
        }
    };

    function categorySearch(event) {
        event.stopPropagation();
        event.preventDefault();
        setForm({
            ...form,
            filterBy: event.currentTarget.textContent.toLowerCase(),
            input: ""
        });
    };

    const clearForm = event => {
        event.preventDefault();
        setForm({
            input: "",
            filterBy: ""
        });
    }

    const flipCard = () => {
        setFlip(!flip);
    }

    function filterRecipes(recipes, filterBy) {
        const arrayFiltered = [];
        for (const item of recipes) {
            if (Object.values(item).toString().toLowerCase().includes((filterBy).toLowerCase()) || !filterBy) {
                arrayFiltered.push(item);
            }
        }
        return (arrayFiltered);
    }

    return (
        <Box>
            <Header
                firebase={firebase}
                formInput={form.input}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                clearForm={clearForm}
            />
            {/* Top Secret */}
            {/* <Navbar/> */}
            <section >
                <div className="row row-cols-md-3 row-cols-lg-4">
                    <AddRecipe />
                    {recipes.length ? (
                        <>
                            {filterRecipes(recipes, form.filterBy).map((recipe, index) => {
                                return (<RecipeCard
                                    recipe={recipe}
                                    deleteRecipe={deleteRecipe}
                                    onClick={onClick}
                                    key={(index + 1)}
                                    index={index}
                                    categorySearch={categorySearch}
                                />)
                            })}
                        </>
                    ) : (<h3>No Recipes to Display</h3>)
                    }
                    {/* This will have more descriptive recipe content */}
                    {status && (<Modal closeModal={() => setStatus(false)}>
                        {flip ? <RecipeHistory flipCard={flipCard} recipe={recipes[selected.index]} /> : <CardComplete flipCard={flipCard} recipe={recipes[selected.index]} />}
                        <button type="button" onClick={() => selectAndGo("make")} className="rb-btn btn-info mb-3 text-center">Make
                        </button>
                        <button type="button" onClick={() => selectAndGo("edit")} className="rb-btn btn-secondary text-center">Edit Recipe
                        </button>
                        </Modal>)}
                </div>
            </section>
        </Box>
    );
}

export default RecipeBox;