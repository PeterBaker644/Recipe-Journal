import React from "react";

function Header(props) {

    return (
        <header className="flex-fill ml-4">
            <div className="row g-0">
                <div className="input-group pl-0 pl-sm-2 col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="searchSubmit"
                        value={props.formInput}
                        onChange={props.handleInputChange}
                    ></input>
                    <button className="rb-btn btn-primary" type="button" id="searchSubmit" onClick={props.handleFormSubmit}>Search</button>
                </div>
                <button className="rb-btn btn-outline-primary col-3 col-md-2 mx-3" type="button" id="clearSubmit" onClick={props.clearForm}>Reset</button>
                <button className="rb-btn btn-outline-warning col-3 col-md-2" type="button" onClick={() => props.firebase.auth().signOut()}>
                    Sign Out
                </button>
            </div>
        </header>
    );
}

export default Header;