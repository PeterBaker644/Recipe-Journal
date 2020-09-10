import React from "react";
import AddBtn from "./AddBtn";
import {Link} from 'react-router-dom';

function AddRecipe() {
    return (
        <Link to="/create/info">
            <div className="card h-100 recipe-card">
                <div className="card-body d-flex align-items-center justify-content-center btn-add">
                    {/* Below link needs to redirect to Chue's page */}
                    <AddBtn/>
                </div>
            </div>
        </Link>
    );
}

export default AddRecipe;