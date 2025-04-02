import React from "react";
import WhiteIcons from '../assets/whiteDots.svg';
import { useNavigate } from "react-router";

const ContactBar = () => {
  const navigate = useNavigate();
  return (
<section className="overflow-hidden relative w-full min-h-[266px] bg-gradient-to-r from-[#DC3545] to-[#FD7E14] font-['JURA'] flex flex-col items-center justify-center px-4 sm:px-8">
  
  {/* Top Decorative Icon */}
  <img src={WhiteIcons} alt="mySvgImage" className="rotate-y-180 absolute left-2 top-2 w-36 md:w-56"/>

  {/* Content Section */}
  <section className="flex flex-col items-center justify-center px-5 py-4 w-full text-center max-w-[1000px]">
    
    <h1 className="mb-6 text-md sm:text-xl md:text-xl lg:text-3xl text-white text-center sm:px-10 px-4">
      Let us discuss how our team can contribute to your success.
    </h1>

    <button
      onClick={() => {
        navigate('/Contact');
      }}
      className="px-8 py-2 sm:px-10 sm:py-2.5 md:px-12 md:py-3 text-lg sm:text-xl md:text-2xl text-black bg-white rounded-xl cursor-pointer"
      aria-label="Contact us"
    >
      Contact us
    </button>
  </section>

  {/* Bottom Decorative Icon */}
  <img src={WhiteIcons} alt="mySvgImage" className="rotate-x-180 absolute right-2 bottom-3 w-36 md:w-56"/>
  
</section>


   
  );
};

export default ContactBar;
