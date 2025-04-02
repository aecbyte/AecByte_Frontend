import React, { useState, useEffect } from 'react';
import ContactBar from '../components/ContactBar';
import DeliveryFeatureCard from '../components/DeliveryFeatureCard';
import ServiceDescription from '../components/ServiceDescription';
import RelatedCasesCard from '../components/RelatedCasesCard';
import SectionHeader from '../components/SectionHeader';
import { useParams } from 'react-router-dom';
import ServiceHeroSection from '../components/ServiceHeroSection';

const Service = () => {
  const { serviceId } = useParams(); 
  const [service, setService] = useState({});

  useEffect(() => {
    fetch("https://aecbyte.onrender.com/getServicesData").then((response) => response.json())
    .then((data) => setService(data.serviceData.find(item => item.id == serviceId)));
    // const foundService = data.find(item => item.id === parseInt(serviceId, 10));
    // setService(foundService || {});
    window.scroll(0, 0);
   }, [serviceId])

  return (
    <>
      <div className='mb-80'>
      {(serviceId=='EMPLOYEE_MANAGEMENT' || serviceId=='HOSPITAL_ERP' || serviceId=='SCHOOL_ERP' ) && <ServiceHeroSection videoUrl='https://aecbyte.github.io/video-hosting/ERP.mp4' /> }
      {serviceId=='UIUX' && <ServiceHeroSection videoUrl='https://aecbyte.github.io/video-hosting/UIUX.mp4' /> }
      {(serviceId=='DEVOPS_CONSULTING' || serviceId=='Application_Development') && <ServiceHeroSection videoUrl='https://aecbyte.github.io/video-hosting/cloudServices.mp4' /> }
      {(serviceId=='SEO' || serviceId=='SOCIAL_MEDIA_MANAGEMENT' || serviceId=='ADSENSE') && <ServiceHeroSection videoUrl='https://aecbyte.github.io/video-hosting/marketing.mp4' /> }
      
        <div className='pt-60 '>
          <div className='rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 justify-self-center py-8 w-full'>
          <div className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-["JURA"] text-white font-extrabold text-center  items-center'>{service.title}</div>
          <div className='text-center text-white text-xs md:text-lg lg:text-2xl mx-auto mt-4'>{service.overview}</div>
          </div>
        </div>
      </div>
      <div className="flex gap-24 font-['JURA'] justify-center max-md:flex-col max-md:gap-12 max-md:items-center max-sm:gap-10">
      {Array.isArray(service.features) ? 
      service.features.map((data, idx) => (idx < 2 ? 
        <DeliveryFeatureCard key={idx} title={data.title} description={data.description} /> :""
      )): ""}
      </div>
      <div className="flex gap-24 mt-9 mb-20 justify-center font-['JURA'] max-md:flex-col max-md:gap-12 max-md:items-center max-sm:gap-10">
      {Array.isArray(service.features) ? 
      service.features.map((data, idx) => (idx > 1 ? 
        <DeliveryFeatureCard key={idx} title={data.title} description={data.description} /> :""
      )): ""}
      </div>
      <ContactBar />
      <article className="flex flex-col font-['JURA'] mx-10 lg:mx-28">
      {service.description ? <SectionHeader title={service.description.title_01} bg_text={service.description.bg_text_01}/> : "" }
      <div className="flex flex-wrap justify-center items-center w-full max-md:max-w-full">
      {service.description ?<ServiceDescription title_1={service.description.sub_title_011} title_2={service.description.sub_title_012} content_1={service.description.content_011} content_2={service.description.content_012} />: "" }
      {service.description?.case_title_01 ?<RelatedCasesCard title={service.description.case_title_01} content={service.description.case_content_01}/> : ""}
      </div>
    </article>

    <article className="flex flex-col font-['JURA'] mx-10 lg:mx-28">
    {service.description ? <SectionHeader title={service.description.title_02} bg_text={service.description.bg_text_02}/> : "" }
      <div className="flex flex-wrap justify-center items-center w-full max-md:max-w-full">
      {service.description ?<ServiceDescription title_1={service.description.sub_title_021} title_2={service.description.sub_title_022} content_1={service.description.content_021} content_2={service.description.content_022} />: "" }
      {service.description?.case_title_02 ?<RelatedCasesCard title={service.description.case_title_02} content={service.description.case_content_02}/> : ""}
      </div>
    </article>

      
    </>
  )
}

export default Service
