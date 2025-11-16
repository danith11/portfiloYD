import React from "react";

const EducationCard = () => {
  const education = [
    {
      name: "Tacila Central College",
      from: "2013",
      to: "2021",
      description:
        "My journey in technology and creativity would not have been possible without the strong foundation laid by my school. It provided an environment that nurtured curiosity, discipline, and a deep appreciation for learning. The guidance of dedicated teachers and the support of a vibrant academic community played a pivotal role in shaping my path. I owe much of my progress and perseverance to the values and knowledge instilled during those formative years.",
    },
    {
      name: "Open University of Sri Lanka",
      from: "2022",
      to: "Present",
      description:
        "Currently pursuing a Bachelors Degree of Software Enginerring, the university emphasizes both theoretical knowledge and practical application through project-based learning and independent study. My program provides a solid foundation in computer science, covering software engineering, data science, and emerging technologies, while encouraging self-discipline, research, and real-world problem solving.",
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10">
        {education.map((item, index) => (
          <div
            key={index}
            className="flex flex-col flex-wrap border-1 rounded-xl p-2 my-5 hover:shadow-2xl"
          >
            <p className="text-lg font-medium">{item.name}</p>
            <div className="flex">
              <p className="text-sm font-light">{item.from} </p>
              <p> - </p>
              <p className="text-sm font-light">{item.to}</p>
            </div>
            <p className="font-light">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EducationCard;
