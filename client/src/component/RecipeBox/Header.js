import React from "react";

function Header(props) {

    return (
        <header>
            <div className="d-flex flex-wrap g-0 pl-0 pb-2">
                <div className="input-group pb-2 col-xs-12">
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
                <div className="col pb-2 pr-1">
                    <button className="rb-btn btn-outline-primary btn-block" type="button" id="clearSubmit" onClick={props.clearForm}>Reset</button>
                </div>
                <div className="col pl-1">
                    <button className="rb-btn btn-outline-warning btn-block" type="button" onClick={() => props.firebase.auth().signOut()}>
                        Sign Out
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;