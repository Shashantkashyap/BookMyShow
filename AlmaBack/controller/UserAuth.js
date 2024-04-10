// Import required modules
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Otp = require("../models/Otp");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

// Controller function to handle user sign up
exports.signUp = async (req, res) => {
    // Extract data from request body
    const { number, name, email, otp } = req.body;

    // Check if required fields are filled
    if (!number || !name || !email || !otp) {
        return res.status(400).json({
            success: false,
            message: "You should fill required fields",
        });
    }

    try {
        // Check if email is already registered
        const check_email = await User.findOne({ email });
        if (check_email) {
            return res.status(400).json({ success: false, message: "User already registered" });
        }

        // Find recent OTP for the email
        const recentOtp = await Otp.find({ email }).sort({ createdAt: -1 }).limit(1);
        if (recentOtp.length === 0 || recentOtp[0].otp !== otp) {
            return res.status(400).json({ success: false, message: "Invalid OTP" });
        }

        // Create new user
        const user = await User.create({ name, number, email });

        // Generate JWT token
        const payload = {
            email: user.email,
            id: user._id,
            accountType: user.accountType,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

        // Remove password from user object
        user.token = token;
        user.password = undefined;

        // Send success response with user details and token
        return res.status(200).json({ success: true, message: "User created", user, token });
    } catch (err) {
        console.error("Error in creating user: ", err);
        return res.status(500).json({ success: false, message: "Unable to create user" });
    }
};

// Controller function to handle user login
exports.login = async (req, res) => {
    // Extract data from request body
    const { email, otp } = req.body;

    // Check if required fields are filled
    if (!email || !otp) {
        return res.status(400).json({ success: false, message: "You should fill required fields" });
    }

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Email is not registered" });
        }

        // Find recent OTP for the email
        const recentOtp = await Otp.findOne({ email }).sort({ createdAt: -1 }).limit(1);
        if (!recentOtp || otp !== recentOtp.otp) {
            return res.status(400).json({ success: false, message: "Invalid OTP" });
        }

        // Generate JWT token
        const payload = {
            email: user.email,
            id: user._id,
            accountType: user.accountType,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

        // Send success response with token and user details
        return res.status(200).json({ success: true, message: "Logged in Successfully", token, user });
    } catch (err) {
        console.error("Error in login: ", err);
        return res.status(500).json({ success: false, message: "Unable to login user" });
    }
};

// Controller function to send OTP
exports.otpSend = async (req, res) => {
    try {
        const { email } = req.body;

        // Generate OTP
        const generatedOTP = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });

        // Create OTP payload
        const otpPayload = { email, otp: generatedOTP };

        // Create OTP record
        await Otp.create(otpPayload);

        // Send success response
        return res.status(200).json({ success: true, message: "OTP sent successfully" });
    } catch (error) {
        console.error("Error in sending OTP:", error);
        return res.status(500).json({ success: false, message: "Error in sending OTP" });
    }
};
