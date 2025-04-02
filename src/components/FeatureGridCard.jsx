export const FeatureGridCard = ({ icon: Icon, title, description }) => {
    return (
      <article className="bg-white bg-opacity-0">
        <div className="relative pt-12 max-sm:pt-9">
          <Icon />
          <h2 className="mb-2 text-xl font-bold text-slate-800 max-sm:text-lg">
            {title}
          </h2>
          <p className="text-base leading-7 text-stone-500 max-sm:text-sm max-sm:leading-6">
            {description}
          </p>
        </div>
      </article>
    );
  };
  