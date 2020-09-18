import React from "react";
import TableDeleteBtn from "./TableDeleteBtn";
import moment from 'moment';
import timeParser from "../../utils/timeParser"

function TableControl(props) {

    if (props.ingredients) {
        let ingredients = props.ingredients
        
        let tableHeader = (
            <thead>
                <tr>
                    <th scope="col">Ingredient</th>
                    {/* <th scope="col">Amount</th> */}
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
                        {ingredient.name} {(ingredient.details.length > 0) ? <span className="font-weight-light">({ingredient.details})</span> : null}
                    </th>
                    <td>{ingredient.quantity} {ingredient.units}</td>
                    {/* <td>{ingredient.units || "-"}</td> */}
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
                    <th scope="col-6">Details</th>
                    <th scope="col-1">Time</th>
                    {props.delete ? <td></td> : null}
                </tr>
            </thead>
        )

        let tableBody = 
            <tbody className="table-style">
                {actions.map((action, index) =>
                <tr key={index}>
                    <th className="text-nowrap">{action.title}</th>
                    <td>{action.text}</td>
                    <td className="text-nowrap">{timeParser("HMS", action.timer)}</td>
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
                    <th scope="col">Date</th>
                    <th scope="col">Note</th>
                </tr>
            </thead>
        )

        let tableBody = 
            <tbody className="table-style">
                {comments.map((comment, index) =><tr key={index}>
                    <td>{moment(comment.dateCreated).format("MMM Do, YYYY ~ ha")}</td>
                    <td>{comment.text}</td>
                </tr>)}
            </tbody>
        

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