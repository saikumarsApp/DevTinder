const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();


app.post("/signup", async (req, res) => {
    const user = new User({
        firstName: "Sai Kumar",
        lastName: "Bhukya",
        email: "saikumar@bhukya",
        password: "saikumar@123"
    });
    try{
        await user.save();
        res.send("user added successfully");
    }catch(err){
        res.send(err.message);
    }
});

app.get("/user", async(req, res) => {
    res.send("Hello");
})

connectDB()
    .then(() => {
    console.log("Connection is Established");  
    app.listen(3000, () => {
        console.log("Server  is running");
    })  
    })
    
    .catch((err) => {
    console.error("Connection Error");
})

