import React from "react";
import TableDeleteBtn from "./TableDeleteBtn";

function TableControl(props) {

    const ingredients = props.ingredients;
    
    // Object.keys(tableContents[arrayStart]._id) ? 
    //         arrayStart = 1 : arrayStart = 0;

    // let items = tableContents.map((item, index) => {
    //     let values = Object.values(item);
    //     console.log("values are:", values);
    //     let rowBody = [];
    //     for (let i = (arrayStart + 1); i < values.length; i++) {
    //         let value = values[i] || "-";
    //         rowBody.push(<td key={value}>{value}</td>)
    //     }
    //     let row =
    //         <tr key={values[arrayStart]}>
    //             <th scope="row">{values[arrayStart]}</th>
    //             {rowBody}
    //             {props.delete ? <TableDeleteBtn onClick={() => props.delete(index)}/> : null}
    //         </tr>
    //     return row;
    // })

    // =============================



    return (
        <tbody className="table-style">
            {/* {items} */}
        </tbody>
    );
}

export default TableControl;