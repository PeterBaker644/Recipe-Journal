import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
import TableControl from "../DynamicTable/TableControl";
import TableButton from "../DynamicTable/TableButton";
import TestCard from "../TestCard";
import ExitBtn from "./ExitBtn";
import timeParser from "../../utils/timeParser"

function AddSteps() {

    const initAction = {
        title: "",
        text: "",
        timer: "",
    }

    const initTimer = {
        hours: "",
        minutes: ""
    }

    const { recipe, setValues } = useRecipe();
    const history = useHistory();
    const [action, setAction] = useState(initAction);
    const [timer, setTimer] = useState(initTimer);
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
        setValues({ actions: actions });
        history.push('/create/complete');
    }

    useEffect(() => {
        (timer.hours.length || timer.minutes.length) ?
        setAction({ ...action, timer: timeParser("SEC", timer.hours, timer.minutes)})
        : 
        setAction({...action, timer: ""});
        console.log("Timer has been set")
    },[timer])

    const onChange = (e) => {
        setAction({ ...action, [e.target.name]: e.target.value });
    }

    const onTime = (e) => {
        setTimer({ ...timer, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setActions([...actions, action]);
        setAction(initAction);
        setTimer(initTimer);
    }

    return (
        <TestCard>
            <div className="d-flex justify-content-between">
                <h2 className="font-brand display-3">
                    {editMode ? <span>edit steps:</span> : <span>add steps:</span>}
                </h2>
                <Link className="d-flex btn-delete font-sans" to={{ pathname: "/recipebox" }}>
                    <ExitBtn />
                </Link>
            </div>
            <TableControl actions={actions} delete={deleteAction} header={true}></TableControl>
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
                        <div className="input-group ml-2">
                            <span className="input-group-text form-control font-book">Timer</span>
                            <input
                                type="number"
                                min="1" max="99" step="1"
                                className="form-control"
                                name="hours"
                                value={timer.hours}
                                onChange={e => onTime(e)}
                                placeholder="Hours"
                                aria-label="Hours"
                            />
                            <input
                                type="number"
                                min="1" max="59" step="1"
                                className="form-control"
                                name="minutes"
                                value={timer.minutes}
                                onChange={e => onTime(e)}
                                placeholder="Minutes"
                                aria-label="Minutes"
                            />
                        </div>
                        <button type="submit" className="rb-btn-subtle d-flex align-items-center ml-2 px-2">
                            <span className="text-nowrap">ADD STEP</span>
                            <span
                                className="rb-btn-icon btn-transparent ml-2"
                            >
                                <TableButton />
                            </span>
                        </button>
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
                    <Link className="rb-btn btn-info" to={{ pathname: "/create/ingredients" }}>Back</Link>
                    <button type="button" className="rb-btn btn-danger ml-2" onClick={clearActions}>Clear</button>
                </div>
                <button className="rb-btn btn-info" onClick={completeActions}>
                    {editMode ? <span>review changes</span> : <span>complete recipe</span>}
                </button>
            </div>
        </TestCard>
    )
}

export default AddSteps;