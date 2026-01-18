import React from "react";
import ProjectCard from "./ProjectCard";
import BlurCircle from "./BlurCircle";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="p-2 sm:mx-30 mb-2"
    >
      <div className="items-center text-center">
        <p className="text-4xl font-bold text-center mb-10">Projects</p>
        <BlurCircle right="50px" />
        <ProjectCard limit={3} />{" "}
        <button className="py-3 mt-5 px-6 bg-slate-800 rounded-xl text-slate-200 cursor-pointer hover:scale-102 duration-200 hover:text-slate-50 ">
          <a href="/projects">See All Projects</a>
        </button>
      </div>
    </motion.div>
  );
};

export default Projects;
