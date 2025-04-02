import React from 'react';
import { motion } from 'framer-motion';



const HeroSection = ({ title, description, sample }) => {
  return (
    <div className="font-['jura'] overflow-auto">
      <video id='video' className='-z-10 w-full h-[680px] absolute object-fill' autoPlay loop muted preload='auto'>
        <source src={sample} type='video/mp4'  />
      </video>
      <div class="w-full h-[600px] bg-white clip-triangle ">
        <div className='absolute text-xs md:text-lg top-32 left-[2rem] sm:left-[3rem] lg:left-[7rem] xl:left-[11.5rem] w-2/4' >
        <motion.div 
          className='font-extrabold text-lg md:text-3xl lg:text-4xl mb-2 md:mb-5 bg-gradient-to-br from-[#DC3545] to-[#FD7E14] bg-clip-text text-transparent' 
          initial={{ x: '-100vw' }} 
          animate={{ x: 0 }} 
          transition={{ delay: 0.5, type: 'spring', stiffness: 50 }}
        >
          {title}
        </motion.div>

        <motion.div 
          initial={{ x: '-100vw' }} 
          animate={{ x: 0 }} 
          transition={{ delay: 1, type: 'spring', stiffness: 40 }}
        >
          {description}
        </motion.div>

        </div>
      </div>

    </div>
  )
}

export default HeroSection;
