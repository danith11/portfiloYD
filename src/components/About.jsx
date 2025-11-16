import React from "react";
import EducationCard from "./EducationCard";

const About = () => {
  return (
    <div className="px-5 md:px-30 sm:px-50 py-20 bg-blue-50">
      <p className="text-4xl font-bold text-center">About Me</p>
      <div className="mt-5 text-lg font-light flex flex-col gap-6 text-slate-600 max-w-2xl text-center mx-auto">
        <p>
          Hi, I’m Yethum Danith, a Software Engineering student passionate about
          creating modern and user-friendly applications. I enjoy working across
          the full stack — from designing responsive front-end interfaces with
          React, Next.js, and Tailwind, to building scalable back-end systems
          with Node.js, Express, MongoDB, and MySQL.
        </p>

        <p className="mt-4">
          My goal is to bridge design and functionality, ensuring seamless data
          flow and a smooth user experience. I love solving problems, learning
          new technologies, and building projects that make an impact.
        </p>
      </div>
      <div>
        <div>
          <p className="text-3xl font-bold">Education</p>
        </div>
        <div>
          <EducationCard />
        </div>
      </div>
    </div>
  );
};

export default About;
