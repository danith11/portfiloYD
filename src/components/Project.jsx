import React from "react";
import ProjectCard from "./ProjectCard";
import BlurCircle from "./BlurCircle";

const Project = () => {
  return (
    <div className="p-2 sm:mx-30 mb-2">
      <div className="items-center text-center">
        <p className="text-4xl font-bold text-center mb-10">Projects</p>
        <BlurCircle right="50px" />
        <ProjectCard />{" "}
      </div>
    </div>
  );
};

export default Project;