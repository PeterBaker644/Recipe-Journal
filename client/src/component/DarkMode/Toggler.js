import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
/*const Button = styled.button`
    background: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    color: ${({ theme }) => theme.text};
    border-radius: 30px;
    cursor: pointer;
    font-size:0.8rem;
    padding: 0.6rem;
}`;*/

const Toggle = ({theme,  toggleTheme }) => {
    return (
        /*<Button onClick={toggleTheme} >
          Switch Theme
        </Button>*/
        <div className="form-check form-switch mt-1 ml-2">
            <input className="form-check-input" onClick={toggleTheme} type="checkbox" id="flexSwitch"></input>
            <label className="form-check-label" for="flexSwitch">Dark Mode</label>
        </div>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;