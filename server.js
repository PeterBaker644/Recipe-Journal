const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const admin = require('firebase-admin');

const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require("./routes/apiRoutes");
const routes = require("./routes");

const serviceAccount = require("./config/serviceAccountKey.json");

// Initialize Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://recipe-box-6f07a.firebaseio.com"
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/recipes_hybrid_DB",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

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

// Comment out for testing the api routes without authentication.
app.use("/api", checkAuth);
app.use("/api", apiRoutes);


app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
