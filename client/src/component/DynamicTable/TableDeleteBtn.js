import React from "react";

function TableDeleteBtn(props) {
    return (
        <td className="btn-delete font-sans" {...props} role="button" tabIndex="0">
            X
        </td>
    );
}

export default TableDeleteBtn;