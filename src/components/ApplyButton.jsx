"use client";
import React from "react";

const ApplyButton = ({ className = "", id }) => {
  return (
    <a href={`/JobApplicationForm/${id}`}>
    <button
      className={`px-8 cursor-pointer py-3.5 text-sm leading-6 text-center text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors ${className}`}
    >
      Apply Now
    </button>
    </a>
  );
};

export default ApplyButton;
