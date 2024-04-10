import React, { useState } from 'react';
import Select from 'react-select';
import countryCode from "../data/countrycode.json";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import {useNavigate} from "react-router-dom"

// Signup component for user registration
function Signup() {
  const navigate = useNavigate()
  const base = "https://bookmyshow-q5p6.onrender.com";
  const [data, setData] = useState({
    phone: "",
    name: "",
    email: "",
    otp: ""
  });

  const [selectedCountry, setSelectedCountry] = useState(countryCode[0]);

  // Function to handle country change
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  // Function to handle phone number change
  const handlePhoneNumberChange = (e) => {
    setData({ ...data, phone: e.target.value });
  };

  // Function to generate OTP
  const generateOTP = async () => {
    try {
      console.log(data.email);
      const res = await axios.post(`${base}/otp`, { email: data.email });
      console.log(res);
      toast.success("OTP generated successfully");
    } catch (err) {
      toast.error("Unable to send OTP");
    }
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    console.log(data);
    try {
      const res = await axios.post(`${base}/signup`, { email: data.email, number: data.phone, name: data.name, otp: data.otp });
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        toast.success("Signup successful!");
        navigate("/")
        toast.success("Now Login to continue...");
      } else if (res.response.status === 400) {
        toast.error("User Already Registered");
      } else {
        toast.error("User Already Registered");
      }
    } catch (e) {
      console.log(e);
      toast.error("Signup failed! Try again later");
    }
  };

  return (
    <div className='flex flex-col gap-6 rounded-md '>
      <Toaster />
      <div className='number '>
        <div className='flex gap-1 rounded-md'>
          {/* Select for country code */}
          <Select
            value={selectedCountry}
            onChange={handleCountryChange}
            options={countryCode}
            getOptionLabel={(option) => `${option.country} (${option.code})`}
            getOptionValue={(option) => option.code}
            className='code rounded-md shadow-md '
            styles={{
              control: (provided) => ({
                ...provided,
                width: '100px',
              }),
            }}
          />
          {/* Input for phone number */}
          <input type="tel" className='shadow-md numInput w-full border-[.5px] px-4 rounded-md' placeholder="Enter phone number" value={data.phone} onChange={handlePhoneNumberChange} />
        </div>
      </div>

      {/* Input for name */}
      <div>
        <input type="text" placeholder='Enter your name' className=' shadow-md  border-[.5px] rounded-md px-5 py-3 w-full' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
      </div>
      {/* Input for email */}
      <div>
        <input type="text" placeholder='Enter your Email' className=' shadow-md  border-[.5px] rounded-md px-5 py-3 w-full' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
      </div>

      <div className='flex gap-3'>
        <div>
          {/* Input for OTP */}
          <input type="text" placeholder='Enter your OTP' className='shadow-md border-[.5px] rounded-md px-5 py-3 w-full' value={data.otp} onChange={(e) => setData({ ...data, otp: e.target.value })} />
        </div>
        <div>
          {/* Button to send OTP */}
          <button onClick={generateOTP} className="ml-4 max-md:ml-0 flex items-center justify-end focus:outline-none tracking-wide px-4 max-md:p-1 py-3 rounded shadow-md text-center text-white text-md max-md:text-sm cursor-pointer" style={{ background: "linear-gradient(261.13deg, rgb(248, 176, 69) 10.01%, rgb(248, 136, 73) 84.67%)" }}>Send OTP</button>
        </div>
      </div>

      <div className='flex gap-3 items-center'>
        <div>
          <input type="checkbox" />
        </div>
        {/* Checkbox for receiving Whatsapp messages */}
        <p className=' text-lg font-semibold text-yellow-700'>Receive Whatsapp Messages...</p>
      </div>

      <div onClick={handleSubmit}>
        {/* Button for signup */}
        <button className="ml-4 flex items-center justify-end focus:outline-none tracking-wide px-4 py-3 rounded shadow-md text-center text-white text-lg cursor-pointer" style={{ background: "linear-gradient(261.13deg, rgb(248, 176, 69) 10.01%, rgb(248, 136, 73) 84.67%)" }}>Signup</button>
      </div>

      {/* Link for login */}
      <div>
        <p className='text-lg font-semibold mb-4'>Already have an account? <span className=' text-yellow-700 font-bold'>Login</span></p>
      </div>
    </div>
  );
}

export default Signup;
