const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    number:{
        type: Number,
        required: true,
        
    },
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    otp:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Otp"
    }
});

module.exports = new mongoose.model("User", userSchema);