"use client";

import { IntegratedCircuitIcon } from "../assets/Icons/IntegratedCircuitIcon";
import { CardIcon } from "../assets/Icons/CardIcon";
import { ComponentsIcon } from "../assets/Icons/ComponentsIcon";
import { PlatformIcon } from "../assets/Icons/PlatformIcon";
import { FeatureGridCard } from "./FeatureGridCard";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: IntegratedCircuitIcon,
    title: "Deep Expertise",
    description:
      "Our team of engineers, architects, and strategists brings decades of combined experience in AI, cloud computing, IoT, and enterprise software.",
  },
  {
    icon: CardIcon,
    title: "Client-Centric Approach",
    description:
      "We don’t just build technology—we solve your unique problems with agile, collaborative methodologies.",
  },
  {
    icon: ComponentsIcon,
    title: "Future-Ready Solutions",
    description:
      "From MVP development to full-scale deployments, we ensure your systems are scalable, secure, and ahead of the curve.",
  },
  {
    icon: PlatformIcon,
    title: "Innovative Tech Solutions",
    description:
      "As your trusted partner we deliver digital transformation services designed to scale with your ambitions",
  },
];

export const Features = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Jura:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <section className="lg:flex gap-12 px-10 py-20 mx-auto my-0 mt-0.5 max-w-[1100px] max-md:flex-col max-md:px-5 max-md:py-10 max-sm:p-5">
        <div className="grid gap-8 grid-cols-[repeat(2,300px)] h-fit max-md:gap-5 max-md:grid-cols-[1fr]">
          {features.map((feature, index) => (
            <FeatureGridCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <FeatureCard />
      </section>
    </>
  );
};

export default Features;