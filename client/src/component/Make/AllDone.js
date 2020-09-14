import React, {useState} from "react";
import API from "../../utils/API"; 
import { useRecipe } from "../../component/CreateRecipe/RecipeContext";
import TableBody from "../DynamicTable/TableBody"
import TableHeader from "../DynamicTable/TableHeader"
import AddBtn from "../RecipeBox/AddBtn";

function AllDone() {

    //need to grab values form somewhere?
    //can we use history? This is a modal?
    
    //const { recipe } = useRecipe();
    //const { setValues } = useRecipe();
    // const history = useHistory();

    // what about dates? does this page help track dates? 
    const [selectedFile, setSelectedFile] = useState();
    const [comment, setComment] = useState();
    const [comments, setComments] = useState([]);
    
    const onChange = (e) => {
        // setComment ({...comment, [e.target.name]: e.target.value.toLowerCase()});
        
    }
  
    const fileSelectedHandler = event => {
        console.log("Photo", event.target.files[0]);
        setSelectedFile({
            selectedFile: event.target.files[0]
        });
    }

    const onComplete = (e) => {
        e.preventDefault();
        console.log("Hello OnSubmit");
        // setComments([...comments, comment]);
        // setComment();

        //Is this an an createRecipe or an update to the recipe?

        // API.createRecipe(recipe).then(() => {
        //     history.push('/recipebox')
        // })
    }

    return (
        <>
            <h1 className="display-2 font-brand-small mb-0">all done!</h1>
            <hr className="divider-color" />
            

            <form onSubmit={e => onComplete(e)}>
            <div className="form-group">
                    <label className="font-book-italic mt-2">Add Photo:</label>
                    <input
                        type="file"
                        // required
                        className="form-control"
                        name="addPhoto"
                        // value={recipe.comment}
                        onChange={fileSelectedHandler}
                    />
                    
                </div>
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