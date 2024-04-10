import React from "react";
import logo from "../assets/logo.png";
import {useNavigate} from "react-router-dom"

// Footer component for displaying footer content
function Footer() {
  const navigate = useNavigate()
  return (
    <div className="w-[100%]">
      {/* Divider and logo */}
      <div className="bg-white flex items-center gap-10 max-sm:gap-3 justify-center">
        <div className="w-[39%] h-[1px] bg-black"></div> {/* Horizontal line */}
        <img src={logo} alt="" className="w-[10%] max-sm:w-[30%]" /> {/* Logo */}
        <div className="w-[39%] h-[1px] bg-black"></div> {/* Horizontal line */}
      </div>

      {/* Social media icons */}
      <div className="flex items-center justify-center gap-3 mt-10">
        <div onClick={()=>navigate("https://www.facebook.com/shashant.kashyap/")}>
          {/* Facebook icon */}
          <img
            src="https://img.freepik.com/free-psd/facebook-logo-3d-social-media-icon-isolated_47987-11965.jpg"
            alt=""
            className="w-12 h-12 rounded-full hover:scale-[1.05] transition duration-200 "
          />
        </div>
        <div onClick={()=>navigate("https://twitter.com/KashyapShashant")}>
          {/* Twitter icon */}
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2339132689/display_1500/stock-vector-high-resolution-twitter-x-app-logo-icon-png-download-isolated-on-transparent-background-vector-2339132689.jpg"
            alt=""
            className="w-12 h-12 rounded-full hover:scale-[1.05] transition duration-200"
          />
        </div>
        <div onClick={()=>navigate("https://www.instagram.com/kashyapshashant/")}>
          {/* Instagram icon */}
          <img
            src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049581.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712188800&semt=ais"
            alt=""
            className="w-12 h-12 rounded-full hover:scale-[1.05] transition duration-200"
          />
        </div>
        <div onClick={()=>navigate("https://www.linkedin.com/in/shashant-kashyap-b812a0155/")}>
          {/* LinkedIn icon */}
          <img
            src="https://www.freepnglogos.com/uploads/linkedin-logo-hd-png-3.png"
            alt=""
            className="w-12 h-12 rounded-full hover:scale-[1.05] transition duration-200"
          />
        </div>
      </div>

      {/* Copyright and disclaimer */}
      <div className="text-sm max-sm:text-[12px] flex flex-col gap-2 w-[82%] max-sm:w-[90%] items-center justify-center mx-auto mt-10 text-slate-800 font-semibold mb-5">
        {/* Copyright */}
        <p>Copyright 2024 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
        {/* Disclaimer */}
        <div className="flex flex-col justify-center items-center">
          <p>
            The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the content
            and images on this website is intended to promote,
          </p>
          <p>
            the works and no endorsement of the artist shall be implied. Unauthorized use is
            prohibited and punishable by law.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
