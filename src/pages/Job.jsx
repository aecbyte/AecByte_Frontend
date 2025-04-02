"use client";
import React, { useState, useEffect } from "react";
import JobHeader from "../components/JobHeader";
import JobDetails from "../components/JobDetails";
import JobSummary from "../components/JobSummary";
import BulletList from "../components/BulletList";
import ApplyButton from "../components/ApplyButton";
import { useParams } from 'react-router-dom';

const Job = () => {
  const { id } = useParams();
  const [ job, setJob ] = useState();

  useEffect(() => {
      fetch(`https://aecbyte.onrender.com/getJob`).then((response) => response.json())
      .then((jobs) => {
        const data = jobs.filter((job) => job.id == id);
        setJob(data);
      })
     }, [id])

  const applicationProcess = [
    "Submit Your Application",
    "Initial Screening – Our HR team will review your application and shortlist candidates.",
    "Knowledge Assessment ",
    "Interview Round – Attend an interview with our reqruitment team to discuss your skills and experience.",
    "Final Discussion – A final round with the hiring manager",
    "Offer & Onboarding – If selected, you’ll receive an offer letter and onboarding details.",
  ];

  return (
    <main className="flex overflow-hidden flex-col pb-28 bg-white max-md:pb-24 font-['JURA']">
      {job ? <JobHeader id={job[0].id} title={job[0].title} vacancies={job[0].vacancy} type={job[0].type} /> : ""}

      <div className="flex flex-col items-center self-center mt-14 w-full max-w-[1139px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60143514ddf278b5d68c6d2b29ae1707c6d3a8073c0815ab84f1d660c206e0df?placeholderIfAbsent=true&apiKey=1b3e2fa2c7d44b1aa79cd4be767b989d"
          alt="Job related"
          className="object-contain max-w-full aspect-[1.8] w-[900px]"
        />

        <div className="self-end mt-24 w-full max-w-[1106px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
          {job ?  <JobDetails title={job[0].title} lookingFor={job[0].description.lookingFor} responsibilities={job[0].description.responsibilities} eduReq={job[0].description.educationalRequirement} salary={job[0].salary} workingHours={job[0].workingHours} perks={job[0].description.perks}/> : ""}
          {job ? <JobSummary id={job[0].id} vacancies={job[0].vacancy} type={job[0].type} location={job[0].location} datePosted={job[0].datePosted} workingHours={job[0].workingHours} experience={job[0].experience}/> : ""}
          </div>
        </div>

        <hr className="shrink-0 mt-20 max-w-full h-px border border-black border-solid w-full max-md:mt-10" />

        <section className="mt-16 w-full max-md:mt-10 max-md:ml-2.5">
          <h2 className="text-2xl font-medium text-slate-900">
            The Application Process
          </h2>
          <BulletList items={applicationProcess} />
        </section>

        <section className="mt-24 max-md:mt-10 max-md:ml-2.5">
          <h2 className="text-2xl font-medium text-slate-900">Our Statement</h2>
          <p className="mt-5 text-base leading-6 text-slate-900 max-md:max-w-full">
          At AecByte, we believe in fostering innovation, creativity, and growth. We are committed to building a diverse and inclusive workplace where talent is nurtured, and opportunities are endless. If you are passionate about making an impact and growing your career, we would love to have you on our team!
          </p>
        </section>

        <div className="self-center mt-28 max-md:mt-10">
          {job ?  <ApplyButton id={job[0].id} className="w-[135px]" /> : ""}
        </div>
      </div>
    </main>
  );
};

export default Job;
