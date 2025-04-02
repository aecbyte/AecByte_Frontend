"use client";
import React from "react";
import ApplyButton from "./ApplyButton";

const JobHeader = ({ id, type, title, vacancies }) => {
  return (
    <header className="flex flex-col justify-center items-center px-20 py-32 w-full text-center font-['JURA'] text-white bg-slate-900 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-center mb-0 max-w-full w-[808px] max-md:mb-2.5">
        <h1 className="self-stretch text-4xl font-medium uppercase">
          {title}
        </h1>
        <p className="mt-5 text-base">Job Type: {type}<br /> Number of Vacancies: {vacancies}</p>
        <ApplyButton id={id} className="mt-9 w-[135px] max-md:mt-10" />
      </div>
    </header>
  );
};

export default JobHeader;
