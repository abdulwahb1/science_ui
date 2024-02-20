import React from "react";
import Image from "next/image";
import { FEATURE_RESEARCHS } from "@/constants";
import Link from "next/link";
import { Button } from "@/components";

const Feature2 = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col p-4">
          <h2 className="text-2xl font-extrabold md:text-3xl text-center my-2 lg:text-4xl lg:text-left">
            We are here to make your research project{" "}
            <span className="text-custom-violet"> significant</span>
          </h2>
          <p className="text-center text-sm font-normal lg:my-10 md:text-base lg:text-left lg:text-lg">
            ScienceReach can help you integrate community knowledge into your
            research and create a science communication plan that demonstrates
            your project’s significance to the community.
          </p>
          <div className="flex-col hidden xl:flex lg:-my-5">
            <div className="grid grid-cols-2 gap-x-6 justify-center items-center ">
              {FEATURE_RESEARCHS.map((feature) => (
                <Link
                  href="/"
                  key={feature.title}
                  className=" text-custom-violet py-1 text-sm hover:underline font-medium lg:text-xl"
                >
                  {feature.title}
                </Link>
              ))}
            </div>
            <div className="my-4">
              <Button variant="btn_purple_mobile ">
                Get Started with your SCP
              </Button>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 flex justify-center items-center">
          <Image
            src="/section_2.png"
            width={874}
            height={753}
            alt="Feature 2 Image"
            className="rounded-xl max-h-[40rem] object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center xl:hidden">
        <div className="flex flex-col justify-center items-center ">
          {FEATURE_RESEARCHS.map((feature) => (
            <Link
              href="/"
              key={feature.title}
              className=" text-custom-violet py-1 text-sm md:text-base lg:text-xl hover:underline font-medium"
            >
              {feature.title}
            </Link>
          ))}
        </div>
        <div className="my-4">
          <Button variant="btn_purple_mobile lg:w-80 lg:h-12 lg:text-xl">
            Get Started with your SCP
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
