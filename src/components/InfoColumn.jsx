import React from "react";
import SectionHeading from "./SectionHeading";
import SectionText from "./SectionText";

const InfoColumn = ({
  heading,
  text,
  imageSrc,
  className,
  imageFirst = true,
}) => {
  const content = (
    <>
      <div className="flex flex-col mt-px w-full max-md:max-w-full">
        <SectionHeading>{heading}</SectionHeading>
        <SectionText>{text}</SectionText>
      </div>
      <img
        src={imageSrc}
        alt={heading}
        className="object-contain self-center mt-16 max-w-full aspect-[0.89] w-[447px] max-md:mt-10"
      />
    </>
  );

  return (
    <article className={className}>
      <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
        {imageFirst ? (
          content
        ) : (
          <div className="flex flex-col grow items-center mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col pb-7 max-w-full w-[590px]">
              {content}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default InfoColumn;
