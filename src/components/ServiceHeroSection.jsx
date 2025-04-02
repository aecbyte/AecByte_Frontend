import React, { useEffect, useState } from 'react';

const ServiceHeroSection = ({ videoUrl }) => {
  
  return (
    <div>
        <video id='video' className='-z-10 w-full h-[660px] absolute object-fill ' autoPlay loop muted>
            <source src={videoUrl} type='video/mp4' />
        </video>
    </div>
  )
}

export default ServiceHeroSection;
