// Import necessary modules
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

// Set the port for the server
const Port = process.env.PORT || 8080;

// Import routes
const bookingRoute = require("./routes/booking");

// Import database connection function
const dbConnect = require("./config/connection");

// Establish database connection
dbConnect();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors({ // Enable CORS
    origin: "http://localhost:5173" // Allow requests from this origin
}));

// Test route
app.get("/", (req, res) => {
    res.status(200).json({
        succcess: true,
        message: "Server chal gaya bhai" // Success message for testing
    });
});

// Route for booking operations
app.use("/api/booking", bookingRoute);

// Start the server
app.listen(Port, () => {
    console.log(`WELCOME to server no. ${Port}`); // Log server start message
});
