import React from "react";

function Navbar(props) {

    const categories = ['appetizer', 'soup', 'salad', 'bread', 'entree', 'side', 'dessert', 'snack', 'drink'];

    return (
        <nav className="">
            <ul class="nav nav-tabs my-2 d-flex justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">All</a>
                </li>
                {categories.map((category) => {
                    return (<li class="nav-item">
                        <a class="nav-link text-capitalize" aria-current="page" href="#">{category}</a>
                    </li>)}
                )}
            </ul>
        </nav>
    );
}

export default Navbar;