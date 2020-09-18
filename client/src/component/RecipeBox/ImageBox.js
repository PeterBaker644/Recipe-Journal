import React from "react";

function ImageBox({ image, children }) {

    return (
        <>          
            <img className="img-fluid" src={image}></img>
        </>
    );
}

export default ImageBox;
