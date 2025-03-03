const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
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
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validation(value){
            if (!["male", "female", "others"].includes(value)){
                throw new Error("Invalid Gender")
            }
        }
    },
    gender: { 
        type: String,
        
    },
    number: {
        type: Number
    },
    timestamp: true
});

module.exports = mongoose.model("User", userSchema);