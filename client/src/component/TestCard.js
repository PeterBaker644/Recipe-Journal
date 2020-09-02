import React from "react";

function TestCard({ children }) {

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="card col-10 col-sm-8 col-md-6 g-0">
                    {/* <h5 className="card-header text-center">Recipe Box</h5> */}
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestCard;
