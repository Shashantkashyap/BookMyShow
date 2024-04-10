import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

function Booking() {
  const base = "https://bookmyshow-q5p6.onrender.com/api";
  const [bookingDetails, setBookingDetails] = useState(null);

  const getBookings = async () => {
    try {
      const response = await axios.get(`${base}/booking`);
      if (response.data && response.data.lastBooking) {
        const lastBooking = response.data.lastBooking;
        setBookingDetails(lastBooking);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#EBF4F5] to-[#b5c6e0]">
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="max-w-md mx-auto bg-gradient-to-r from-[#aed1ef] via-[#f2dfc1] to-[#f0b9ef] rounded-lg overflow-hidden shadow-lg mb-10 mt-10 transition-scale hover:scale-[1.03] duration-500">
          {bookingDetails && (
            <div className="p-6">
              <h2 className="text-4xl font-bold text-center text-red-700 mb-4">
                {bookingDetails.movie}
              </h2>
              
              <p className="text-xl font-bold mb-4">
                Theatre: <span className="ml-5 font-semibold">{bookingDetails.theatre}</span>
              </p>
              <div className="bg-black h-[1px] w-full mb-4"></div>
              <p className="text-xl font-bold mb-4">
                Movie Time: <span className="ml-5 font-semibold">{bookingDetails.movieTime}</span>
              </p>
              <div className="bg-black h-[.8px] w-full mb-4"></div>
              <div className=" flex gap-5">
              <p className="text-xl font-bold ">Seats:</p>
              <div className="font-semibold text-xl">
                {Object.entries(bookingDetails.seats).map(([seat, value]) => (
                  value !== 0 && (
                    <div key={seat}>
                      {seat}: {value}
                    </div>
                  )
                ))}
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
