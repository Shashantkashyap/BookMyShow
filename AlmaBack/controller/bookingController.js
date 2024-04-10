const Booking = require("../models/Schema");

// Controller function to book a movie
exports.bookMovie = async (req, res) => {
    // Extract movie details from request body
    const { movie, theatre, movieTime, seats } = req.body;
    console.log(movie, theatre, movieTime, seats);

    try {
        // Create a new booking record in the database
        const newBooking = await Booking.create({ movie, theatre, movieTime, seats });
        await newBooking.save(); // Save the new booking
        // Send success response with new booking details
        res.status(200).json({
            success: true,
            message: "Booking created successfully",
            newBooking
        });
    } catch (err) {
        // Log the error for debugging
        console.error("Error in booking:", err);

        let errorMessage;
        let statusCode;

        // Check the type of error
        if (err.name === 'ValidationError') {
            errorMessage = "Invalid data provided for booking.";
            statusCode = 400; // Bad Request
        } else {
            errorMessage = "Error in booking, please try again later.";
            statusCode = 500; // Internal Server Error
        }

        // Send error response with appropriate status code and message
        res.status(statusCode).json({
            success: false,
            error: errorMessage
        });
    }
};

// Controller function to get the last booking
exports.getLastBooking = async (req, res) => {
    try {
        // Find the last booking in the database
        const lastBooking = await Booking.findOne().sort({ _id: -1 });
        if (!lastBooking) { // If no booking is found
            return res.status(404).json({
                success: false,
                message: "There is no booking yet"
            });
        }
        // Send success response with the last booking details
        res.status(200).json({
            success: true,
            message: "This is your last booking",
            lastBooking
        });

    } catch (err) {
        // Log the error for debugging
        console.error("Error in getting the last booking:", err);

        // Send error response if fetching the last booking fails
        res.status(500).json({
            success: false,
            message: "Error in getting the last booking"
        });
    }
};

// This function is commented out as it's not currently in use
/*
exports.getAllBookings = async (req,res)=>{
    try{
        const lastBooking = await Booking.find({});
        if(!lastBooking){
            res.status(404).json({
                success:false,
                message:"There  is no booking yet"
            })
        }
        res.status(200).json({
            success:true,
            message: "This is your All bookings",
            lastBooking
        })

    }catch(err){
        res.status(404).json({
            success:false,
            message:"Error in getting the last booking",

        })
    }
}
*/
