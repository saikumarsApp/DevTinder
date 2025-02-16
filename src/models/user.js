const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        tyep: String
    },
    age: {
        type: Number
    },
    email: {
        type: String 
    },
    gender: { 
        type: String
    },
    number: {
        type: Number
    }
});

module.exports = mongoose.model("User", userSchema);