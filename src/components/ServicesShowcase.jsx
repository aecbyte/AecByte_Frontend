import React, { useEffect } from "react";
import { ServiceCard } from './ServiceCard'
// import { servicesData } from '../assets/ServiceData'

const ServicesShowcase = ({ services }) => {
  // Split services into rows of 3
  // const firstRow = services.slice(0, 3);
  // const secondRow = services.slice(3, 6);

  return (
    <>
      <section className="p-10 lg:mx-auto my-0 max-w-[1400px] max-md:p-5 max-sm:p-2.5 font-['Jura']">
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              details={service.details}
            />
          ))}
        </div>
        {/* <div className="flex justify-between mb-10 max-md:flex-col max-md:gap-5 max-md:items-center">
          {secondRow.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              details={service.details}
            />
          ))}
        </div> */}
      </section>
    </>
  );
};

export default ServicesShowcase;
