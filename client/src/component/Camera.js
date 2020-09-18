import React, { useState } from "react";
import Webcam from "react-webcam";
import firebase from 'firebase';

function WebcamCapture() {
    
    const [selectedFile, setSelectedFile] = useState();

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        fileSelectedHandler(imageSrc);
    }, [webcamRef, setImgSrc]);

    //once permission has been granted by the user the screenshot is displayed.
    //screenshot constantly updates and looks like video
    //click capture photo and the screenshot
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }

    function fileSelectedHandler(imageSrc) {
        console.log("Photo file handler event", imageSrc);
        setSelectedFile({
            selectedFile: imageSrc
        });
        // Points to the root reference
        var storageRef = firebase.storage().ref();

        //filename goes here, and should? be changed for every upload
        var file = dataURLtoFile(imageSrc, 'testUpload3.png');
        
        console.log("stored file is ..", file);
        var metadata = {
            contentType: 'image/jpeg'
        };
        var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                });
            });
    }

    return (
        <div>
            <p>this is camera component</p>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            <button onClick={capture}>Capture photo</button>
            {imgSrc && (
                <img
                    src={imgSrc}  alt="food"         
                />
            )}

        </div>
    );
}
export default WebcamCapture;