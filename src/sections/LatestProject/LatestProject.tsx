import { PROJECT_LIST } from "@/constants";
import React from "react";
import { ProjectCard } from "@/components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";
import Link from "next/link";

const LatestProject = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <p>Some of the Latest Projects on ScienceReach</p>
        <p>Discover the latest from researchers and community organizations</p>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <Carousel showThumbs={false}>
          {PROJECT_LIST.map((project) => (
            <div key={project.id}>
              <ProjectCard
                img={project.img}
                title={project.title}
                icon1={project.icon1}
                icon2={project.icon2}
                icon3={project.icon3}
                date={project.date}
                qoute={project.qoute}
                seen={project.seen}
                leads={project.leads}
                tags={project.tags}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default LatestProject;
