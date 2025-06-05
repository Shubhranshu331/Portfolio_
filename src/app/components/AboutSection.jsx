"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const progressList = [
  { metric: "Concepts", value: "20", postfix: "+" },
  { metric: "Technical Skills", value: "10", postfix: "+" },
  { metric: "Projects", value: "10", postfix: "+" },
  { metric: "Web Development", value: "5", postfix: "+" },
  { metric: "Machine Learning", value: "5", postfix: "+" },
  { metric: "Android Development", value: "1", postfix: "+" }
];

const AboutSection = () => {
  useEffect(() => {
    console.log("AboutSection mounted");
  }, []);

  return (
    <motion.section
      id="about"
      className="py-[4vh] sm:py-[8vh] px-[2vw] xl:px-[8vw] bg-[#f6f0e6]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <style jsx>{`
        @property --num {
          syntax: "<integer>";
          initial-value: 0;
          inherits: false;
        }

        .counter {
          animation: counter 4s ease-in-out forwards;
          counter-reset: num var(--num);
          font-family: 'Raleway', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: #5e2a3a;
        }

        .counter::after {
          content: counter(num);
        }

        @keyframes counter {
          from {
            --num: 0;
          }
          to {
            --num: var(--target-num);
          }
        }
      `}</style>

      {/* Headings */}
      <div className="relative text-center mb-[2vh]">
        <h1
          className="text-[4.375rem] font-bold text-[#e0b0bc] opacity-50"
          style={{ fontFamily: 'Faktor, Raleway, sans-serif' }}
        >
          RESUME
        </h1>
        <h2
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-[#5e2a3a]"
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          About Me
        </h2>
      </div>

      {/* Responsive Layout */}
      <div className="flex flex-col gap-[2vw] md:grid md:grid-cols-4">
        {/* Columns 1-2: Personal Information and Download Button */}
        <div className="md:col-span-2 mb-[4vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-[#5e2a3a] mb-[6vh] font-raleway text-center">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2vw]">
              {/* Column 1 */}
              <ul className="text-[#222222] font-lato text-[1rem] min-w-0">
                <li className="mb-[1.5vh] text-center break-words">
                  <span className="font-bold text-[#5e2a3a] text-[1.2rem]">Name</span>
                  <br />
                  Shubhranshu
                </li>
                <li className="mb-[1.5vh] text-center break-words">
                  <span className="font-bold text-[#5e2a3a] text-[1.2rem]">Age</span>
                  <br />
                  23
                </li>
                <li className="mb-[1.5vh] text-center break-words">
                  <span className="font-bold text-[#5e2a3a] text-[1.2rem]">Freelance</span>
                  <br />
                  <span className="font-bold text-[#16a34a]">Available</span>
                </li>
                <li className="mb-[1.5vh] text-center break-words">
                  <span className="font-bold text-[#5e2a3a] text-[1.2rem]">Phone Number</span>
                  <br />
                  +91-8957484331
                </li>
              </ul>
              {/* Column 2 */}
              <ul className="text-[#222222] font-lato text-[1rem] min-w-0">
                <li className="mb-[1.5vh] text-center break-words">
                  <span className="font-bold text-[#5e2a3a] text-[1.2rem]">Nationality</span>
                  <br />
                  Indian
                </li>
                <li className="mb-[1.5vh] text-center break-words">
                  <span className="font-bold text-[#5e2a3a] text-[1.2rem]">Address</span>
                  <br />
                  Uttar Pradesh, India
                </li>
                <li className="mb-[1.5vh] text-center break-words">
                  <span className="font-bold text-[#5e2a3a] text-[1.2rem]">Languages</span>
                  <br />
                  English and Hindi
                </li>
                <li className="mb-[1.5vh] text-center break-words">
                  <span className="font-bold text-[#5e2a3a] text-[1.2rem]">Email</span>
                  <br />
                  Shubhranshu.331@gmail.com
                </li>
              </ul>
            </div>
            {/* Download Resume Button */}
            <div className="text-center mt-[3vh] mb-[3vh]">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href="/Shubhranshu_Resume.pdf"
                  download
                  className="call-to-action px-[1rem] sm:px-[1.5rem] py-[0.5rem] sm:py-[0.75rem] inline-block w-full sm:w-fit rounded-full bg-[#f6f0e6] text-white relative hover:bg-[#9c8f75] transition-colors duration-300 border-[1px] border-[#5e2a3a]"
                >
                  <span className="flex items-center justify-between text-[#222222] text-[0.875rem] sm:text-[1rem]">
                    Download Resume
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
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Columns 3-4: Progress */}
        <div className="md:col-span-2 mb-[7vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-[#5e2a3a] mb-[6vh] font-raleway text-center">
              Progress
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2vw]">
              {/* Column 3 */}
              <div className="min-w-0">
                {progressList.slice(0, 3).map((progress, index) => (
                  <div key={index} className="flex flex-col mb-[3vh] items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="border-[2px] border-[#5e2a3a] rounded-lg w-[3vw] h-[3vw] min-w-[60px] min-h-[60px] flex justify-center items-center">
                        <h2 className="counter text-[#5e2a3a] text-[1.25rem] font-bold flex items-center" style={{ '--target-num': progress.value }}>
                          <span className="inline-block">{progress.postfix}</span>
                        </h2>
                      </div>
                    </motion.div>
                    <span className="text-[#5e2a3a] text-[1.25rem] font-raleway font-bold text-center break-words mt-2">
                      {progress.metric}
                    </span>
                  </div>
                ))}
              </div>
              {/* Column 4 */}
              <div className="min-w-0">
                {progressList.slice(3).map((progress, index) => (
                  <div key={index} className="flex flex-col mb-[3vh] items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="border-[2px] border-[#5e2a3a] rounded-lg w-[3vw] h-[3vw] min-w-[60px] min-h-[60px] flex justify-center items-center">
                        <h2 className="counter text-[#5e2a3a] text-[1.25rem] font-bold flex items-center" style={{ '--target-num': progress.value }}>
                          <span className="inline-block">{progress.postfix}</span>
                        </h2>
                      </div>
                    </motion.div>
                    <span className="text-[#5e2a3a] text-[1.25rem] font-raleway font-bold text-center break-words mt-2">
                      {progress.metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;