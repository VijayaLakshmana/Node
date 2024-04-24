const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/latestdb")
.then(() => {
    console.log("Success: Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
