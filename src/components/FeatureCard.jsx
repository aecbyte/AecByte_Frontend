export const FeatureCard = () => {
    return (
      <article className="rounded-2xl mt-20 lg:mt-0 shadow-xl h-[460px] w-[408px] max-md:w-full max-md:h-auto bg-gradient-to-r from-[#DC3545] to-[#FD7E14]">
        <div className="px-4 pt-4 pb-0 max-md:px-3 max-md:pt-3 max-md:pb-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd19100c11e4ab019116362a3c2e05241c041549"
            alt="People working together"
            className="object-cover rounded-xl h-[251px] w-[376px] max-md:w-full max-md:h-auto"
          />
        </div>
        <div className="px-6 pt-6 pb-0 max-sm:px-4 max-sm:py-8">
          <h2 className="mb-1 text-xl font-bold tracking-tight text-slate-800 max-sm:text-lg">
          Our Mission
          </h2>
          <p className="text-base leading-7 text-white max-sm:text-sm max-sm:leading-6">
          To empower businesses with technology that drives growth, simplifies complexity, and unlocks new opportunities—one byte at a time.
          </p>
        </div>
      </article>
    );
  };
  