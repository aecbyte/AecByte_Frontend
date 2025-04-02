import React, { useState, useEffect } from 'react';
import fetchedImgSrc from '../assets/bg_img_01.jpg';
import JobCard from "../components/JobCard";
import { motion } from 'framer-motion';

const Careers = () => {
    const [val, setVal] = useState(0);
    const [data_Application_development, setData_Application_development] = useState();
    const [Cloud_DevOps, set_Cloud_DevOps] = useState();
    const [HR_Management, set_HR_Management] = useState();
    const [Sales_Marketing, set_Sales_Maraketing] = useState();

    useEffect(() => {
        fetch("https://aecbyte.onrender.com/getJobListings").then((response) => response.json())
        .then((jobListings) => {
            let data = jobListings.filter((jobListing) => jobListing.category == "Application Development");
            setData_Application_development(data);
            data = jobListings.filter((jobListing) => jobListing.category == "Cloud & DevOps");
            set_Cloud_DevOps(data);
            data = jobListings.filter((jobListing) => jobListing.category == "HR & Management");
            set_HR_Management(data);
            data = jobListings.filter((jobListing) => jobListing.category == "Sales & Marketing");
            set_Sales_Maraketing(data);
        });
    }, [])

    return (
        <motion.div initial={{ x: '-300vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 40 }}>

<div 
  style={{ backgroundImage: `url(${fetchedImgSrc})` }} 
  className="w-full h-[25rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] 
             relative overflow-hidden flex flex-col justify-center 
             bg-cover bg-no-repeat bg-center text-white font-['JURA'] p-3 sm:p-6 
             before:content-[''] before:absolute before:inset-0 
             before:block before:bg-gradient-to-r 
             before:from-[#DC3545] before:to-[#FD7E14] before:opacity-55"
>
  <div className="flex flex-col text-center w-full max-w-3xl z-[5] mx-auto">
    <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-8">JOIN US</div>
    <div className="text-sm sm:text-base md:text-lg leading-relaxed">
      We're building innovative solutions and seeking passionate minds to grow with us. Explore opportunities, collaborate, and shape the future of technology together!
    </div>

    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
      <button className="bg-red-800 border border-red-800 px-4 sm:px-6 py-2 sm:py-3 font-semibold rounded-xl">
        Join the team
      </button>
      <div className="border-2 border-white rounded-xl px-6 sm:px-9 py-2 sm:py-3">
        Culture
      </div>
    </div>
  </div>
</div>

            <div className="flex flex-col text-center mt-14 justify-center font-['JURA']">
                <div className="mb-3 text-xl">COME JOIN US</div>
                <div className='text-3xl font-semibold mb-3'>Career Openings</div>
                <div className=''>We are always looking for creative, talented self-starters to join the AecByte family. Check out our open roles below and fill out the application.</div>
            </div>

            <div className='flex flex-col sm:flex-row m-4 sm:m-6 font-["JURA"]'>
                <div className=' mr-10'>
                    <div className='py-4 text-xl border-b border-gray-300 cursor-pointer' onClick={() => {
                        setVal(0)
                    }}>Application Development</div>
                    <div className='py-4 text-xl border-b border-gray-300 cursor-pointer' onClick={() => {
                        setVal(1)
                    }}>Cloud & DevOps</div>
                    <div className='py-4 text-xl border-b border-gray-300 cursor-pointer' onClick={() => {
                        setVal(2)
                    }}>HR & Management</div>
                    <div className='py-4 text-xl border-b border-gray-300 cursor-pointer' onClick={() => {
                        setVal(3)
                    }}>Sales & Marketing</div>
                </div>
                <section className="flex flex-col gap-4 p-4 my-0 w-full max-md:p-2">
                    {
                        {
                            '0': data_Application_development?.length ? data_Application_development.map((job, index) => (
                                    <JobCard
                                        key={index}
                                        id={job.id}
                                        title={job.title}
                                        experience={job.experience}
                                        deadline={job.deadline}
                                    />
                                )) : <div className='text-xl text-gray-400'>There are no job openings in this department at the moment, but you can still <a href='/' className='text-black underline'>send us your resume</a>, and we'll consider it when we start recruiting.</div>,

                            '1':Cloud_DevOps?.length ? Cloud_DevOps.map((job, index) => (
                                <JobCard
                                    key={index}
                                    id={job.id}
                                    title={job.title}
                                    experience={job.experience}
                                    deadline={job.deadline}
                                />
                            )) : <div className='text-xl text-gray-400'>There are no job openings in this department at the moment, but you can still <a href='/' className='text-black underline'>send us your resume</a>, and we'll consider it when we start recruiting.</div>,
                            '2': HR_Management?.length ? HR_Management.map((job, index) => (
                                <JobCard
                                    key={index}
                                    id={job.id}
                                    title={job.title}
                                    experience={job.experience}
                                    deadline={job.deadline}
                                />
                            )) : <div className='text-xl text-gray-400'>There are no job openings in this department at the moment, but you can still <a href='/' className='text-black underline'>send us your resume</a>, and we'll consider it when we start recruiting.</div>,
                            '3':  Sales_Marketing?.length ? Sales_Marketing.map((job, index) => (
                                <JobCard
                                    key={index}
                                    id={job.id}
                                    title={job.title}
                                    experience={job.experience}
                                    deadline={job.deadline}
                                />
                            )) : <div className='text-xl text-gray-400'>There are no job openings in this department at the moment, but you can still <a href='/' className='text-black underline'>send us your resume</a>, and we'll consider it when we start recruiting.</div>,
                        }[val]}
                </section>
            </div>
        </motion.div>
    )
}

export default Careers;
