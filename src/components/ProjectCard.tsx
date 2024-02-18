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
    <div className="flex flex-col my-11">
      <div className="w-full">
        <Image src={img} alt="picture" width={510} height={296} className="" />
      </div>

      <p className="text-black text-lg font-extrabold my-5 capitalize text-left">
        {title}
      </p>
      <div className="flex flex-col ">
        <div className="flex flex-row gap-3 ">
          <div className="flex flex-row gap-1 ">
            {" "}
            <Image
              src={icon1}
              width={24}
              height={28}
              alt="calendar"
              className="max-w-6 max-h-7"
            />
            <p className="text-sm text-black font-medium mt-1">{date}</p>
          </div>
          <div className="flex flex-row gap-1 mt-1">
            {" "}
            <Image
              src={icon3}
              width={24}
              height={24}
              alt="calendar"
              className="max-w-[24px] max-h-[24px]"
            />
            <p className="text-sm text-black font-medium ">{qoute}</p>
          </div>
        </div>
        <div className="flex flex-row gap-1 mt-2">
          {" "}
          <Image
            src={icon2}
            width={24}
            height={24}
            alt="calendar"
            className="max-w-[24px] max-h-[24px]"
          />
          <p className="text-sm text-black font-medium ">{seen}</p>
        </div>
        <div className="my-5 text-left">
          <p className="text-sm text-black font-semibold ml-auto">
            Project leads:{" "}
          </p>
          <p className="text-sm text-black font-medium">{leads}</p>
        </div>
        <div className="text-left">
          <Link
            href="/"
            className="text-[0.6rem] text-black font-medium hover:text-blue-500"
          >
            {tags}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
