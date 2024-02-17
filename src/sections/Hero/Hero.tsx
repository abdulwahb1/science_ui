import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between w-full">
      <div className="flex flex-col items-center justify-center w-full px-5 py-5">
        <h1 className="text-3xl font-extrabold text-center text-black py-5">
          Our <span className="text-custom-violet"> mission </span> is to bring{" "}
          <span className="text-custom-violet"> research </span>and communities
          closer
        </h1>
        <p className="text-sm text-center font-normal text-black leading-5">
          ScienceReach is a library of community challenges, needs and
          priorities. With ScienceReach, researchers can target the most
          important challenges in the communities with their research projects.
        </p>
        <div className="flex flex-row p-5 gap-2">
          <p className="text-custom-violet font-bold text-base">
            See How it Works
          </p>
          <Link href="/" className="hover:scale-150">
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1.5"
            >
              <path
                d="M13.3292 7.01861C13.6221 6.72572 13.6221 6.25084 13.3292 5.95795L8.55619 1.18498C8.26329 0.892087 7.78842 0.892087 7.49553 1.18498C7.20263 1.47787 7.20263 1.95275 7.49553 2.24564L11.7382 6.48828L7.49553 10.7309C7.20263 11.0238 7.20263 11.4987 7.49553 11.7916C7.78842 12.0845 8.26329 12.0845 8.55619 11.7916L13.3292 7.01861ZM0.898438 7.23828H12.7988V5.73828H0.898438V7.23828Z"
                fill="#514EDD"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="px-4 relative">
        <div className="rounded-b-lg w-[54px] h-[38px] bg-custom-violet opacity-50 absolute left-2 top-0"></div>
        <div>
          <Image
            src="/section_1.png"
            width={962}
            height={659}
            alt="section_1"
            className="w-screen sm:hidden h-full mb-2"
          />
          <div className="rounded-b-lg w-[87px] h-[70px] bg-custom-violet ml-auto absolute bottom-0 right-4 ">
            <div className="text-white text-center text-xs px-2 py-1 font-medium">
              <span className="text-xl font-extrabold">70K+</span> Successful
              Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
