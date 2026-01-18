import React from "react";
import EducationCard from "./EducationCard";
import CurrentExplorations from "./CurrentExplorations";
import PersonalInterests from "./PersonalInterests";
import BlurCircle from "./BlurCircle";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="px-5 md:px-30 sm:px-50 py-20">
      <BlurCircle top="150px" right="20px" />
      <motion.p
        initial={{ z: 100, opacity: 0 }}
        whileInView={{ z: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center"
      >
        About Me
      </motion.p>
      <div className="mt-5 text-lg font-light flex flex-col gap-6 text-slate-600 max-w-2xl text-center mx-auto">
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Hi, I’m Yethum Danith, a Software Engineering student passionate about
          creating modern and user-friendly applications. I enjoy working across
          the full stack — from designing responsive front-end interfaces with
          React, Next.js, and Tailwind, to building scalable back-end systems
          with Node.js, Express, MongoDB, and MySQL.
        </motion.p>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          My goal is to bridge design and functionality, ensuring seamless data
          flow and a smooth user experience. I love solving problems, learning
          new technologies, and building projects that make an impact.
        </motion.p>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <p className="text-3xl font-bold">Education</p>
        <EducationCard />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-14"
      >
        <p className="text-3xl font-bold">Current Explorations</p>
        <CurrentExplorations />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-14"
      >
        <p className="text-3xl font-bold">Personal Interests</p>
        <PersonalInterests />
      </motion.div>
      <BlurCircle bottom="150px" left="20px" />
    </div>
  );
};

export default About;
