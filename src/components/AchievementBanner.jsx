import React from 'react';
import fetchedImgSrc from '../assets/bg_img_01.jpg'
import WhiteIcons from '../assets/whiteDots.svg';

const AchievementBanner = () => {
  return (
    <>
    <div style={{backgroundImage: `url(${fetchedImgSrc})`}} className=" w-full
            md:max-h-[21rem]
            max-h-[28rem]
            relative
            overflow-hidden
            z-1
					
            bg-cover
            bg-no-repeat
            bg-center

            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-[#DC3545]
            before:to-[#FD7E14]
            before:opacity-75
            before:z-[-5]
            mt-18 text-white font-['jura'] p-3 justify-center items-center md:h-96 h-[30rem]">
        <img src={WhiteIcons} alt='mySvgImage' className='w-36 md:w-56 rotate-y-180 fill-white'/>
        <div className='flex flex-col md:flex-row gap-10 mx-12 lg:mx-28 justify-between text-2xl items-center'>
        <div className='items-center justify-center content-center '>
          <hr className='border-2 border-indigo-600 rounded-sm w-2/12 justify-self-center' />
            <div className='text-xl lg:text-2xl xl:text-3xl'>Projects Completed</div>
            <div className='text-center text-3xl lg:text-5xl'>45+</div>
        </div>
        <div>
        <hr className='border-2 border-indigo-600 rounded-sm w-2/12 justify-self-center' />
            <div className='text-xl lg:text-2xl xl:text-3xl' >Services Offered</div>
            <div className='text-center text-3xl lg:text-5xl'>18+</div>
        </div>
        <div>
        <hr className='border-2 border-indigo-600 rounded-sm w-2/12 justify-self-center' />
            <div className='text-xl lg:text-2xl xl:text-3xl'>Success Rate</div>
            <div className='text-center text-3xl lg:text-5xl'>97%</div>
        </div>
        </div>
        <img src={WhiteIcons} alt='mySvgImage' className='w-36 md:w-56 rotate-x-180 absolute right-2 bottom-2'/>
    </div>
    </>
  )
}

export default AchievementBanner;