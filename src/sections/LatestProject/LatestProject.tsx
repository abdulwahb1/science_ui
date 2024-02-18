import { PROJECT_LIST } from "@/constants";
import React from "react";
import { ProjectCard } from "@/components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../styles/carouselStyles.module.css";

const LatestProject = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <p className="text-black text-center text-2xl font-extrabold">
          Some of the Latest Projects <br /> on{" "}
          <span className="text-custom-violet">ScienceReach</span>
        </p>
        <p className="text-black text-center text-sm font-normal mt-5">
          Discover the latest from researchers and <br /> community
          organizations
        </p>
      </div>

      <div className="flex flex-col">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          className="max-w-xs"
        >
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
