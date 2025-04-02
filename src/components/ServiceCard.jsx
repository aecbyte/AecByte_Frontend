"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ServiceCard = ({ title, details, serviceId }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);
  const navigate = useNavigate();

  return (
    <article
      className="relative h-[250px] w-[400px] max-md:mb-5 max-sm:w-full max-sm:max-w-[400px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setIsFlipped(!isFlipped);
        }
      }}
    >
      <div
        className={`absolute bg-white border-solid border-l-[3px] border-l-red-500 transition-transform duration-[0.6s] size-full ${
          isFlipped ? "rotate-y-180 opacity-0" : "rotate-y-0 opacity-100"
        }`}
      >
        <div className="absolute top-2/4 w-full text-2xl font-medium text-center text-black uppercase -translate-y-2/4 max-sm:text-xl">
          {title}
        </div>
      </div>

      <div
        className={`absolute border-solid border-l-[3px] border-l-red-500 transition-transform duration-[0.6s] size-full bg-gradient-to-r from-[#DC3545] to-[#FD7E14] ${
          isFlipped ? "rotate-y-0 opacity-100" : "rotate-y-180 opacity-0"
        }`}
      >{serviceId ? 
        <div className="absolute top-2/4 text-sm md:text-xl ml-7 mr-8 text-white justify-self-center -translate-y-2/4">
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <span>{detail}</span>
              {index < details.length - 1 && <br />}
              <button onClick={() => {
                navigate(`/Service/${serviceId}`);
              }} className="block cursor-pointer mt-6 underline hover:underline justify-self-center text-md">Read More</button>
            </React.Fragment>
          ))}
        </div> : <div className="absolute top-2/4 text-md md:text-xl font-medium leading-9 ml-7 text-white uppercase -translate-y-2/4 max-sm:leading-8">
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <span className="cursor-pointer hover:underline" onClick={() => navigate('/Services')}>&gt; {detail}</span>
              {index < details.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div> }
      </div>
    </article>
  );
};