import React from "react";

function Box({ children }) {
    return (
        <div className="container">
            <div className="recipe-border-1">
                <div className="recipe-border-2">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Box;