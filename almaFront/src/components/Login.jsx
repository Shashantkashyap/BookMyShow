import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Login component for user authentication
function Login() {
  
  const base = "https://bookmyshow-q5p6.onrender.com/api";
  const navigate = useNavigate();
  const [data, setData] = useState({
    email:"",
    otp:""
  });

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
    
    try {
      const res = await axios.post(`${base}/login`, { email: data.email, otp: data.otp });
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigate("/")
        toast.success("Logged in successful!");
      } else if (res.response.status === 400) {
        toast.error("User not Registered");
      } else {
        toast.error("User not Registered");
      }
    } catch (e) {
      console.log(e);
      toast.error("Login failed! Try again later");
    }
  };

  return (
    <div className='flex flex-col gap-10 rounded-md'>
      <Toaster />
      <div>
        {/* Input for email */}
        <input type="text" placeholder='Enter your Email' className='border-[.5px] rounded-md px-5 py-3 w-full' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
      </div>

      <div className='flex gap-3'>
        <div>
          {/* Input for OTP */}
          <input type="text" placeholder='Enter your OTP' className='border-[.5px] rounded-md px-5 py-3 w-full' value={data.otp} onChange={(e) => setData({ ...data, otp: e.target.value })} />
        </div>
        <div>
          {/* Button to send OTP */}
          <button onClick={generateOTP} className="ml-4 max-md:ml-0 flex items-center justify-end focus:outline-none tracking-wide px-4 max-md:p-1 py-3 rounded shadow-md text-center text-white text-md max-md:text-sm cursor-pointer" style={{ background: "linear-gradient(261.13deg, rgb(248, 176, 69) 10.01%, rgb(248, 136, 73) 84.67%)" }}>Send OTP</button>
        </div>
      </div>

      <div onClick={handleSubmit}>
        {/* Button for login */}
        <button className="ml-4 flex items-center justify-end focus:outline-none tracking-wide px-4 py-3 rounded shadow-md text-center text-white text-lg cursor-pointer" style={{ background: "linear-gradient(261.13deg, rgb(248, 176, 69) 10.01%, rgb(248, 136, 73) 84.67%)" }}>Login</button>
      </div>

      {/* Link for signup */}
      <p className='text-lg font-semibold mb-4'>Already have an account? <span onClick={() => navigate("/signup")} className=' text-yellow-700 font-bold'>Signup</span></p>
    </div>
  );
}

export default Login;
