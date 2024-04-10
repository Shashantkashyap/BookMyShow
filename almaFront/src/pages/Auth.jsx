import React, { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import pose from "../assets/pose.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Authentication page component
function Auth() {
  // State to manage active component (Login or Signup)
  const [active, setActive] = useState(false);

  return (
    <>
      <div>
        {/* Navbar component */}
        <Navbar />
      </div>

      <div className="text-3xl font-semibold text-red-500 text-center mt-3 mb-5">Login first to explore the application ...</div>
    
      <div className=" mx-auto flex flex-row max-md:flex-col gap-10 min-h-screen  bg-gray-100 p-5 rounded-md">
        {/* Left */}
        <div className="w-[30%] max-md:w-full ml-[20%] max-md:ml-1  h-full">
          {/* Image */}
          <img src={pose} alt="" />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-10 rounded-md mt-10">
          {/* Tabs for Login and Signup */}
          <div className="flex text-2xl font-semibold text-yellow-700 gap-20 max-md:gap-10 max-md:mx-auto underline cursor-pointer">
            <p onClick={() => setActive(true)}>Login</p>
            <p onClick={() => setActive(false)}>Signup</p>
          </div>

          <div>
            {/* Conditional rendering based on active state */}
            {active === false ? <Signup /> : <Login></Login>}
          </div>
        </div>
      </div>
      <div>
        {/* Footer component */}
        <Footer />
      </div>
    </>
  );
}

export default Auth;
