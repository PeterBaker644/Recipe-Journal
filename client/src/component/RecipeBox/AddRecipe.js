import React from "react";
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

function AddRecipe() {
    return (
        <Link to="/create">
            <div className="card align-items-center justify-content-center">
                <div className="card-body">
                    {/* Below link needs to redirect to Chue's page */}
                    <FontAwesome
                        className=""
                        name="plus"
                        size="5x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
            </div>
        </Link>
    );
}

export default AddRecipe;