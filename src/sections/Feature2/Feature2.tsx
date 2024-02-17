import React from "react";
import Image from "next/image";
import { FEATURE_RESEARCHS } from "@/constants";
import Link from "next/link";
import { Button } from "@/components";

const Feature2 = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col p-4">
        <h2 className="text-2xl font-extrabold  text-center my-2">
          We are here to make your research project{" "}
          <span className="text-custom-violet"> significant</span>
        </h2>
        <p className="text-center text-sm font-normal">
          ScienceReach can help you integrate community knowledge into your
          research and create a science communication plan that demonstrates
          your project’s significance to the community.
        </p>
      </div>
      <div className="p-4">
        <Image
          src="/section_2.png"
          width={874}
          height={753}
          alt="Feature 2 Image"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center ">
          {FEATURE_RESEARCHS.map((feature) => (
            <Link
              href="/"
              key={feature.title}
              className=" text-custom-violet py-1 text-sm hover:underline font-medium"
            >
              {feature.title}
            </Link>
          ))}
        </div>
        <div className="my-4">
          <Button variant="btn_purple_mobile">Get Started with SCP</Button>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
