import firebase from 'firebase';

export function genImgFileName(recipeName) {
    const date = Date.now();
    const filename = recipeName + date;
    // console.log("genImgFileName is ", filename);
    return (filename);
}

//once permission has been granted by the user the screenshot is displayed.
//screenshot constantly updates and looks like video
//click capture photo and the screenshot
export function dataURLtoFile(dataurl, filename) {
    // console.log("dataURLtoFile");
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    const file = new File([u8arr], filename, { type: mime })
    // console.log("dataURLtoFile", file);
    return (file);
}

export async function imgUploadHandler(jpgImage, filename) {
    try {
        console.log("imgHandler");
        // Points to the root reference
        var storageRef = firebase.storage().ref();
        var metadata = {
            contentType: 'image/jpeg'
        };

        var user = await firebase.auth().currentUser;

        if (user) {
            console.log("user.uid", user.uid);
            var uploadTask = await storageRef.child(user.uid + '/' + filename).put(jpgImage, metadata);
            const downloadURL = await uploadTask.ref.getDownloadURL();
            console.log("nested downloadURL", downloadURL);


            return (downloadURL);
        } else {
            console.log("error no user id found");
        }


    } catch (error) {
        console.log("ERR ===", error);
        // alert("Image uploading failed!");
    }
}
