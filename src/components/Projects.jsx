import React from "react";
import ProjectCard from "./ProjectCard";
import BlurCircle from "./BlurCircle";

const Projects = () => {
  return (
    <div className="px=10 sm:px-30 mb-2">
      <div className="items-center text-center">
        <p className="text-4xl font-bold text-center mb-10">Projects</p>
        <BlurCircle right="50px" />
        <ProjectCard />{" "}
        <button className="py-3 px-6 bg-slate-800 rounded-xl text-slate-200 cursor-pointer hover:scale-102 duration-200 hover:text-slate-50 ">
          See All Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
