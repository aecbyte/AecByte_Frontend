"use client";
import React from "react";

const BulletList = ({ items }) => {
  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div key={index} className="flex gap-2.5 mt-3.5 first:mt-6">
          <div className="flex shrink-0 my-auto w-2.5 h-2.5 rounded-full bg-slate-900" />
          <p className="flex-auto max-md:max-w-full">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default BulletList;
