const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    movie :{
        type: String,
        required: true
    },
    movieTime :{
        type: String,
        required: true
    },
    theatre :{
        type: String,
        required: true
    },
    seats :{
        A1 :{
            type: Number,
            default: 0
        },
        A2 :{
            type: Number,
            default: 0
        },
        A3 :{
            type: Number,
            default: 0
        },
        A4 :{
            type: Number,
            default: 0
        },
        D1 :{
            type: Number,
            default: 0
        },
        D2 :{
            type: Number,
            default: 0
        },
    }
},{timestamps:true});

module.exports =  mongoose.model("Booking", bookingSchema);

