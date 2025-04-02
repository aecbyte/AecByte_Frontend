import React from "react";

const SectionHeading = ({ children }) => {
  return (
    <h2 className="self-start text-6xl leading-[10px] max-md:text-4xl max-md:leading-[75px]">
      {children}
      <br />
    </h2>
  );
};

export default SectionHeading;
