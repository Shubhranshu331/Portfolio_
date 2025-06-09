"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { motion } from 'framer-motion';



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
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.",resData);
      setEmailSubmitted(true);
    }
  };




  return (
    <section id="contact">
      <div className="relative grid md:grid-cols-2 my-12 md:my-12 py-20 gap-4 py-[4vh] sm:py-[8vh] px-[2vw] xl:px-[8vw] bg-[#f6f0e6]">
        <div className="z-10">
          <h3 className=" text-5xl font-bold text-[#5e2a3a] mb-[6vh] font-raleway text-center">Let&apos;s Connect !!</h3>
          <br />
          <p className="ml-5 text-[#222222] font-bold font-raleway mb-4 text-justify max-w-md ">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials ml-5 mt-5 flex flex-row gap-2">
            <Link
              href="https://github.com/Shubhranshu331"
              className="text-[#5e2a3a] hover:text-[#9c8f75] transition-colors duration-300"
            >
              <FaGithub size={32} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shubhranshu489/"
              className="text-[#5e2a3a] hover:text-[#9c8f75] transition-colors duration-300"
            >
              <FaLinkedin size={32} />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-[#5e2a3a] font-bold block mb-2 text-[1rem] "
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="border-[2px] border-[#5e2a3a] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="abcd@efgh.xyz"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="text-[#5e2a3a] font-bold block mb-2 text-[1rem]"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className=" border-[2px] border-[#5e2a3a] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-[#5e2a3a] font-bold block mb-2 text-[1rem]"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="border-[2px] border-[#5e2a3a] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <button
      type="submit"
      className="call-to-action px-[1rem] sm:px-[1.5rem] py-[0.75rem] inline-block w-full sm:w-fit rounded-full bg-[#f6f0e6] text-white relative hover:bg-[#9c8f75] transition-colors duration-300 border-[1px] border-[#5e2a3a]"
    >
      <span className="flex items-center justify-between text-[#222222] text-[0.875rem] sm:text-[1rem]">
        Send Message
        <span className="ml-[0.5rem] sm:ml-[1rem] w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] rounded-full bg-[#5e2a3a] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-[1rem] h-[1rem] sm:w-[1.25rem] sm:h-[1.25rem] rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </span>
      </span>
    </button>
  </motion.div>{
              emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">
                  Email sent successfully!
                </p>
              )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default EmailSection;






