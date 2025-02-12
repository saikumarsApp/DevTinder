const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    res.send({firstname: "Sai Kumar", lastname: "Bhukya"});
})
app.use("/hello", (req, res) => {
    res.send("Hello Welcome!");
})

app.listen(3000, () => {
    console.log("Server  is running");
})