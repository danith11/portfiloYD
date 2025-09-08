import React from "react";

const Footer = () => {
  return (
    <div className="pt-20">
      <div className="bg-slate-700 p-30">
        <p>Yethum Danith @ 2025.All rights are reserved</p>
        <div className="flex mt-5">
          <a href="https://github.com/danith11">
            <img className="w-10 hover:scale-110 duration-200" src="src/assets/github.png" alt="github logo" />
          </a>
          <a href="https://www.linkedin.com/in/yethum-danith-590659252/">
            <img className="w-10 hover:scale-110 duration-200" src="src/assets/linkdin.png" alt="linkdIn logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
