// Import necessary modules
const express = require("express");
const router = express.Router();

// Import controller functions

const { bookMovie, getLastBooking} = require("../controller/bookingController");
const { signUp, login, otpSend } = require("../controller/UserAuth");

// Routes for booking related operations

router.post("/", bookMovie); // Route to book a movie
router.get("/", getLastBooking); // Route to get the last booking


// Routes for user authentication

router.post("/signup", signUp); // Route to sign up
router.post("/login", login); // Route to log in
router.post("/otp", otpSend); // Route to send OTP

// Export the router
module.exports = router;
