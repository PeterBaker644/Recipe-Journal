import React, {useState} from "react";
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
import TableBody from "../DynamicTable/TableBody"
import TableHeader from "../DynamicTable/TableHeader"
import AddBtn from "../RecipeBox/AddBtn";

function AllDone() {

    //need to grab values form somewhere?
    //can we use history? This is a modal?

    //const { setValues } = useRecipe();
    // const history = useHistory();

    // what about dates? does this page help track dates? 
    const [photo, setPhoto] = useState();
    const [comment, setComment] = useState();
    const [comments, setComments] = useState([]);
    
    const onChange = (e) => {
        setComment ({...comment, [e.target.name]: e.target.value.toLowerCase()});
    }
  
    const onSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, comment]);
        setComment();
    }

    return (
        <>
            <h1 className="display-2 font-brand-small mb-0">All Done</h1>
            <hr className="divider-color" />
            <AddBtn></AddBtn> <h4>Add Photo</h4>

            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label className="font-book-italic mt-2">Comments:</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="comments"
                        // value={recipe.comment}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                {/* DOES THIS SECTION REROUTE US SOMEWHERE ???  INPUT OR BUTTON??*/}
                    {/* <label className="font-book-italic mt-2">Edit Recipes:</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="editRecipes"
                        // value={recipe.editRecipes}
                        onChange={e => onChange(e)}
                    /> */}
                    <button
                        type="submit"
                        value="editRecipe"
                        className="rb-btn btn-primary mt-3"
                    >Edit Recipe</button>
                </div>
                <div className="form-group">
                    <button
                        type="submit"
                        value="complete"
                        className="rb-btn btn-primary mt-3"
                    >Complete</button>
                </div>
            </form>
        </>
    )
}

export default AllDone;