import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import ls from "local-storage";
import { genImgFileName, dataURLtoFile, imgUploadHandler} from "../../utils/CameraLogic";
import Webcam from "react-webcam";

function AllDone() {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    // what about dates? does this page help track dates? 
    const [url, setUrl] = useState();
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

    const webcamCapture = React.useCallback(async () => {
        // console.log("webcamCapture");
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        const filename = genImgFileName(recipe.name);
        // console.log("webcamCapture filename", filename);
        const jpgImage = dataURLtoFile(imageSrc, filename);
        // console.log("webcamCapture jpgImage", jpgImage);
        const downloadURL = await imgUploadHandler(jpgImage, filename, recipe.userID);
        // console.log("downloadURL", downloadURL);
        setUrl(downloadURL);
    }, [webcamRef, setImgSrc]);

    const localfileSelectedHandler = async event => {
        const jpgImage = event.target.files[0];
        //validate jpg png etc
        //bootstrap popdown validator
        const filename = genImgFileName(recipe.name);
        //needs validation logic to ensure a picture file is selected
        const downloadURL = await imgUploadHandler(jpgImage, filename, recipe.userID);
        // console.log("downloadURL", downloadURL);
        setUrl(downloadURL);
    }

    const submitForms = (route) => {
        let comments = recipe.comments;
        let urls = recipe.imageUrls;
        comments.push(comment);
        //  urls.push(url);
        urls[0]=url;
        // setting and uploading the photo logic goes here
        setRecipe({ ...recipe, comments: comments, imageUrls: urls });
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
            <h1 className="display-2 font-brand display-3-small mb-0">all done!</h1>
            <span className="divider-color"></span>

            <form onSubmit={e => onComplete(e)}>
                
                
                    <p>this is camera component</p>
                    <div className="geneStupidBox" >
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                        />
                    </div>

                    <button type="button" onClick={webcamCapture}>Capture photo</button>
                    <div className="geneStupidBox" >
                        {imgSrc && (
                            <img
                                src={imgSrc} alt="webcam screenshot"
                            />
                        )}
                    </div>
                    <div className="form-file">
                    <input
                        type="file"
                        className="form-file-input"
                        id="filePhoto"
                        onChange={localfileSelectedHandler}
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
                    className="rb-btn btn-info mt-3 ml-1"
                >Return to Recipe Box</button>
            </div>
        </>
    )
}

export default AllDone;