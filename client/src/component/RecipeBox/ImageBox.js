import React from "react";

function ImageBox({ image, children }) {

    return (
        <>
            <div className="imagebox mt-2 mb-3 d-flex align-items-end justify-content-center">
                <img className="imagebox-image img-fluid" src={image}></img>
                <span className="imagebox-text card-text recipe-text">{children}</span>
            </div>
        </>
    );
}

export default ImageBox;
