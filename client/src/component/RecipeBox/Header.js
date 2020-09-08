import React from "react";

function Header(props) {

    return (
        <header className="row align-items-center">
            <h1 className="font-brand col-xl text-center text-left-xxl">My Recipe Box</h1>
            <div className="col-xxl-7 my-2 my-xxl-0">
                <div className="row g-0">
                    <div className="input-group col-md">
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
                    <button className="rb-btn btn-outline-primary col-sm col-md-2 mx-md-3 mt-3 mt-md-0" type="button" id="clearSubmit" onClick={props.clearForm}>Reset</button>
                    <button className="rb-btn btn-outline-warning col-sm col-md-2 ml-sm-3 ml-md-0 mt-3 mt-md-0" type="button" onClick={() => props.firebase.auth().signOut()}>
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;