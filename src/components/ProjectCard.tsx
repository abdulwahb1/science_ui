import React from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectCard = {
  img: string;
  title: string;
  icon1: string;
  icon2: string;
  icon3: string;
  date: string;
  qoute: string;
  seen: string;
  leads: string;
  tags: string;
};

const ProjectCard = ({
  img,
  title,
  icon1,
  icon2,
  icon3,
  date,
  qoute,
  seen,
  leads,
  tags,
}: ProjectCard) => {
  return (
    <div className="flex flex-col justify-center items-center  my-11">
      <div className="">
        <Image src={img} alt="picture" width={510} height={296} className="" />
      </div>
      <p className="text-black text-lg font-extrabold my-5 capitalize">
        {title}
      </p>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-row ">
          <div className="flex flex-row">
            {" "}
            <Image src={icon1} width={14} height={14} alt="calendar" />
            <p className="text-sm text-black font-medium">{date}</p>
          </div>
          <div className="flex flex-row">
            {" "}
            <Image src={icon2} width={28} height={28} alt="calendar" />
            <p className="text-sm text-black font-medium">{qoute}</p>
          </div>
          <div className="flex flex-row">
            {" "}
            <Image src={icon3} width={28} height={28} alt="calendar" />
            <p className="text-sm text-black font-medium">{seen}</p>
          </div>
        </div>
        <div className="my-5">
          <p>Project leads: </p>
          <p>{leads}</p>
        </div>
        <div>
          <Link href="/">{tags}</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
