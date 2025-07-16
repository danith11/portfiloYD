import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between fixed top-0 left-0 w-full items-center px-6 md:px-16 lg:px-36 py-5 ">
      <div className="cursor-pointer">
        <a href="/">
          <p className="font-bold text-3xl">Yethum Danith</p>
        </a>
      </div>

      <div className="flex gap-20 items-center cursor-pointer">
        <a className="font-semibold text-xl" href="#home">
          Home
        </a>
        <a className="font-semibold text-xl" href="#about-me">
          About me
        </a>

        <a className="font-semibold text-xl" href="#projects">
          Projects
        </a>

        <a className="font-semibold text-xl" href="#contact">
          Contacts
        </a>
      </div>
    </div>
  );
};

export default Navbar;
