const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());

app.get("/users", async(req, res) => {
    try{
        const users = await User.find({});
        res.send(users);
        
    }catch(err){
        res.status(404).send(`Error is ${err.message}`);
    }
})

app.post("/signup", async (req, res) => {
    const user = new User(req.body);
    try{
        await user.save();
        res.send("user added successfully");
    }catch(err){
        res.send(err.message);
    }
});


app.patch("/update", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try{
        const update = await User.findByIdAndUpdate(userId, data)
        res.send("user updated successfully");
    }catch(err){
        res.status(404).send(`error is ${err.message}`);
    }
});

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

