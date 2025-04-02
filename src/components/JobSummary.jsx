"use client";
import React from "react";
import ApplyButton from "./ApplyButton";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";

const SummaryItem = ({ label, value }) => (
    <div className="mt-6 ml-10 max-md:mt-10 max-md:ml-2.5">
        <span className="font-['Jura'] text-[#d4d4d4] block">{label}</span>
        {Array.isArray(value) ? (
            value.map((v, i) => (
                <span key={i} className="font-['Jura'] text-[#001833] block">
                    {v}
                </span>
            ))
        ) : (
            <span className="font-['Jura'] text-[#001833] block">{value}</span>
        )}
    </div>
);

const JobSummary = ({ id, location, type, datePosted, experience, workingHours, vacancies }) => {
    return (
        <aside className="ml-5 w-[41%] max-md:ml-0 max-md:w-full text-lg">
            <div className="flex flex-col text-lg max-md:mt-10">
                <section className="flex flex-col items-start py-12 leading-6 text-black bg-stone-100 border-neutral-300 max-md:px-5">
                  <ApplyButton id={id} className="self-center ml-9 w-[185px]" />
 
                    <h2 className="mt-10 ml-10 text-lg font-bold text-center max-md:mt-10 max-md:ml-2.5">
                        Job Summary
                    </h2>

                    <SummaryItem label="Location" value={location} />

                    <SummaryItem label="Job Type" value={type} />

                    <SummaryItem label="Date posted" value={datePosted} />

                    <SummaryItem label="Experience" value={`${experience} years`} />

                    <SummaryItem label="Working Hours" value={workingHours} />

                    <SummaryItem
                        label="Working Days"
                        value={["Weekly: 5 days", "Weekend: Flexible"]}
                    />

                    <SummaryItem label="Vacancy" value={vacancies} />

                    <a
                        href="/Careers"
                        className="mt-24 ml-10 font-medium leading-none underline text-slate-900 max-md:mt-10"
                    >
                        View all job
                    </a>
                </section>

                <div className="self-start mt-12 ml-10 leading-none text-slate-900 max-md:mt-10 max-md:ml-2.5">
                    Share this:
                    <div className="flex space-x-4 mt-3">
                    <a href="https://www.facebook.com/aecbyte">
                        <FaFacebookF className="text-[#1877f2] cursor-pointer" size={23} />
                    </a>
                    <a href="https://www.instagram.com/aecbyte">
                        <FaInstagram className=" text-[#d62976] cursor-pointer" size={25} />
                    </a>
                    <a href="https://www.linkedin.com/company/aecbyte">
                        <FaLinkedin className=" text-[#0a66c2] cursor-pointer" size={25} />
                    </a>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default JobSummary;
