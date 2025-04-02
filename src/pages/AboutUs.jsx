import React, { useState, useEffect } from 'react';
import AboutUsHeroSection from '../components/AboutUsHeroSection'
import FaqContainer from '../components/FaqContainer'
import ContactBar from '../components/ContactBar'
import Features from '../components/Features'
import AboutSection from '../components/AboutSection'

const AboutUs = () => {
   const [data, setData] = useState();
  useEffect(() => {
      fetch("https://aecbyte.onrender.com/getServicesData").then((response) => response.json())
      .then((data) => setData(data));
    }, [])


  return (
    <div>
        <AboutUsHeroSection />
        <Features />
        <AboutSection />
        <ContactBar />
        <div className="h-40 mt-10 sm:mt-16 md:mt-20 flex flex-col items-center justify-center text-center">
  <div className="absolute left-0 right-0 text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-['karantina'] strokeme -z-10 tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.7em] indent-[0.3em] sm:indent-[0.5em] md:indent-[0.7em]">
    FAQs
  </div>
  <div className="font-['JURA'] text-md sm:text-xl md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#DC3545] to-[#FD7E14] inline-block text-transparent bg-clip-text tracking-[.05em] sm:tracking-[.1em]">
    FAQs
  </div>
</div>
        {data?.faq ?  <FaqContainer faqData={data.faq.slice(11, 17)} /> : ""}
    </div>
  )
}

export default AboutUs