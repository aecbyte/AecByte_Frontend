"use client";

import React from "react";

const CardComponent = ({ image, altText, title, date, description, link }) => {
  return (
    <article className="overflow-hidden font-['JURA'] bg-white rounded-[30px] shadow-[0_11px_40px_rgba(233,233,233,1)] w-[300px] max-md:w-[calc(50%_-_15px)] max-sm:w-full">
      <img
        src={image.match(/<img[^>]+src="([^">]+)"/)[1]}
        alt={altText}
        className="object-cover w-full h-[156px] rounded-[30px_30px_0_0]"
      />
      <div className="relative px-4 py-4 max-sm:px-4 max-sm:py-5">
        <h2 className="mb-3 font-extrabold text-lg text-black uppercase leading-none max-sm:text-xl max-sm:leading-9">
          {title}
        </h2>
        <time className="block mb-3 text-xs text-neutral-400">{date}</time>
        {/* <p className="mb-5 text-sm leading-snug descline break-words text-black">{description}</p> */}
        <a href={link}>
        <button
          className=" px-5 py-1 descline text-xs text-white capitalize cursor-pointer rounded-md bg-gradient-to-r from-[#DC3545] to-[#FD7E14] hover:bg-gray-800 transition-colors"
          aria-label="Read more about this article"

        >
          READ MORE
        </button></a>
      </div>
    </article>
  );
};

export default CardComponent;