import React, { useState } from "react";
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
import { useHistory, Link } from "react-router-dom";
import TestCard from "../TestCard";
import TableButton from "../DynamicTable/TableButton";
import Tag from "./Tag";
import ExitBtn from "./ExitBtn";

function RecipeInfo() {
    const { recipe, setValues } = useRecipe();
    const history = useHistory();
    const editMode = !!recipe._id;

    const categories = ['appetizer', 'soup', 'salad', 'bread', 'entree', 'side', 'dessert', 'snack', 'drink'];
    const initState = ({
        name: recipe.name || "",
        description: recipe.description || "",
        category: recipe.category || ""
    })

    const [info, setInfo] = useState(initState);
    const [tag, setTag] = useState("");
    const [tags, setTags] = useState([...recipe.tags || ""]);

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
        <TestCard>
            <div className="d-flex justify-content-between">
                <h2 className="font-brand display-3">
                    {editMode ? <span>edit recipe:</span> : <span>new recipe:</span>}
                </h2>
                <Link className="d-flex btn-delete font-sans" to={{ pathname: "/recipebox" }}>
                    <ExitBtn/>
                </Link>
            </div>
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
                    <textarea
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
                        <div className="mt-2">
                            {tags.map((tag, index) =>
                                <Tag key={index} index={index} value={tag} deleteTag={deleteTag} />
                            )}
                        </div>
                    </div>
                </div>

                <div className="form-group d-flex justify-content-between mt-3">
                    <Link className="rb-btn btn-danger d-flex" to={{ pathname: "/recipebox" }}>exit</Link>
                    <button
                        type="submit"
                        value="create"
                        className="rb-btn btn-info"
                    >
                        {editMode ? <span>edit ingredients</span> : <span>add ingredients</span>}
                    </button>
                </div>
            </form>
        </TestCard>
    )
}

export default RecipeInfo;