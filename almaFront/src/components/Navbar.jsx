import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import "./Navbar.css";
import { useNavigate, NavLink } from "react-router-dom";

// Function component for Navbar
function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false); // State for search dropdown toggle
  const [selectedSearchOption, setSelectedSearchOption] = useState(null); // State for selected search option

  // Function to toggle search dropdown
  const handleSearchDropdownToggle = () => {
    setIsSearchDropdownOpen(!isSearchDropdownOpen);
  };

  // Function to handle search option selection
  const handleSearchOptionSelect = (option) => {
    setSelectedSearchOption(option);
    setIsSearchDropdownOpen(false);
  };

  const handleAuth = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  
  const handleBooking = ()=>{
    if(token){
      navigate("/previousBooking")
    }else{
      navigate("/auth")
    }
  }

  const handleContact = ()=>{
    if(token){
      navigate("/contact")
    }else{
      navigate("/auth")
    }
  }

  return (
    <div className="flex justify-between items-center bg-white p-4 max-md:p-2 bg-gradient-to-br from-white to-red-200 via-gray-50">
      {/* Left section */}
      <div
        className="flex items-center w-[70%]"
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Logo */}
        <NavLink to={"/"}>
          <div className="mr-8 ml-10 max-md:ml-2 max-md:mr-2">
            <img
              src={logo}
              alt="BookMyShow"
              className="h-16 max-md:h-12"
              color="black"
            />
          </div>
        </NavLink>

        {/* Search input */}
        <div className="w-[60%] relative font-semibold">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-md w-full"
            onClick={handleSearchDropdownToggle}
            value={selectedSearchOption || ""}
            readOnly
          />
          {/* Search dropdown */}
          {isSearchDropdownOpen && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow animate-slideIn cursor-pointer">
              {/* Search dropdown items */}
              <div
                className="py-2 px-4 font-semibold cursor-pointer"
                onClick={() => handleSearchOptionSelect("Movies")}
              >
                Movies
              </div>
              <div
                className="py-2 px-4 font-semibold cursor-pointer"
                onClick={() => handleSearchOptionSelect("Live Events")}
              >
                Live Events
              </div>
              <div
                className="py-2 px-4 font-semibold cursor-pointer"
                onClick={() => handleSearchOptionSelect("Sports")}
              >
                Sports
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-10 max-md:gap-2 relative">
        {/* User avatar */}
        <div className="w-10 h-10 max-md:w-7 max-md:h-7 rounded-full overflow-hidden">
          <img
            src="https://w0.peakpx.com/wallpaper/764/399/HD-wallpaper-funny-boy-boy-crazy-cute-funny.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sign in button (hidden on small screens) */}
        <div className=" max-md:hidden" onClick={handleAuth}>
          <button className="py-1 px-4 text-lg font-semibold bg-gradient-to-r from-[#fe8ed6] to-[#fed1c7] rounded-md">
            {token === null ? <div>Sign in</div> : <div>Logout</div>}
          </button>
        </div>

        {/* Menu icon */}
        <div className="">
          <HiMenu
            className="text-gray-700 text-3xl cursor-pointer mr-10 max-md:mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {/* Menu dropdown */}
          {isMenuOpen && (
            <div className="absolute top-10 right-[10px] mt-2 w-40 max-sm:w-28 font-semibold bg-white border border-gray-300 rounded-md shadow animate-slideIn">
              {/* Menu items */}
              <NavLink to={"/auth"}>
                <div className="py-2 px-4 max-md:px-2 cursor-pointer">
                  <button className="text-lg max-sm:text-sm font-semibold bg-gradient-to-r from-[#93A5CF] to-[#E4EfE9] px-4 max-sm:px-2 py-1 rounded-md">
                    {token === null ? <div>Sign in</div> : <div>Logout</div>}
                  </button>
                </div>{" "}
              </NavLink>
              
              <div  onClick={handleBooking}>
                <div className="py-2 px-4 max-sm:py-1 max-sm:px-2 max-sm:text-sm font-semibold cursor-pointer">
                  Bookings
                </div>
              </div>
              <div onClick={handleContact}>
                {" "}
                <div className="py-2 px-4 max-sm:py-1 max-sm:px-2 max-sm:text-sm font-semibold cursor-pointer">
                  Contact
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
