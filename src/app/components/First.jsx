'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

const First = () => {
  return (
    <section className="py-[2vh] sm:py-[4vh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Image Section (Left/Top) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-4 place-self-center mt-[2vh] lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border-[0.016em] lg:border-[0.01em] border-[#5e2a3a]">
            <Image
              src="/images/Shubhranshu_Pic.png"
              alt="Profile pic"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
              height={325}
              width={325}
              priority
            />
          </div>
          {/* Icon Buttons (Visible only on large screens) */}
          <div className="hidden lg:flex flex-wrap justify-center gap-[1rem] mt-[1rem]">
            <Link href="/#about" className="call-to-action w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#222222"
                className="w-[1.25rem] h-[1.25rem] icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
            <Link href="/#skillset" className="call-to-action w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#222222"
                className="w-[1.25rem] h-[1.25rem] icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </Link>
            <Link href="/#internships" className="call-to-action w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#222222"
                className="w-[1.25rem] h-[1.25rem] icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
            <Link href="/#projects" className="call-to-action w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#222222"
                className="w-[1.25rem] h-[1.25rem] icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
            <Link href="/#education" className="call-to-action w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#222222"
                className="w-[1.25rem] h-[1.25rem] icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </Link>
            <Link href="/#contact" className="call-to-action w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#222222"
                className="w-[1.25rem] h-[1.25rem] icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2v-6a2 2 0 012-2h2m4 0V6a2 2 0 00-2-2H7a2 2 0 00-2 2v2m10 8v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2"
                />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Text Section (Below Image on <lg, Right on lg+) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-8 place-self-center text-center lg:text-left mt-[2vh] lg:mt-0 lg:pl-[4rem]"
        >
          <div className="place-self-center">
            {/* Main heading */}
            <h1 className="mb-[1rem] text-[1.75rem] sm:text-[2rem] lg:text-[3rem] lg:leading-normal font-extrabold text-[#1d2e3f]">
              <span className="text-[#5e2a3a]">
                I am Shubhranshu
              </span>
              <br />
              {/* Type Animation */}
              <TypeAnimation
                sequence={[
                  'UI/UX Designer',
                  1000,
                  'ML Engineer',
                  1000,
                  'Web Developer',
                  1000,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
              />
            </h1>
            {/* Overview */}
            <p className="text-[#222222] text-[0.875rem] sm:text-[1rem] lg:text-[1.25rem] mb-[1.5rem]">
              Computer Science Engineer with a strong background in C, Python, and R. Seeking roles in Machine Learning, Deep Learning, Front-end Development, or Data Science. Proficient in TensorFlow, PyTorch, ReactJS, NextJS, NodeJS, and MongoDB. Enthusiastic about collaborating with dynamic teams to drive innovative solutions.
            </p>
            {/* More About Me Button */}
            <Link
              href="/#about"
              className="call-to-action px-[1rem] sm:px-[1.5rem] py-[0.5rem] sm:py-[0.75rem] inline-block w-full sm:w-fit rounded-full bg-[#f6f0e6] text-white relative hover:bg-[#f6f0e6]"
            >
              <span className="flex items-center justify-between text-[#222222] text-[0.875rem] sm:text-[1rem]">
                More About Me
                <span className="ml-[0.5rem] sm:ml-[1rem] w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] rounded-full bg-[#5e2a3a] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    className="w-[1rem] h-[1rem] sm:w-[1.25rem] sm:h-[1.25rem]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default First;