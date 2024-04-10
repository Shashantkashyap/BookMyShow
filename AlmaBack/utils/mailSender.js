// Import nodemailer library for sending emails
const nodemailer = require("nodemailer");

// Load environment variables from .env file
require("dotenv").config();

// Function to send email
const mailSender = async (email, title, body) => {
    try {
        // Create a transporter for sending emails
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST, // SMTP host for sending email
            auth: {
                user: process.env.MAIL_USER, // Email account username
                pass: process.env.MAIL_PASSWORD // Email account password
            }
        });

        // Send email using the transporter
        let info = await transporter.sendMail({
            to: `${email}`, // Recipient email address
            from: "Shashant.kashyp999@gmail.com", // Sender email address
            subject: `${title}`, // Email subject
            html: `Your verification code for Bookmyshow: ${body}
                        Explore the World of joy....` // Email body (HTML format)
        });

        // Return information about the sent email
        return info;
    } catch (err) {
        console.log("Error in Sending Email", err.message); // Log error if email sending fails
    }
};

// Export the mailSender function
module.exports = mailSender;
