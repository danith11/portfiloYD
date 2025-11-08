import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div className="flex justify-between z-999 overflow-hidden  sm:fixed w-full items-center px-6 md:px-16 lg:px-36 py-5 bg-white ">
      <div className="cursor-pointer">
        <Link
          onClick={() => {
            scrollTo(0, 0);
            // setIsOpen(false);
          }}
          to={"/"}
        >
          <p className="font-bold text-3xl">Yethum Danith</p>
        </Link>
      </div>

      <div className="flex flex-col gap-20 items-center cursor-pointer sm:flex-row">
        {navLinks.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          
            className="text-black hover:text-slate-600 duration-300 transition-colors ease-in-out"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
