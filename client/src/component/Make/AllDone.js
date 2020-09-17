import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API"
import ls from "local-storage";
import firebase from 'firebase';

function AllDone() {

    // what about dates? does this page help track dates? 
    const [selectedFile, setSelectedFile] = useState();
    const [comment, setComment] = useState("");
    const [recipe, setRecipe] = useState(ls.get("recipe"));
    const history = useHistory();

    useEffect(() => {
        console.log(comment);
        return () => {
            API.updateRecipe(recipe._id, recipe).then(() => {
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
        switch (route) {
            case "HOME":
                history.push('/recipebox');
                return;
            case "EDIT":
                history.push('/create/info');
                return;
        }
    }

    const onChange = (e) => {
        setComment({ ...comment, text: e.target.value });
    }

    const fileSelectedHandler = event => {
        // console.log("Photo file handler event", event.target.files[0]);
        setSelectedFile({
            selectedFile: event.target.files[0]
        });
        // Points to the root reference
        var storageRef = firebase.storage().ref();
        var file = event.target.files[0];
        // console.log("stored file is ..", file);
        var metadata = {
            contentType: 'image/jpeg'
        };
        // Upload file and metadata to the object 
        //SHOULD we do userID/ + file.name ? to store users photos in thier own folder. 
        //would make for easier database maint. or things like local storage caching only photos from this folder?
        var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

        // the below code is not neccesary, it just monitors the upload, the last function is what pulls the download URL for you
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;
                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            }, function () {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                });
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
            <span className="divider-color"></span>

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
                    className="rb-btn btn-warning mt-3 mr-1"
                >Edit Recipe</button>
                <button
                    type="button"
                    onClick={() => submitForms("HOME")}
                    className="rb-btn btn-primary mt-3 ml-1"
                >Return to Recipe Box</button>
            </div>
        </>
    )
}

export default AllDone;