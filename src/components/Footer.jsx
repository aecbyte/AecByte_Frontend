import React from "react";
import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-black font-['JURA'] text-white">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-40 pt-12 text-center md:text-left">
          <div>
            <a href="/">
              <h2 className="text-2xl md:text-2xl font-light">Aecbyte</h2>
            </a>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-light mb-2">Featured</h1>
            <ul className="text-sm space-y-1">
              <li><a href="/Services" className="text-white hover:text-[#1877f2] cursor-pointer">ERP Softwares</a></li>
              <li><a href="/Services" className="text-white hover:text-[#1877f2] cursor-pointer">Application Development</a></li>
              <li><a href="/Services" className="text-white hover:text-[#1877f2] cursor-pointer">Marketing</a></li>
              <li><a href="/Contact" className="text-white hover:text-[#1877f2] cursor-pointer">Free Consultation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-light mb-2">About Aecbyte</h3>
            <ul className="text-sm space-y-1">
              <li><a href="/Careers" className="text-white hover:text-[#1877f2] cursor-pointer">Careers</a></li>
              <li><a href="/Blogs" className="text-white hover:text-[#1877f2] cursor-pointer">Latest blogs</a></li>
              <li><a href="/Privacy-policy" className="text-white hover:text-[#1877f2] cursor-pointer">Privacy policy</a></li>
              <li><a href="/About" className="text-white hover:text-[#1877f2] cursor-pointer">About Aecbyte</a></li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#DC3545] to-[#FD7E14] mt-10 py-1 px-4 md:px-40 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">&copy; 2025 AECBYTE</p>
            <div className="flex md:flex-row space-x-6 md:space-x-4 mt-3 md:mt-0">
              <a href="https://www.facebook.com/aecbyte">
                <FaFacebookF className="text-white hover:text-[#1877f2] cursor-pointer" size={20} /></a>
              <a href="https://www.youtube.com/@aecbyte">
                <FaYoutube className="text-white hover:text-[#FF0000] cursor-pointer" size={20} /></a>
              <a href="https://www.x.com/aecbyte">
                <FaXTwitter className="text-white hover:text-gray-400 cursor-pointer" size={20} /></a>
              <a href="https://www.instagram.com/aecbyte">
                <FaInstagram className="text-white hover:text-[#d62976] cursor-pointer" size={20} /></a>
              <a href="https://www.linkedin.com/company/aecbyte">
                <FaLinkedin className="text-white hover:text-[#0a66c2] cursor-pointer" size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
