"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.", resData);
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="py-[4vh] sm:py-[8vh] px-[2vw] xl:px-[8vw] bg-[#f6f0e6]"
    >
      <div className="relative grid md:grid-cols-2 my-12 gap-4">
        <div className="z-10">
          <h3 className="text-5xl font-bold text-[#1d2e3f] my-2 font-raleway">
            Let's Connect !!
          </h3>
          <br />
          <p className="text-[#171717] mb-4 max-w-md font-lato text-[1rem]">
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link
              href="https://github.com/Shubhranshu331"
              className="text-[#f6f0e6] hover:text-[#9c8f75] transition-colors duration-300"
            >
              <Image src={GithubIcon} alt="Github Icon" className="fill-[#f6f0e6]" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shubhranshu489/"
              className="text-[#f6f0e6] hover:text-[#9c8f75] transition-colors duration-300"
            >
              <Image src={LinkedinIcon} alt="Linkedin Icon" className="fill-[#f6f0e6]" />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-[#171717] block mb-2 text-sm font-medium font-lato"
              >
                Your email
              </label>
              
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="text-[#171717] block text-sm mb-2 font-medium font-lato"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#ffffff] border border-[#5e2a3a] placeholder-[#171717] text-[#171717] text-sm rounded-lg block w-full p-2.5 font-lato"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-[#171717] block text-sm mb-2 font-medium font-lato"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#ffffff] border border-[#5e2a3a] placeholder-[#171717] text-[#171717] text-sm rounded-lg block w-full p-2.5 font-lato"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="call-to-action px-[1.5rem] py-[0.75rem] rounded-lg w-full sm:w-fit bg-[#f6f0e6] text-[#171717] font-lato font-medium text-[1rem] border-[2px] border-[#5e2a3a] hover:bg-[#9c8f75] hover:text-white transition-colors duration-300"
            >
              Send Message
            </button>
            {emailSubmitted && (
              <p className="text-[#16a34a] text-sm mt-2 font-lato">
                Email sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;