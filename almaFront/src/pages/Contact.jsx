import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      setTimeout(()=>{
        toast.success("Message Sent Successfully")
      },1000)
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div>
      <Toaster />
      <Navbar />
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gradient-to-r from-[#aed1ef] via-[#f2dfc1] to-[#f0b9ef] transition-scale hover:scale-[1.03] duration-500 border-black border-[2px] rounded-lg overflow-hidden shadow-lg p-10 mb-10 mt-6">
          <div className="mb-4 ">
            <label htmlFor="name" className="block text-xl font-semibold text-gray-700 mb-2">Name :</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border-black border-[1px] shadow-md rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold text-gray-700 text-xl mb-2">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border-black border-[1px] shadow-md rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold text-gray-700 text-xl mb-2">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="border-black border-[1px] shadow-md rounded-md px-3 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-800">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
