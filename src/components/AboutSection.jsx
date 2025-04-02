"use client";
import React from "react";
import InfoColumn from "./InfoColumn";

const AboutSection = () => {
  return (
    <section className="space-y-20 sm:space-y-40 font-['JURA'] mx-auto px-4 sm:px-8 lg:px-20 mb-10 sm:mb-20">
  <div className="flex flex-col md:flex-row gap-10 md:gap-5">
    
    {/* Who We Are Section */}
    <InfoColumn
      heading="Who We Are"
      text="We are a passionate team of technology experts dedicated to delivering innovative digital solutions that drive business growth. With years of experience in software development, cloud computing, and AI-driven technologies, we partner with clients to transform their ideas into powerful, scalable solutions."
      imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bc4299ae6f03e8bc2a04a5d0659e4c0a9568144e9bcfaf42efb2a8c7bd64efc5?placeholderIfAbsent=true&apiKey=1b3e2fa2c7d44b1aa79cd4be767b989d"
      className="w-full md:w-6/12"
    />

    {/* Why Us Section */}
    <InfoColumn
      heading="Why Us"
      text="In a world of cookie-cutter tech solutions, AecByte stands apart by combining deep technical expertise with a partnership approach that puts your business goals first. We're not just service providers - we become an extension of your team, bringing specialized knowledge in AI-driven development, cloud architecture, and digital transformation to solve your most complex challenges."
      imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ce768988a47bcf687c0c21ded62f207bda91cefd3c62df92171d503d43a692ed?placeholderIfAbsent=true&apiKey=1b3e2fa2c7d44b1aa79cd4be767b989d"
      className="w-full md:w-6/12"
      imageFirst={false}
    />

  </div>
</section>

  );
};

export default AboutSection;
