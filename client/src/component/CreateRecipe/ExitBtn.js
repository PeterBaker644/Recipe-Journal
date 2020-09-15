import React from "react";
import FontAwesome from 'react-fontawesome';

function ExitBtn(props) {

    const closeIcon = () => (
        <FontAwesome
        // Any close icon can be used
        name="times"
        style={{
            padding: '10px',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 0,
            position: 'relative',
            top: '-0.5rem',
            right: '-0.5rem'
        }}
        />
    );

    return (
        <span className="btn-delete font-sans" {...props} role="button" tabIndex="0">
            { closeIcon() }
        </span>
    );
}

export default ExitBtn;