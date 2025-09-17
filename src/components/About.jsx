import React from "react";

const About = () => {
  return (
    <div className="px-50 mt-20 py-20 bg-blue-50">
      <p className="text-4xl font-bold text-center">About Me</p>
      <div className="mt-5 text-lg font-extralight flex flex-col gap-6 text-slate-600 max-w-2xl text-center mx-auto">
        <p >
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
    </div>
  );
};

export default About;
