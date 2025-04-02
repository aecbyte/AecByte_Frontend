import React from "react";

const SectionHeader = ({ title, bg_text }) => {
  return (
    <div className="h-40 flex flex-col items-center justify-center text-center">
  <div className="absolute left-0 right-0 text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-['karantina'] strokeme -z-10 tracking-[0.3em] sm:tracking-[0.3em] md:tracking-[0.3em] indent-[0.3em] sm:indent-[0.3em] md:indent-[0.3em]">
    {bg_text}
  </div>
  <div className="font-['JURA'] text-md sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#DC3545] to-[#FD7E14] inline-block text-transparent bg-clip-text tracking-[.05em] sm:tracking-[.1em]">
    {title}
  </div>
</div>
  );
};

export default SectionHeader;
