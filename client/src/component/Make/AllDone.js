import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API"
import ls from "local-storage";

function AllDone() {

    // what about dates? does this page help track dates? 
    const [selectedFile, setSelectedFile] = useState();
    const [comment, setComment] = useState("");
    const [recipe, setRecipe] = useState(ls.get("recipe"));
    const history = useHistory();

    useEffect(() => {
        console.log(comment);
        return () => {
            API.updateRecipe(recipe._id, recipe).then(()=>{
                console.log("recipe successfully written");
            })
        }
    }, [])

    const submitForms = (route) => {
        let comments = recipe.comments;
        comments.push(comment);
        console.log("Recipe comments as follows:", comments);
        // setting and uploading the photo logic goes here
        setRecipe({ ...recipe, comments: comments })
        switch(route) {
            case "HOME":
                history.push('/recipebox');
                return;
            case "EDIT":
                history.push('/create/info');
                return;
        }   
    }

    const onChange = (e) => {
        setComment({...comment, text: e.target.value });
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
                <div className="form-file">
                    <input
                        type="file"
                        className="form-file-input"
                        id="filePhoto"
                        onChange={fileSelectedHandler}
                    />
                    <label className="form-file-label font-book-italic mb-2">
                        <span className="form-file-text">Upload a photo...</span>
                        <span className="form-file-button">Browse</span>
                    </label>
                </div>
                <div className="form-group">
                    <label className="font-book-italic mt-2">Comments:</label>
                    <textarea
                        type="text"
                        required
                        className="form-control"
                        name="comments"
                        // value={recipe.comment}
                        onChange={e => onChange(e)}
                    />
                </div>
            </form>
            <div className="d-flex justify-content-between">
                <button
                    type="button"
                    onClick={() => submitForms("EDIT")}
                    className="rb-btn btn-warning mt-3"
                >Edit Recipe</button>
                <button
                    type="button"
                    onClick={() => submitForms("HOME")} 
                    className="rb-btn btn-primary mt-3"
                >Return to Recipe Box</button>
            </div>
        </>
    )
}

export default AllDone;