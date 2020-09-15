import React from "react";
import ExitBtn from "../CreateRecipe/ExitBtn"

function DeleteBtn(props) {
    return (
        <span className="btn-delete font-sans" {...props} role="button" tabIndex="0">
            <ExitBtn />
        </span>
    );
}

export default DeleteBtn;