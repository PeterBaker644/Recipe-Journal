import React from "react";
import TableDeleteBtn from "./TableDeleteBtn";
import moment from 'moment';

function TableControl(props) {

    if (props.ingredients) {
        let ingredients = props.ingredients
        
        let tableHeader = (
            <thead>
                <tr>
                    <th scope="col">Ingredient</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Measure</th>
                    {props.delete ? <td></td> : null}
                </tr>
            </thead>
        )

        let tableBody = 
            <tbody className="table-style">
                {ingredients.map((ingredient, index) =>
                <tr key={index}>
                    {/* This might need revisiting once details are added to creation */}
                    <th>
                        {ingredient.name} {ingredients.details ? <span className="font-weight-light">({ingredient.details})</span> : null}
                    </th>
                    <td>{ingredient.quantity}</td>
                    <td>{ingredient.units}</td>
                    {props.delete ? <TableDeleteBtn onClick={() => props.delete(index)} /> : null}
                </tr>)}
            </tbody>
        

        return (
            ingredients.length ?
            <div className="table-responsive">
                <table className="table font-book">
                    {props.header ? tableHeader : null}
                    {tableBody}
                </table>
            </div>
                :
                null
        );

    } else if (props.actions) {
        let actions = props.actions

        let tableHeader = (
            <thead>
                <tr>
                    <th scope="col">Instruction</th>
                    <th scope="col">Details</th>
                    <th scope="col">Timer</th>
                    {props.delete ? <td></td> : null}
                </tr>
            </thead>
        )

        let tableBody = 
            <tbody className="table-style">
                {actions.map((action, index) =>
                <tr key={index}>
                    <th>{action.title}</th>
                    <td>{action.text}</td>
                    <td>{action.timer}</td>
                    {props.delete ? <TableDeleteBtn onClick={() => props.delete(index)} /> : null}
                </tr>)}
            </tbody>

        return (
            actions.length ?
            <div className="table-responsive">
                <table className="table font-book">
                    {props.header ? tableHeader : null}
                    {tableBody}
                </table>
            </div>
                :
                null
        );

    } else if (props.comments) {
        let comments = props.comments
        console.log("It's history");
        let tableHeader = (
            <thead>
                <tr>
                    <th scope="col">Note</th>
                    <th scope="col">Date</th>
                </tr>
            </thead>
        )

        let tableBody = comments.map((comment, index) =>
            <tbody className="table-style">
                <tr key={index}>
                    <td>{moment(comment.dateCreated).format("MMM Do, YYYY")}</td>
                    <td>{comment.text}</td>
                </tr>
            </tbody>
        )

        return (
            comments.length ?
            <div className="table-responsive">
                <table className="table font-book">
                    {props.header ? tableHeader : null}
                    {tableBody}
                </table>
            </div>
                :
                null
        );

    } else {
        console.log("[TABLE-CONTROL] Error - invalid array");
    }


    // return (
    //     <table className="table font-book">
    //         {ingredientTable}
    //     </table>
    // );
}

export default TableControl;