import React from "react";

function Tag({ value, index, deleteTag }) {

    return (
        <span data-index={index} className="tags">
            {value}
            <button type="button" className="delete font-weight-bold" onClick={() => deleteTag(index)}>x</button>
        </span>
    );
}

export default Tag;