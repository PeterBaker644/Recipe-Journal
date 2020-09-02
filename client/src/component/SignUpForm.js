import React from "react";

function TestCard({handleInputChange, submitSignin, submitSignup}) {

    return (
        <form>
            <div className="mb-2">
                <label for="email-input" className="form-label font-book-italic">Email Address</label>
                <input name="email" type="email" className="form-control" id="email-input" onChange={handleInputChange}></input>
            </div>
            <div className="mb-3">
                <label for="password-input" className="form-label font-book-italic">Password</label>
                <input name="password" type="password" className="form-control" id="password-input" onChange={handleInputChange}></input>
            </div>
            <div className="d-flex justify-content-between">
                <button type="submit" className="rb-btn btn-secondary flex-fill" name="signin" onClick={submitSignin}>Sign In</button>
                <button type="submit" className="rb-btn btn-primary flex-fill ml-3" name="signup" onClick={submitSignup}>Sign Up</button>
            </div>
        </form>
    );
}

export default TestCard;
