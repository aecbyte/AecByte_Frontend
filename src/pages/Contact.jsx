import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram, FaLinkedin, FaPhone, FaLocationPin, FaEnvelope} from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
            setError("All fields are required.");
            return;
        }
        setError("");
        const response = await fetch('https://script.google.com/macros/s/AKfycbwV9Vf1zE5pDvIOKVXY4uQ_R4l4xsiP10MF8DX2UHJLttxJIcg3Bv6kJk-JQGDZXQk/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            mode: 'no-cors'
        });
        navigate('/QuerySuccessfull'); 
    };

    return (
        <motion.div 
  initial={{ x: '-100vw' }} 
  animate={{ x: 0 }} 
  transition={{ type: 'spring', stiffness: 40 }}
>
  <div className="relative font-['JURA'] px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-semibold text-center mb-2 sm:mb-4">Contact Us</h2>
    <p className="text-center text-sm text-gray-600 mb-4 sm:mb-6">Any question or remarks? Just write us a message!</p>
    
    <div className="flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-5xl h-auto md:h-[75vh]">
        
        {/* Contact Information */}
        <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white p-6 md:w-1/2 rounded-t-2xl md:rounded-l-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Contact Information</h2>
            <p className="text-base sm:text-lg mb-8">Say something to start a live chat!</p>
            <p className="flex items-center mb-4"><FaPhone className="mr-2" size={16} /> +91 7458086248</p>
            <p className="flex items-center mb-4"><FaEnvelope className="mr-2" size={16} /> mail@aecbyte.com</p>
            <p className="flex items-start"><FaLocationPin className="mt-1 mr-2" size={16} /> D-9, Ground floor, Sector-3, Gautam Buddha Nagar, Noida, Uttar Pradesh, INDIA, 201301.</p>
          </div>
          <div className="flex space-x-4 mt-6">
            <FaFacebookF className="text-white hover:text-[#1877f2] cursor-pointer" size={20} />
            <FaYoutube className="text-white hover:text-[#FF0000] cursor-pointer" size={20} />
            <FaXTwitter className="text-white hover:text-gray-400 cursor-pointer" size={20} />
            <FaInstagram className="text-white hover:text-[#d62976] cursor-pointer" size={20} />
            <FaLinkedin className="text-white hover:text-[#0a66c2] cursor-pointer" size={20} />
          </div>
        </div>

        {/* Form Section */}
        <div className="p-6 md:w-1/2 w-full">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="border-b border-gray-400 outline-none py-2 w-full" />
              <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="border-b border-gray-400 outline-none py-2 w-full" />
            </div>
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="border-b border-gray-400 outline-none py-2 w-full" />
            <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="border-b border-gray-400 outline-none py-2 w-full" />
            
            {/* Subject Selection */}
            <div className="my-2">
              <p className="text-sm font-semibold">Select Subject?</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["General Inquiry", "Support"].map((subject) => (
                  <label key={subject} className="flex items-center space-x-2">
                    <input type="radio" name="subject" value={subject} checked={formData.subject === subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="accent-red-500" />
                    <span className="text-sm">{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            <textarea placeholder="Write your message." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="border-b border-gray-400 outline-none resize-none py-2 w-full" />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="bg-black text-white py-2 px-4 rounded-md w-full hover:bg-gray-800">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  </div>
</motion.div>

    );
};

export default Contact;
