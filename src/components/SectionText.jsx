import React from "react";

const SectionText = ({ children }) => {
  return (
    <p className="mt-15 text-base leading-7 text-neutral-600 max-md:mt-10 max-md:max-w-full">
      {children}
    </p>
  );
};

export default SectionText;
