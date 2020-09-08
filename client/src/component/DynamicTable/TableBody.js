import React from "react";

function TableBody({ tableContents }) {

    let arrayStart = 0;

    try {
        if (Object.keys(tableContents[arrayStart]._id)) {
            arrayStart = 1;
            console.log('AHHHHH');
        }
    } catch {
        // Nothing happens if the recipe hasn't been pulled from the database yet.
    }

    let items = tableContents.map(item => {
        let values = Object.values(item);
        let rowBody = [];
        for (let i = (arrayStart + 1); i < values.length; i++) {
            let value = values[i] || "-";
            rowBody.push(<td key={value}>{value}</td>)
        }
        let row =
            <tr key={values[arrayStart]}>
                <th scope="row">{values[arrayStart]}</th>
                {rowBody}
            </tr>;
        return row;
    })

    return (
        <tbody>
            {items}
        </tbody>
    );
}

export default TableBody;