import React from "react";

const ServiceDescription = ({ title_1, title_2, content_1, content_2 }) => {
  return (
    <section className="self-stretch text-lg md:text-2xl leading-5 md:leading-10 text-black w-[709px] max-md:max-w-full">
      <h2 className="uppercase mb-3">{title_1}</h2>
      <p className="text-[14px] md:text-[20px] text-[#8D8D8D]">
        {content_1}
      </p>

      <h2 className="mt-8 text-lg md:text-2xl uppercase mb-3">{title_2}</h2>
      <p className="text-[14px] md:text-[20px] text-neutral-600">
        {content_2}
      </p>
    </section>
  );
};

export default ServiceDescription;
