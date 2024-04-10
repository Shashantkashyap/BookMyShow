// Import mongoose library for MongoDB connection
const mongoose = require("mongoose");

// Load environment variables from .env file
require("dotenv").config();

// Function to establish database connection
function dbConnect() {
    mongoose
        .connect(
            process.env.MONGODB_URI // Connect to MongoDB using the provided URI from environment variables
        )
        .then(() => console.log("Db connected successfully")) // Log success message if connection is established
        .catch((err) => console.log(`error in DB connection, ${err}`)); // Log error message if connection fails
}

// Export the database connection function
module.exports = dbConnect;
