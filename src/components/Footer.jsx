import { motion } from "framer-motion";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="p-24 flex flex-col md:flex-row gap-10 md:gap-0 justify-between bg-gradient-to-b from-slate-50 to-slate-400 border-t-2 border-blue-100"
      >
        <div>
          <p className="text-2xl font-bold">Get In Touch</p>
          <div className="mt-5">
            <a
              className="flex flex-row items-center gap-2 cursor-pointer"
              href="mailto:yethumdanith2002@gmail.com"
              target="blank"
            >
              {" "}
              <BiLogoGmail />
              <p className="font-light">yethumdanith2002@gmail.com</p>
            </a>
          </div>

          <p className="font-light">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold">Quick Links</p>
          <ul className="mt-5">
            <li>
              <a
                className="font-light hover:font-medium transition-all duration-500"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-light hover:font-medium transition-all duration-500"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="font-light hover:font-medium transition-all duration-500"
                href="/projects"
              >
                Project
              </a>
            </li>
            <li>
              <a
                className="font-light hover:font-medium transition-all duration-500"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-bold">Connect</p>
          <div className="flex flex-row gap-3 mt-5">
            <a href="https://github.com/danith11">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ydanith/">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/yethum.danith">
              <FaFacebook />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
