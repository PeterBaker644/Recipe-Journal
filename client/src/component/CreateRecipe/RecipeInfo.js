import React, { useState, useEffect } from "react";
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
import { useHistory } from "react-router-dom";
import TestCard from "../TestCard";
import TableButton from "../DynamicTable/TableButton";
import Tag from "./Tag";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../../component/DarkMode/useDarkMode";
import Toggle from "../../component/DarkMode/Toggler";
import { GlobalStyles } from "../../component/DarkMode/GlobalStyles";
import { lightTheme, darkTheme } from "../../component/DarkMode/Theme";

function RecipeInfo() {

    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    
    const { recipe, setValues } = useRecipe();
    const history = useHistory();

    const categories = ['appetizer', 'soup', 'salad', 'entree', 'side', 'dessert'];
    const initState = ({
        name: recipe.name || "",
        description: recipe.description || "",
        category: recipe.category || ""
    })

    const [info, setInfo] = useState(initState);
    const [tag, setTag] = useState("");
    const [tags, setTags] = useState([]);

    useEffect(() => {
        return () => {
            console.log("Completed recipe info is:", recipe)
            console.log("This component has unmounted");
        }
    }, [])

    const onChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    const writeTag = (e) => {
        setTag(e.target.value);
    }

    const addTag = (e) => {
        // consider parsing comma separate values.
        e.preventDefault();
        // document.querySelector("#tagInput").value
        setTags([...tags, tag]);
        setTag("");
        // setTag(e.target.value);
    }

    const deleteTag = (index) => {
        console.log(index)
        let array = [...tags];
        array.splice(index, 1);
        setTags(array);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setValues({
            tags: tags,
            name: info.name,
            description: info.description,
            category: info.category
        })
        history.push('/create/ingredients');
    }

    return (
        /* Dark and Light Mode */
        <ThemeProvider theme={themeMode}>
        <>
        <GlobalStyles/>
            <Toggle theme={theme} toggleTheme={themeToggler} />



        <TestCard>
            <h2 className="font-brand">new recipe:</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label className="font-book-italic mt-2">Name:</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="name"
                        value={info.name}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label className="font-book-italic mt-2">Description:</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="description"
                        value={info.description}
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
                        defaultValue={recipe.category || "default"}
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
                <div></div>
                <div className="form-group">
                    <label className="font-book-italic mt-2">Tags:</label>
                    <div className="d-flex align-items-center">
                        <input
                            type="text"
                            className="form-control"
                            id="tagInput"
                            name="tags"
                            value={tag}
                            onChange={e => writeTag(e)}
                        />
                        <div className="d-flex align-items-center ml-2">
                            <button
                                type="button"
                                className="rb-btn-icon btn-light btn-transparent p-0"
                                onClick={e => addTag(e)}
                            >
                                <TableButton />
                            </button>
                        </div>
                    </div>
                    <div>
                        {recipe.tags[0] ?
                            <div className="mt-2">
                                {recipe.tags.map((tag, index) =>
                                    <Tag key={index} index={index} value={tag} deleteTag={deleteTag} />
                                )}
                            </div>
                        : tags[0] ?
                            <div className="mt-2">
                                {tags.map((tag, index) =>
                                    <Tag key={index} index={index} value={tag} deleteTag={deleteTag} />
                                )}
                            </div>
                        : ""
                    }
                    </div>
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
        </>
        </ThemeProvider>
    )
}

export default RecipeInfo;