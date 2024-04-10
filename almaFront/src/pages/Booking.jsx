import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Booking() {
  const navigate = useNavigate();
  const base = "https://bookmyshow-q5p6.onrender.com/api";

  const movieName = useSelector((state) => state.movie.movieName); // Accessing movieName state from Redux store

  // State to manage booking details
  const [bookingDetails, setBookingDetails] = useState({
    movie: movieName,
    movieTime: "",
    theatre: "",
    seats: {
      A1: 0,
      A2: 0,
      A3: 0,
      A4: 0,
      D1: 0,
      D2: 0,
    },
  });

  // State to manage selected time slot
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // State to manage selected theatre
  const [selectedTheatre, setSelectedTheatre] = useState(null);

  // State to manage visibility of confirmation overlay and error message
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Function to update booking details when a time slot is clicked
  const handleTimeSlotClick = (time) => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      movieTime: time,
    }));
    setSelectedTimeSlot(time);
  };

  // Function to update booking details when a theatre is clicked
  const handleTheatreClick = (theatre) => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      theatre: theatre,
    }));
    setSelectedTheatre(theatre);
  };

  // Function to update booking details when a seat is selected
  const handleSeatSelection = (seatType, quantity) => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      seats: {
        ...prevDetails.seats,
        [seatType]: quantity,
      },
    }));
  };

  // Function to handle booking submission
  const handleBooking = async () => {
    try {
      const res = await axios.post(`${base}/booking`, bookingDetails);
      console.log(res);
      setShowConfirmation(true); // Show confirmation overlay after successful booking
      setBookingDetails({
        movie: movieName,
        movieTime: "",
        theatre: "",
        seats: {
          A1: 0,
          A2: 0,
          A3: 0,
          A4: 0,
          D1: 0,
          D2: 0,
        },
      });
      setSelectedTimeSlot(null);
      setSelectedTheatre(null);
    } catch (error) {
      setErrorMessage("Failed to book the movie. Please try again later.");
      console.error("Booking Error:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#EBF4F5] to-[#b5c6e0]">
      <Navbar />
      <div className="w-10/12 max-sm:w-[95%] mx-auto p-10 max-sm:p-2">
        <div className="text-[35px] max-sm:text-[25px] font-semibold mb-6 mt-5">
          Book that show !!
        </div>
        <div className="flex flex-col gap-5">
          {/* Selected Movie */}
          <div className="flex flex-row max-sm:flex-col border-[1px] border-black rounded-md p-6 max-sm:p-2 max-sm:gap-3 gap-10 items-center shadow-2xl bg-gradient-to-r from-[#aed1ef] via-[#f2dfc1] to-[#f0b9ef]">
            <p className="text-2xl font-semibold">Selected Movie :</p>
            <div className="text-2xl text-red-800 font-bold">{movieName}</div>
          </div>

          {/* Time Slot */}
          <div className="border-[1px] border-black rounded-md p-6 max-sm:p-2 flex flex-col max-sm:flex-wrap gap-6 shadow-2xl bg-gradient-to-r from-[#aed1ef] via-[#f2dfc1] to-[#f0b9ef]">
            <p className="text-2xl max-sm:text-xl font-semibold">
              Select A Time Slot :
            </p>
            <div className="flex gap-5 max-sm:flex-wrap font-semibold">
              {["10:00 Am", "01:00 Pm", "03:00 Pm", "08:00 Pm", "10:00 Pm"].map(
                (time) => (
                  <div
                    key={time}
                    className={`p-2 border-[2px] border-black rounded-md hover:scale-[1.05] transition-scale duration-200 cursor-pointer ${
                      selectedTimeSlot === time ? "bg-gray-200" : ""
                    }`}
                    onClick={() => handleTimeSlotClick(time)}
                  >
                    <div>{time}</div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Theatre Selection */}
          <div className="border-[1px] border-black rounded-md p-6 max-sm:p-2 flex flex-col gap-6 shadow-2xl bg-gradient-to-r from-[#aed1ef] via-[#f2dfc1] to-[#f0b9ef]">
            <p className="text-2xl max-sm:text-xl font-semibold">
              Select Theatre :
            </p>
            <div className="flex max-sm:flex-wrap max-sm:text-sm gap-5 font-semibold">
              {[
                "Pacific: Anand Vihar",
                "Wave: Kaushambi",
                "Delit: Delhi Gate",
                "INOX: Nehru Place",
                "Carnival: Pitampura",
              ].map((theatre) => (
                <div
                  key={theatre}
                  className={`p-2 border-[2px] border-black rounded-md hover:scale-[1.05] transition-scale duration-200 cursor-pointer ${
                    selectedTheatre === theatre ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleTheatreClick(theatre)}
                >
                  <div>{theatre}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Seat Selection */}
          <div className="border-[1px] border-black rounded-md p-6 max-sm:p-2 flex flex-col gap-6 shadow-2xl bg-gradient-to-r from-[#aed1ef] via-[#f2dfc1] to-[#f0b9ef]">
            <p className="text-2xl max-sm:text-xl font-semibold">
              Select the seats :
            </p>
            <div className="flex max-sm:flex-wrap max-sm:ml-4 mb-2 gap-5 items-center">
              {Object.entries(bookingDetails.seats).map(
                ([seatType, quantity]) => (
                  <div
                    key={seatType}
                    className="p-3 border-[2px] border-black rounded-md flex flex-col gap-2 justify-center items-center hover:scale-[1.05] transition-scale duration-200 cursor-pointer"
                  >
                    <p className="text-xl max-sm:text-sm font-semibold text-center">
                      Type {seatType}
                    </p>
                    <select
                      value={quantity}
                      onChange={(e) =>
                        handleSeatSelection(seatType, parseInt(e.target.value))
                      }
                      className="text-xl max-sm:text-sm px-2 rounded-md"
                    >
                      {[...Array(6).keys()].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Book Now Button */}
          <button
            onClick={handleBooking}
            className="px-6 py-3 font-bold text-xl shadow-2xl bg-gradient-to-r from-[#aed1ef] via-[#c5aef2] to-[#8578ea] w-fit rounded-md mx-auto mt-5 hover:scale-[1.05] transition-scale duration-200 cursor-pointer"
          >
            Book Now
          </button>

          {/* Display error message if there's any */}
          {errorMessage && (
            <div className="text-red-600 font-semibold text-center">
              {errorMessage}
            </div>
          )}

          {/* Previous Bookings */}
          <div className="text-2xl max-sm:text-lg font-semibold mx-auto mt-5 mb-5">
            <span className="text-blue-600 font-bold mr-1 cursor-pointer">
              Click
            </span>{" "}
            to view previous bookings . . .
          </div>
        </div>
      </div>
      <div className="h-full">
        <Footer />
      </div>

      {/* Confirmation overlay */}
      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-5">
              Movie Booked!
            </h2>
            <p className="text-xl text-center">
              Your movie has been successfully booked.
            </p>
            <div className=" flex justify-between mt-5">
              <button
                onClick={() => setShowConfirmation(false)}
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
              >
                Close
              </button>

              <button
                onClick={() => navigate("/previousBooking")}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-gray-700"
              >
                Check Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
