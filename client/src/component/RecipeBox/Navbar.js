import React from "react";

function Navbar({ form, setForm }) {

    const categories = ['appetizer', 'soup', 'salad', 'bread', 'entree', 'side', 'dessert', 'snack', 'drink'];

    const handleSearchButton = (value) => {
        setForm({...form, filterBy:value })
    }

    return (
        <nav className="">
            <ul className="nav nav-tabs my-2 d-flex justify-content-center">
                <li className="nav-item">
                    <div className={(form.filterBy === "all" || form.filterBy === "") ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => handleSearchButton("")}>All</div>
                </li>
                {categories.map((category) => {
                    return (<li className="nav-item" key={category}>
                        <div className={form.filterBy === category ?"nav-link active text-capitalize" : "nav-link text-capitalize"} aria-current="page" onClick={() => handleSearchButton(category)}>{category}</div>
                    </li>)}
                )}
            </ul>
        </nav>
    );
}

export default Navbar;