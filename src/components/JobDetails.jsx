"use client";
import React from "react";
import BulletList from "./BulletList";

const Section = ({ title, children }) => (
  <section className="mt-14 max-md:mt-10">
    <h2 className="text-2xl font-medium">{title}</h2>
    {children}
  </section>
);

const JobDetails = ({ title, lookingFor, responsibilities, eduReq, salary, workingHours, perks }) => {
  
  return (
    <article className="w-[59%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start w-full text-base text-slate-900 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-3xl font-semibold">{title}</h2>

        <Section title="Who Are We Looking For">
          <BulletList items={lookingFor} />
        </Section>

        <Section title="What You Will Be Doing">
          <BulletList items={responsibilities} />
        </Section>

        <Section title="Educational Requirement">
          <p className="mt-5 leading-6">{eduReq}
          </p>
        </Section>

        <Section title="Salary">
          <BulletList
            items={[
              `Salary: ${salary ? salary : 'Not disclosed'}`,
              "Salary Review: Yearly",
            ]}
          />
        </Section>

        <Section title="Working Hours">
          <BulletList items={[workingHours]} />
        </Section>

        <Section title="Working Days">
          <BulletList items={["Weekly: 5 days.", "Weekend: Flexible"]} />
        </Section>

        <Section title="Perks & Benefits You'll Get">
          <BulletList items={perks} />
        </Section>
      </div>
    </article>
  );
};

export default JobDetails;