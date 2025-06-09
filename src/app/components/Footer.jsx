"use client"
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-[#e8e1d5] text-[#171717]">
      <div className="container mx-auto py-[4vh] px-[2vw] xl:px-[8vw] flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-[#171717] font-lato text-[1rem]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/shubhranshu489/"
            className="text-[#171717] hover:text-[#9c8f75] transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Shubhranshu331"
            className="text-[#171717] hover:text-[#9c8f75] transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;