import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Movies from "../components/Movies";
import Poster from "../components/Poster";
import Shows from "../components/Shows";
import Footer from "../components/Footer";

// Home page component
function Home() {
  console.log(localStorage.getItem("token"));
    return (
    <div className=" overflow-hidden">
      {/* Navbar component */}
      <Navbar />
      {/* Divider */}
      <div className="bg-gray-900 w-full h-[2px]"></div>
      {/* Section heading for recommended movies */}
      <p className="px-16  max-sm:px-4  mt-20 max-sm:mt-10 text-3xl max-sm:text-[24px] font-semibold">
        Recommended Movies :
      </p>

      {/* Component for displaying recommended movies */}
      <div className="">
        <Movies />
      </div>
      {/* Poster component for mobile view */}
      <div className="w-11/12 mx-auto p-10 max-sm:hidden mr-20">
        <Poster />
      </div>

      {/* Section heading for popular shows */}
      <p className="px-16 mt-10 text-3xl max-sm:px-4 max-sm:mt-10 max-sm:text-[25px] font-semibold">
        Popular Shows :
      </p>

      {/* Component for displaying popular shows */}
      <div>
        <Shows />
      </div>

      {/* Footer component */}
      <div className="mt-20 mb-3">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
