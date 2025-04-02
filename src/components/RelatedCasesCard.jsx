import React from "react";

const RelatedCasesCard = ({ title, content }) => {
  return (
    <aside className="self-stretch my-8 lg:my-auto text-base text-white min-w-60 w-[400px]">
      <div className="flex relative flex-col items-start px-2.5 pt-5 pb-40 w-full aspect-[0.567] max-md:pb-24">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/334618b2d04c9f5f77c3ed9b660e05449729e328c7d027728d2c0e6c47188a68?placeholderIfAbsent=true&apiKey=1b3e2fa2c7d44b1aa79cd4be767b989d"
          alt="Related cases background"
          className="object-cover absolute inset-0 size-full"
        />
        <h3 className="relative ml-4 text-2xl leading-10 text-center max-md:ml-2.5">
          Related Cases
        </h3>
        <p className="relative mt-2.5 ml-4 leading-relaxed max-md:ml-2.5">
          {title}
        </p>
        <div className="flex relative gap-1.5 ml-4 items-center mt-5 -mb-8 leading-7 max-md:mb-2.5">
          <p className="">
            {content}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default RelatedCasesCard;
