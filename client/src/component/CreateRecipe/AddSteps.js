import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
import TableBody from "../DynamicTable/TableBody";
import TableHeader from "../DynamicTable/TableHeader";
import TableButton from "../DynamicTable/TableButton";
import TestCard from "../TestCard";
import ExitBtn from "./ExitBtn";

function AddSteps() {

    const initState = {
        title: "",
        text: "",
    }

    const { recipe, setValues } = useRecipe();
    const history = useHistory();
    const [action, setAction] = useState(initState);
    const [actions, setActions] = useState([...recipe.actions || ""]);
    const editMode = !!recipe._id; 

    const clearActions = (e) => {
        setActions([]);
    }

    const deleteAction = (index) => {
        let array = [...actions];
        array.splice(index, 1);
        setActions(array);
    }

    const completeActions = (e) => {
        e.preventDefault();
        setValues({actions: actions});
        history.push('/create/complete');
    }

    // useEffect(() => {
    //     console.log("Actions list is:", actions);
    //     console.log("Recipe contains the following Actions:", recipe.recipeActions);
    // })

    const onChange = (e) => {
        setAction({ ...action, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setActions([...actions, action]);
        setAction(initState);
    }

    return (
        <TestCard>
            <div className="d-flex justify-content-between">
                <h2 className="font-brand">
                    {editMode ? <span>edit steps:</span> : <span>add steps:</span>}
                </h2>
                <Link className="d-flex btn-delete font-sans" to={{ pathname: "/recipebox" }}>
                    <ExitBtn/>
                </Link>
            </div>
            <div className="table-responsive">
                <table className="table font-book">
                    {/* <TableHeader /> */}
                    <TableBody tableContents={actions} delete={deleteAction}/>
                </table>
            </div>
            <form onSubmit={e => onSubmit(e)} className="g-2">
                <div className="form-group">
                    <div className="d-flex mb-2">
                        <input
                            type="text"
                            required
                            className="form-control"
                            name="title"
                            value={action.title}
                            onChange={e => onChange(e)}
                            placeholder="Instruction"
                            aria-label="Instruction"
                        />
                        <div className="d-flex align-items-center ml-2">
                            <button
                                type="submit"
                                className="rb-btn-icon btn-light p-0"
                            >
                                <TableButton />
                            </button>
                        </div>
                    </div>
                    <textarea
                        type="text"
                        required
                        className="form-control"
                        name="text"
                        value={action.text}
                        onChange={e => onChange(e)}
                        placeholder="Details"
                        aria-label="Details"
                    />
                </div>
            </form>
            <div className="mt-4 d-flex justify-content-between">
                <div className="d-flex justify-content-center">
                    <Link className="rb-btn btn-primary" to={{ pathname: "/create/ingredients" }}>Back</Link>
                    <button type="button" className="rb-btn btn-danger ml-2" onClick={clearActions}>Clear</button>
                </div>
                <button className="rb-btn btn-success" onClick={completeActions}>
                    {editMode ? <span>review changes</span> : <span>complete recipe</span>}
                </button>
            </div>
        </TestCard>
    )
}

export default AddSteps;