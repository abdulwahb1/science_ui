import React from "react";

const Stats = () => {
  return (
    <section className="flex flex-col">
      <div className=" flex flex-col justify-center items-center ">
        <h2 className="text-2xl font-extrabold text-center">
          Project priorities <br /> delivered{" "}
          <span className="text-custom-violet"> best</span>
        </h2>
      </div>
      <div className="flex flex-row gap-10 my-5">
        <div className="flex flex-col">
          <div className="text-6xl text-custom-violet font-black">50K</div>
          <p className="text-sm text-black font-semibold">
            Successful Projects
          </p>
        </div>
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

        <div className="flex flex-col">
          <div className="text-6xl text-custom-violet font-black">10+</div>
          <p className="text-sm text-black font-semibold">Years of Service</p>
        </div>
      </div>
      <div className="flex flex-row gap-10 my-2">
        <div className="flex flex-col">
          <div className="text-6xl text-custom-violet font-black">30K</div>
          <p className="text-sm text-black font-semibold">Projects Leads</p>
        </div>
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

        <div className="flex flex-col">
          <div className="text-6xl text-custom-violet font-black">2.5K</div>
          <p className="text-sm text-black font-semibold">Years of Service</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
