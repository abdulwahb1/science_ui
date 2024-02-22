import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between w-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center w-full px-5 py-5 2xl:w-2/4 2xl:px-0">
          <h1 className="text-3xl font-extrabold md:text-left text-center text-black py-5 lg:text-6xl md:text-3xl 2xl:text-7xl">
            Our <span className="text-custom-violet"> mission </span> is to
            bring <span className="text-custom-violet"> research </span>and
            communities closer
          </h1>
          <p className="text-sm md:text-base lg:text-2xl text-center font-normal text-black leading-5 md:text-left">
            ScienceReach is a library of community challenges, needs and
            priorities. With ScienceReach, researchers can target the most
            important challenges in the communities with their research
            projects.
          </p>
          <div className="flex flex-row p-5 md:p-0 md:my-5 gap-2 mr-auto">
            <p className="text-custom-violet font-bold text-base md:text-xs lg:text-lg">
              See How it Works
            </p>
            <Link href="/" className="hover:scale-150">
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1.5 md:mt-0.5 lg:mt-2 lg:w-5 lg:h-5"
              >
                <path
                  d="M13.3292 7.01861C13.6221 6.72572 13.6221 6.25084 13.3292 5.95795L8.55619 1.18498C8.26329 0.892087 7.78842 0.892087 7.49553 1.18498C7.20263 1.47787 7.20263 1.95275 7.49553 2.24564L11.7382 6.48828L7.49553 10.7309C7.20263 11.0238 7.20263 11.4987 7.49553 11.7916C7.78842 12.0845 8.26329 12.0845 8.55619 11.7916L13.3292 7.01861ZM0.898438 7.23828H12.7988V5.73828H0.898438V7.23828Z"
                  fill="#514EDD"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className=" px-2 md:px-0 relative md:my-20 lg:w-2/4 lg:py-10">
          <div className="rounded-b-lg w-11 h-8 bg-custom-violet opacity-50 absolute left-1 -top-1 lg:top-7 lg:w-13 lg:h-8 lg:-left-2 xl:left-6 xl:top-7 2xl:w-36 2xl:h-24 2xl:-left-20"></div>
          <div>
            <Image
              src="/section_1.png"
              width={4096}
              height={659}
              alt="section_1"
              className="h-full md:h-80 mb-2 rounded-l-xl md:w-[50rem] object-contain 2xl:hidden"
            />
            <Image
              src="/desktop_section_1.png"
              width={961}
              height={659}
              alt="section_1"
              className="w-full h-full hidden 2xl:block"
            />

            <div className="rounded-b-lg w-24 h-16 bg-custom-violet ml-auto absolute bottom-0 right-2 md:w-32 md:h-24 md:right-0 xl:right-10 xl:bottom-4 2xl:w-44 2xl:h-36">
              <div className="text-white text-xs md:text-lg font-medium flex flex-col justify-center items-center h-full">
                <span className="text-xl font-extrabold lg:text-2xl xl:text-xl 2xl:text-4xl">
                  70K+
                </span>
                <p className="text-sm 2xl:text-lg">Successful Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
