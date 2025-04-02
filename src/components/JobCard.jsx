// import ArrowIcon from "./ArrowIcon";

const JobCard = ({ id, title, experience, deadline }) => {
  return (
    <a href={`/Careers/${title}/${id}`} >
    <article className="flex relative items-center p-4 rounded shadow-sm bg-zinc-300 h-auto max-md:p-3 max-sm:flex-col max-sm:items-start max-sm:p-3">

      <h2 className="text-xl sm:text-2xl text-slate-900 w-full ">

        {title}
      </h2>
      <div className="flex w-full gap-16 sm:gap-12 ml-16 max-md:gap-8 max-md:ml-8 max-sm:flex-col max-sm:gap-2 max-sm:mt-2 max-sm:w-full">

        <div className="flex flex-col gap-2 max-sm:w-full">
          <span className="text-sm sm:text-base text-black">Experience</span>

          <span className="text-lg sm:text-2xl text-slate-900">{experience} Years</span>

        </div>
        {deadline && (
          <div className="flex flex-col gap-2 max-sm:w-full">
            <span className="text-sm sm:text-base text-black">Deadline</span>

            <time className="text-lg sm:text-2xl text-slate-900">{deadline}</time>

          </div>
        )}
      </div>
      <div className="absolute right-8 w-0 h-0 table-cell align-middle border-t-8 border-b-8 border-l-12 border-transparent border-l-black"></div>
      {/* <ArrowIcon /> */}
    </article>
    </a>
  );
};

export default JobCard;
