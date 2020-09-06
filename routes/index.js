const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const admin = require('firebase-admin');
const serviceAccount = require("../config/serviceAccountKey.json");

// Initialize Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://recipe-box-6f07a.firebaseio.com"
});

// This function might be able to live in apiRoutes.js. Let me know if you'd rather have it there, or feel free to move it.
function checkAuth(req, res, next) {
    console.log("[SERVER] Beginning Authentication", req.headers);
    if (req.headers.authorization) {
        admin.auth().verifyIdToken(req.headers.authorization)
            .then(() => {
                console.log("[SERVER] Authorization successful");
                next()
            }).catch(() => {
                console.log("[SERVER] Found unauthorized token");
                res.status(403).send('Unauthorized')
            });
    } else {
        console.log("[SERVER] No Authorization token found");
        res.status(403).send('Unauthorized')
    }
}

// API Routes
// router.use("/api", checkAuth);
console.log("This is a test");
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
