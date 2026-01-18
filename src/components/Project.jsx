import React from "react";
import ProjectCard from "./ProjectCard";
import BlurCircle from "./BlurCircle";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="p-2 sm:mx-30 mb-2"
    >
      <div className="items-center text-center">
        <p className="text-4xl font-bold text-center md:mt-16 mb-10">
          Projects
        </p>
        <BlurCircle right="50px" />
        <ProjectCard />{" "}
      </div>
    </motion.div>
  );
};

export default Project;
