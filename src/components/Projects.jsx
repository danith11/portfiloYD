import React from "react";
import ProjectCard from "./ProjectCard";
import BlurCircle from "./BlurCircle";

const Projects = () => {
  return (
    <div className="px=10 sm:px-30">
      <div>
        <p className="text-4xl font-bold text-center mb-10">Projects</p>
        <BlurCircle right="50px" />
        <ProjectCard />{" "}
      </div>
    </div>
  );
};

export default Projects;
