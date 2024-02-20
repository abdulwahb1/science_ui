import React from "react";
import { FeatureCard } from "@/components";
import { FEATURES } from "@/constants";

const Feature = () => {
  return (
    <section className="flex flex-col justify-center items-center my-11">
      <div className="flex flex-col justify-center items-center gap-x-2 gap-y-4">
        <h2 className="text-black text-2xl font-extrabold md:text-4xl lg:text-6xl">
          We are <span className="text-custom-violet"> building </span>{" "}
          community
        </h2>
        <p className="text-sm font-semibold md:text-base lg:text-2xl">
          By bringing research and communities closer, we…
        </p>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="z-20 flex w-full flex-col px-5">
          <ul className="mt-5 grid gap-5 md:gap-0 md:grid-cols-3 lg:mt-15 ">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
                isActive={feature.id === 2}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feature;
