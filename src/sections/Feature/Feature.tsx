import React from "react";
import { FeatureCard } from "@/components";
import { FEATURES } from "@/constants";

const Feature = () => {
  return (
    <section className="flex flex-col justify-center items-center my-11">
      <div className="flex flex-col justify-center items-center gap-x-2 gap-y-4">
        <h2 className="text-black text-2xl font-extrabold">
          We are <span className="text-custom-violet"> building </span>{" "}
          community
        </h2>
        <p className="text-sm font-semibold">
          By bringing research and communities closer, we…
        </p>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="z-20 flex w-full flex-col ">
          <ul className="mt-5 grid gap-10 md:grid-cols-3 lg:mt-20 ">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feature;
