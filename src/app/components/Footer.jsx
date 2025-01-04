"use client"
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer border-t-[#33353F] text-white bg-[#222]">
      <div className="container mx-auto py-1 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-slate-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div>
            <p>!! Live Long and Prosper !!</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/shubhranshu489/" className="text-slate-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Shubhranshu331" className="text-slate-400 hover:text-white">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
