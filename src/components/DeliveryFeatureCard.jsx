import React from 'react';
import DeliveryIcon from "../assets/Icons/DeliveryIcon";

const DeliveryFeatureCard = ({ title, description }) => {
  return (
    <article className="flex flex-col gap-2 items-center w-[531px] max-md:w-full max-md:max-w-[531px]">
    <DeliveryIcon />
    {/* <hr className="h-px bg-black w-[133px] max-sm:w-[100px]" /> */}
    <h2 className="text-xl font-bold leading-10 text-center text-black max-sm:text-xl">
      {title}
    </h2>
    <hr className="h-px bg-black w-[70px] max-sm:w-[100px]" />
    <p className="text-xl leading-8 text-center text-neutral-600 max-sm:text-lg">
      <span>
       {description}
      </span>
    </p>
  </article>
  )
}

export default DeliveryFeatureCard