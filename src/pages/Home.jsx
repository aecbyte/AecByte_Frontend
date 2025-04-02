import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import AchievementBanner from '../components/AchievementBanner';
import HeroSection from '../components/HeroSection';
import ServicesShowcase from '../components/ServicesShowcase';
import InfiniteCarousel from '../components/InfiniteCarousel';
import Icons from '../assets/dots.svg';
import FaqContainer from '../components/FaqContainer';
import CardComponent from '../components/CardComponent';


const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [data, setData] = useState();


  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/@satyanshsinghv/feed")
      .then((response) => response.json())
      .then((data) => setBlogs(data.items.slice(0, 4))); // Get latest 5 posts
    
    fetch("https://aecbyte.onrender.com/getHomeData").then((response) => response.json())
    .then((data) => setData(data));
  }, []);

  return (
    <>
       <HeroSection title="CRAFTING YOUR DIGITAL SUCCESS" description="We leverage advanced technology and innovative solutions to drive digital growth, streamline operatons, and enhance productivity. From ERP systems to web and app development, cloud services, and digital marketing, we have the expertise to help you succeed in today's fast-paced digital landscape." sample={'https://aecbyte.github.io/video-hosting/HomeVideo (1).mp4'} />
        <AchievementBanner />
        <img src={Icons} alt='mySvgImage' className='self-end w-36 md:w-56 pr-2 pt-2 fill-white'/>
        <div className="h-40 mt-10 sm:mt-16 md:mt-20 flex flex-col items-center justify-center text-center">
  <div className="absolute left-0 right-0 text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-['karantina'] strokeme -z-10 tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.7em] indent-[0.3em] sm:indent-[0.5em] md:indent-[0.7em]">
    SERVICES
  </div>
  <div className="font-['JURA'] text-md sm:text-xl md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#DC3545] to-[#FD7E14] inline-block text-transparent bg-clip-text tracking-[.05em] sm:tracking-[.1em]">
    SERVICES WE DELIVER
  </div>
</div>
       {data?.services ? <ServicesShowcase services={data.services} /> : "" }
        <InfiniteCarousel />
        <div className="h-40 flex flex-col items-center justify-center text-center">
  <div className="absolute left-0 right-0 text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-['karantina'] strokeme -z-10 tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.7em] indent-[0.3em] sm:indent-[0.5em] md:indent-[0.7em]">
    BLOGS
  </div>
  <div className="font-['JURA'] text-md sm:text-xl md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#DC3545] to-[#FD7E14] inline-block text-transparent bg-clip-text tracking-[.05em] sm:tracking-[.1em]">
    BLOGS
  </div>
</div>

        <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-around px-5 py-0 mx-auto my-0 max-w-[1440px] max-md:flex-wrap max-md:gap-8 max-sm:flex-col max-sm:gap-5">
        {blogs.map((blog, index) => (
          <CardComponent
            key={index}
            image={blog.description}
            // altText={card.altText}
            title={blog.title}
            date={blog.pubDate}
            link={blog.link}
            // description={card.description}
          />
        ))}
      </section>
      <div className="h-40 mt-10 sm:mt-16 md:mt-20 flex flex-col items-center justify-center text-center">
  <div className="absolute left-0 right-0 text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-['karantina'] strokeme -z-10 tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.7em] indent-[0.3em] sm:indent-[0.5em] md:indent-[0.7em]">
    FAQs
  </div>
  <div className="font-['JURA'] text-md sm:text-xl md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#DC3545] to-[#FD7E14] inline-block text-transparent bg-clip-text tracking-[.05em] sm:tracking-[.1em]">
    FAQs
  </div>
</div>
        {/* <VideoCarousel /> */}
        {data?.faq ?  <FaqContainer faqData={data.faq.slice(0, 5)} /> : ""}

    </>
  )
}

export default Home;