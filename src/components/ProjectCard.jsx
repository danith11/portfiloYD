import React from "react";

const ProjectCard = () => {
  return (
    <div>
      <div className="justify-center items-center text-center">
        <p className="text-2xl">Edwin Platform</p>
        <p>
          Developed an e-tutoring platform that connects students with tutors
          for live interactive learning sessions. Designed a database schema to
          support user roles like students, tutors, and admins. Integrated Zoom
          API for seamless online classes and AWS S3 for secure file storage,
          ensuring a smooth and reliable experience.
        </p>
        <div className="list-none flex gap-2 justify-center items-center">
          <li className="border-2 p-2 border-slate-200">NextJS</li>
          <li className="border-2 p-2 border-slate-200">Tailwind CSS</li>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
