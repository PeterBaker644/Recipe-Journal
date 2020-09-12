import React from "react";
import AddBtn from "./AddBtn";
import {Link} from 'react-router-dom';

function AddRecipe() {
    return (
        <Link to="/create/info" style={{textDecoration: "none"}}>
            <div className="col my-2 h-100 pb-3 font-book">
                <div className="card h-100 recipe-card">
                    <div className="card-body d-flex align-items-center justify-content-center">
                        {/* Below link needs to redirect to Chue's page */}
                        <AddBtn/>
                    </div>
                    <div className="card-footer d-flex bg-white justify-content-center">
                        <span className="font-book-italic text-black-50 text-truncate">
                            Add a Recipe!
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default AddRecipe;