import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import ls from "local-storage";
import { genImgFileName, dataURLtoFile, imgUploadHandler } from "../../utils/CameraLogic";
import Webcam from "react-webcam";
import { mobileCheck } from "../../utils/mobilePhoneCheck";

function AllDone() {

    // const desktop = navigator.appVersion.includes("Win") ? true :
    //     navigator.appVersion.includes("Mac") ? true :
    //     navigator.appVersion.includes("X11") ? true :
    //     navigator.appVersion.includes("Linux") ? true :
    //     false

    function mobileCheck() {
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        console.log('mobile check');
        console.log(check);
        return check;
    };
    const desktop = mobileCheck();
 
    console.log(navigator.appVersion)

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [file, setFile] = useState(null);
    const [mode, setMode] = useState("select");
    const [url, setUrl] = useState(null);
    const [comment, setComment] = useState("");
    const [recipe, setRecipe] = useState(ls.get("recipe"));
    const history = useHistory();

    useEffect(() => {
        let comments = recipe.comments;
        comments.push({ text: "Recipe completed!" });
        return () => {
            API.updateRecipe(recipe._id, recipe).then(() => {
                console.log("recipe successfully written");
            })
        }
    }, [])

    const webcamCapture = React.useCallback(async () => {
        // console.log("webcamCapture");
        setMode("preview")
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
        setMode("file");
        const jpgImage = event.target.files[0];
        setFile(jpgImage);
        //validate jpg png etc
        //bootstrap popdown validator
        const filename = genImgFileName(recipe.name);
        //needs validation logic to ensure a picture file is selected
        const downloadURL = await imgUploadHandler(jpgImage, filename, recipe.userID);
        // console.log("downloadURL", downloadURL);
        setUrl(downloadURL);
    }

    const captureMode = () => {
        switch (mode) {
            case "select":
                setMode("capture");
                return;
            case "capture":
                setMode("preview");
                return;
            default:
                return;
        }
    }

    const submitForms = (route) => {
        let comments = recipe.comments;
        let urls = recipe.imageUrls;
        if (comment || comment != "") {
            comments.push({ text: comment })
        }
        //  urls.push(url);
        if (url) { urls[0] = url };
        // setting and uploading the photo logic goes here
        setRecipe({
            ...recipe,
            comments: comments,
            imageUrls: urls
        });
        switch (route) {
            case "HOME":
                history.push('/recipebox');
                return;
            case "EDIT":
                history.push('/create/info');
                return;
            default:
                console.log("error");
                return;
        }
    }

    const onChange = (e) => {
        setComment({ ...comment, text: e.target.value.trim() });
    }

    const onComplete = (e) => {
        e.preventDefault();
        console.log("Hello OnSubmit");
    }

    return (
        <>
            <h1 className="display-2 font-brand display-3-small mb-0">all done!</h1>

            {mode === "capture" ?
                <>
                    <span className="divider-color"></span>
                    <section className="webcam text-center">
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                        />
                        <button className="rb-btn btn-info w-100 my-3" type="button" onClick={webcamCapture}>
                            Capture photo
                        </button>
                    </section>
                </> :
                mode === "preview" ?
                    <>
                        <span className="divider-color"></span>
                        <section>
                            {imgSrc && (
                                <img
                                    src={imgSrc} alt="webcam screenshot"
                                />
                            )}
                        </section>
                    </> :
                    mode === "file" ?
                        <div className="font-sans text-center divider mx-2 my-0">
                            <span className="font-weight-normal pr-1">File Selected:</span>{file.name}
                        </div>
                        :
                        <span className="divider-color"></span>}

            <form onSubmit={e => onComplete(e)}>

                {mode === "select" ? <div className="d-flex">
                    {desktop ?
                        null
                        : <button className="rb-btn flex-fill" onClick={captureMode}>
                            Use Webcam
                    </button>}
                    {/* Take out flex-fill below for mobile */}
                    <div className={desktop ? "form-file form-tweak w-50 ml-2" : "form-file form-tweak"}>
                        <input
                            type="file"
                            accept=".jpg,.png"
                            className="form-file-input h-100"
                            id="filePhoto"
                            onChange={localfileSelectedHandler}
                        />
                        <label className="form-file-label font-book-italic h-100 text-center d-flex align-items-center">
                            <div className="form-file-text rb-btn-form h-100 form-tweak">{desktop ? "Upload a photo..." : "Take a photo..."}</div>
                            {/* <span className="form-file-button">Browse</span> */}
                        </label>
                    </div>
                </div> : null}
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
