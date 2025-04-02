import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ContactBar from '../components/ContactBar';
import { ServiceCard } from '../components/ServiceCard';
import YourSvg from '../assets/Line_svg.svg';
import FaqContainer from '../components/FaqContainer';
import { useNavigate } from "react-router";
// import sample from "../assets/Services.mp4";

const Services = () => {
  // const firstRow = serviceData.slice(0, 2);
  // const secondRow = serviceData.slice(2, 3);
  // const thirdRow = serviceData.slice(3, 5);
  // const fourthRow = serviceData.slice(5, 6);
  // const fifthRow = serviceData.slice(6, 8);
  // const sixthRow = serviceData.slice(8, 9);
  const navigate = useNavigate();
  const [val, setVal] = useState(0);
  const [color_101, setColor_101] = useState(true);
  const [color_102, setColor_102] = useState(false);
  const [color_103, setColor_103] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://aecbyte.onrender.com/getServicesData").then((response) => response.json())
    .then((data) => setData(data));
    window.scroll(0, 0);
  }, [])
  


  return (
    <>
      <HeroSection title="PRECISION-TAILORED SERVICES FOR EVERY BUISNESS NEED" description="Choose a service delivery model that fits your business strategy best. Promptly plug-in any service you find necessary in the scope needed.Rely on our proven and tested methodology & delivery processes." sample={'https://aecbyte.github.io/video-hosting/Services.mp4'} />
      <div className='hidden xl:block mt-10 mb-10 rounded-3xl mx-auto bg-white w-[80rem] drop-shadow-lg font-["JURA"]'>
        <div className='flex flex-wrap pt-8 justify-evenly'>
          <div className={color_101 ? "text-[#FD7E14] flex cursor-pointer" : "text-gray-400 flex cursor-pointer"} onClick={() => {
            setVal(0);
            setColor_101(true);
            setColor_102(false);
            setColor_103(false);
          }}><img src={YourSvg} className='w-6 mr-2' /> Design & Development</div>
          <div className={color_102 ? "text-[#FD7E14] flex cursor-pointer" : "text-gray-400 flex cursor-pointer"} onClick={() => {
            setVal(1);
            setColor_102(true);
            setColor_101(false);
            setColor_103(false);
          }}><img src={YourSvg} className='w-6 mr-2' />Enterprise Resource Planning</div>
          <div className={color_103 ? "text-[#FD7E14] flex cursor-pointer" : "text-gray-400 flex cursor-pointer"} onClick={() => {
            setVal(2);
            setColor_103(true);
            setColor_101(false);
            setColor_102(false);
          }}><img src={YourSvg} className='w-6 mr-2' />Digital Marketing</div>
        </div>


        {
          {
            '0': <div className='flex p-10'>
              <div className='w-[24rem]'>
                At AecByte, we craft seamless digital experiences with our comprehensive design and development services. From intuitive UI/UX design to robust web and mobile app development, we create user-centric, scalable, and high-performance solutions tailored to your business needs. Our expertise spans modern frameworks, responsive design, and cutting-edge technologies, ensuring your digital presence is both visually compelling and functionally powerful. Whether you're building from scratch or optimizing an existing platform, AecByte delivers innovative, efficient, and future-ready solutions to drive your business forward.</div>
              <div>
                <div className='flex ml-[4rem]' >
                  {data?.serviceData ? data.serviceData.map((service, index) => ( index < 2 ? 
                    <>
                      <ServiceCard
                        key={index}
                        title={service.title}
                        details={service.details}
                        serviceId={service.id}
                      />
                    </> : null
                  )) : ""}
                </div>
                <div className='flex mt-[2rem] ml-[4rem]'>
                  {data?.serviceData ?  data.serviceData.map((service, index) => ( index == 2 ?
                    <ServiceCard
                      key={index}
                      title={service.title}
                      details={service.details}
                      serviceId={service.id}
                    />: null
                  )): ""}
                </div>
              </div>
            </div>,
            '1': <div className='flex p-10'>
              <div className='w-[24rem]'>
                AecByte's Enterprise Resource Planning (ERP) solutions empower businesses with seamless integration, automation, and real-time data management. Our ERP systems streamline operations across departments—finance, HR, inventory, sales, and more—enhancing efficiency, reducing costs, and improving decision-making. Designed for scalability and flexibility, our ERP solutions adapt to your business needs, ensuring smooth workflows, better resource utilization, and increased productivity. Whether you're a growing startup or an established enterprise, AecByte provides tailored ERP solutions to drive digital transformation and operational excellence.</div>
              <div>
                <div className='flex ml-[4rem]'>
                  {data?.serviceData ?  data.serviceData.map((service, index) => ( index > 2 && index < 5 ?
                    <ServiceCard
                      key={index}
                      title={service.title}
                      details={service.details}
                      serviceId={service.id}
                    /> : null
                  )): ""}
                </div>
                <div className='flex mt-[2rem] ml-[4rem]'>
                  {data?.serviceData ? data.serviceData.map((service, index) => ( index == 5 ?
                    <ServiceCard
                      key={index}
                      title={service.title}
                      details={service.details}
                      serviceId={service.id}
                    /> : null
                  )): ""}
                </div>
              </div>
            </div>,
            '2': <div className='flex p-10'>
              <div className='w-[24rem]'>
                AecByte helps businesses grow with data-driven digital marketing solutions designed to maximize reach, engagement, and conversions. Our services include Google AdSense for optimized ad revenue, Social Media Marketing (SMM) to build brand presence across platforms, and Email Marketing for targeted customer outreach. We craft tailored strategies, leveraging SEO, paid ads, and content marketing to drive traffic and boost ROI. Whether you're looking to increase brand awareness, generate leads, or enhance customer retention, AecByte delivers result-oriented digital marketing solutions to keep you ahead of the competition.</div>
              <div>
                <div className='flex ml-[4rem]'>
                  {data?.serviceData ? data.serviceData.map((service, index) => ( index > 5 && index < 8 ?
                    <ServiceCard
                      key={index}
                      title={service.title}
                      details={service.details}
                      serviceId={service.id}
                    />: null
                  )): ""}
                </div>
                <div className='flex mt-[2rem] ml-[4rem]'>
                  {data?.serviceData ? data.serviceData.map((service, index) => ( index == 8 ?
                    <ServiceCard
                      key={index}
                      title={service.title}
                      details={service.details}
                      serviceId={service.id}
                    />: null
                  )): ""}
                </div>
              </div>
            </div>,
          }[val]
        }
      </div>

      <div className='xl:hidden mt-10 mb-10 rounded-3xl mx-auto bg-white drop-shadow-lg font-["JURA"]'>
          <div className='md:flex p-10'>
          <div className=''>
              <div className='lg:w-[24rem] mb-30 ml-2'>At AecByte, we craft seamless digital experiences with our comprehensive design and development services. From intuitive UI/UX design to robust web and mobile app development, we create user-centric, scalable, and high-performance solutions tailored to your business needs. Our expertise spans modern frameworks, responsive design, and cutting-edge technologies, ensuring your digital presence is both visually compelling and functionally powerful. Whether you're building from scratch or optimizing an existing platform, AecByte delivers innovative, efficient, and future-ready solutions to drive your business forward.</div>
              <div className='lg:w-[24rem] mb-30 ml-2'>AecByte's Enterprise Resource Planning (ERP) solutions empower businesses with seamless integration, automation, and real-time data management. Our ERP systems streamline operations across departments—finance, HR, inventory, sales, and more—enhancing efficiency, reducing costs, and improving decision-making. Designed for scalability and flexibility, our ERP solutions adapt to your business needs, ensuring smooth workflows, better resource utilization, and increased productivity. Whether you're a growing startup or an established enterprise, AecByte provides tailored ERP solutions to drive digital transformation and operational excellence.</div>
              <div className='lg:w-[24rem] mb-30 ml-2'>AecByte helps businesses grow with data-driven digital marketing solutions designed to maximize reach, engagement, and conversions. Our services include Google AdSense for optimized ad revenue, Social Media Marketing (SMM) to build brand presence across platforms, and Email Marketing for targeted customer outreach. We craft tailored strategies, leveraging SEO, paid ads, and content marketing to drive traffic and boost ROI. Whether you're looking to increase brand awareness, generate leads, or enhance customer retention, AecByte delivers result-oriented digital marketing solutions to keep you ahead of the competition.</div>
              </div>
              <div>
                
                <div className='md:ml-[4rem]' >
                  {data?.serviceData ? data.serviceData.map((service, index) => (
                    <>
                      <ServiceCard
                        key={index}
                        title={service.title}
                        details={service.details}
                        serviceId={service.id}
                      />
                    </>
                  )) : ""}
                </div>
              </div>
            </div>

      </div>
      <ContactBar />
      {/* <FaqContainer /> */}
      <div className="h-40 mt-10 sm:mt-16 md:mt-20 flex flex-col items-center justify-center text-center">
  <div className="absolute left-0 right-0 text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-['karantina'] strokeme -z-10 tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.7em] indent-[0.3em] sm:indent-[0.5em] md:indent-[0.7em]">
    FAQs
  </div>
  <div className="font-['JURA'] text-md sm:text-xl md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#DC3545] to-[#FD7E14] inline-block text-transparent bg-clip-text tracking-[.05em] sm:tracking-[.1em]">
    FAQs
  </div>
</div>
      {data?.faq ?  <FaqContainer faqData={data.faq.slice(5, 11)} /> : ""}
    </>
  )
}

export default Services;