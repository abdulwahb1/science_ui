import React from "react";

const Stats = () => {
  return (
    <section className="flex flex-col bg-[#F6F6F6] w-full justify-center items-center py-6">
      <div className=" flex flex-col justify-center items-center ">
        <h2 className="text-2xl font-extrabold text-center md:text-4xl">
          Project priorities <br /> delivered{" "}
          <span className="text-custom-violet"> best</span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row ">
        <div className="flex flex-row gap-10 my-5 md:my-10 2xl:gap-x-20">
          <div className="flex flex-col">
            <div className="text-6xl text-custom-violet font-black md:text-8xl lg:text-6xl">
              50K
            </div>
            <p className="text-sm text-black font-semibold md:text-base">
              Successful Projects
            </p>
          </div>
          <div className="md:mt-5  lg:mt-2">
            <svg
              width="2"
              height="65"
              viewBox="0 0 2 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.13477"
                y1="0.432617"
                x2="1.13476"
                y2="64.3857"
                stroke="black"
                strokeOpacity="0.5"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-6xl text-custom-violet font-black md:text-8xl lg:text-6xl">
              10+
            </div>
            <p className="text-sm text-black font-semibold md:text-base">
              Years of Service
            </p>
          </div>
        </div>
        <div className="lg:mt-12 lg:mx-6 hidden lg:flex 2xl:mx-20">
          <svg
            width="2"
            height="65"
            viewBox="0 0 2 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.13477"
              y1="0.432617"
              x2="1.13476"
              y2="64.3857"
              stroke="black"
              strokeOpacity="0.5"
            />
          </svg>
        </div>
        <div className="flex flex-row gap-10 my-2 ml-2 lg:my-10 2xl:gap-x-20">
          <div className="flex flex-col">
            <div className="text-6xl text-custom-violet font-black md:text-8xl lg:text-6xl">
              30K
            </div>
            <p className="text-sm text-black font-semibold md:text-base">
              Projects Leads
            </p>
          </div>
          <div className="md:mt-5 lg:mt-2">
            <svg
              width="2"
              height="65"
              viewBox="0 0 2 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.13477"
                y1="0.432617"
                x2="1.13476"
                y2="64.3857"
                stroke="black"
                strokeOpacity="0.5"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-6xl text-custom-violet font-black md:text-8xl lg:text-6xl">
              2.5K
            </div>
            <p className="text-sm text-black font-semibold md:text-base">
              Years of Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
