import React from "react";

function TableHeader({contents}) {

    let arrayStart = 0;

    try {
        if (Object.keys(contents[arrayStart]._id)) {
            arrayStart = 1;
        }
    } catch {

    }

    const tableArray = Object.values(contents);
    const tableSample = Object.keys(tableArray[0]);
    let headers = [];
    for (let i = (arrayStart); i < tableSample.length; i++) {
        let value = tableSample[i] || "-";
        headers.push(
            <th key={value}>
                {value}
            </th>
        )
    }

    return (
        <thead>
            <tr>
                {headers}
            </tr>
        </thead>
    );
}

export default TableHeader;
