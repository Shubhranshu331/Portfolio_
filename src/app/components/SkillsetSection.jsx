"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsetList = [
  {
    id: "slide1",
    title: "Programming Languages",
    items: ["Python", "Javascript", "Java", "R"],
  },
  {
    id: "slide2",
    title: "Machine Learning",
    items: ["Tensorflow", "Pytorch", "Pandas", "NLTK", "Keras", "NumPy", "Vader", "Scikit-Learn"],
  },
  {
    id: "slide3",
    title: "Web Development",
    items: ["Next.JS", "React.JS", "HTML", "Node.JS", "TailwindCSS", "SCSS", "CSS"],
  },
  {
    id: "slide4",
    title: "Concepts",
    items: ["GNN", "CNN", "U-Net", "NLP", "Preprocessing", "SEO-Optimization", "Responsive Design"],
  }
];

const combinedDescription = "Adept in programming languages (Python, JavaScript, Java, R) for versatile software development and data analysis. I utilize Machine Learning tools (TensorFlow, PyTorch, Pandas, NLTK, Keras, NumPy, Scikit-Learn) for predictive modeling and NLP, alongside Web Development expertise in Next.js, React.js, Node.js, and modern CSS frameworks. My grasp of GNN, CNN, NLP, preprocessing, and SEO optimization delivers cutting-edge, optimized solutions.";

const SkillsetSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(skillsetList[0].id);

  const paragraphVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
  };

  return (
    <section id="skillset" className="py-[4vh] sm:py-[8vh] px-[2vw] xl:px-[8vw] bg-[#f6f0e6] min-h-screen font-biz-ud-gothic">
      {/* Headings */}
      <div className="relative text-center mb-[2vh]">
        <h1
          className="text-[4.375rem] font-bold text-[#e0b0bc] opacity-50"
          style={{ fontFamily: 'Faktor, Raleway, sans-serif' }}
        >
          SKILLSET
        </h1>
        <h2
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-[#5e2a3a]"
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          My Skills
        </h2>
      </div>

      {/* Two-Column Layout */}
      <div className="max-w-[80rem]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skillset List */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-[0.7rem]  sm:text-[1rem] xl:text-[1.5rem]"
        >
          <style>
            {`
              .gradient-bg {
                background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                background-size: 400% 400%;
                animation: gradient 15s ease infinite;
                filter: opacity(0.8);
              }

              @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
            `}
          </style>
          <ul className="p-0 list-none">
            {skillsetList.map((skill, index) => (
              <li key={skill.id} className={`item${index + 1} mb-4 relative`}>
                <input
                  type="radio"
                  name="skillset"
                  id={skill.id}
                  className="hidden"
                  checked={selectedSkill === skill.id}
                  onChange={() => setSelectedSkill(skill.id)}
                />
                <label
                  htmlFor={skill.id}
                  className="grid grid-cols-[1fr_auto] grid-rows-[auto_auto] gap-2 p-4 rounded-lg border-[2px] border-[#5e2a3a] transition-all duration-350 ease-in-out group hover:bg-[#9c8f75] cursor-pointer relative gradient-bg"
                  style={{
                    gridTemplateAreas: '"h4 control" "content content"'
                  }}
                >
                  <h4
                    className={`text-[1.5rem] font-raleway font-bold h-[1.27em] overflow-hidden transition-all duration-900 ease-in-out group-hover:h-[1.5em] drop-shadow-[0_8px_24px_rgba(255,255,255,0.5)] ${
                      skill.id === "slide1" || skill.id === "slide4" ? "text-[#3a1a24]" : "text-[#5e2a3a]"
                    }`}
                    style={{ gridArea: 'h4', textShadow: '0 0 12px rgba(255, 255, 255, 1)',  }}
                  >
                    {skill.title}
                  </h4>
                  <span
                    className="control w-[1.2em] h-[1.2em] bg-[url('https://lidachk.github.io/cssBayan/cssBayan/assets/control.svg')] bg-no-repeat bg-center bg-contain opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:rotate-[450deg] group-hover:drop-shadow-[0_-0.2em_0.5em_#5ed8d8]"
                    style={{ gridArea: 'control', filter: 'invert(1%) sepia(42%) saturate(1672%) hue-rotate(167deg) brightness(101%) contrast(87%) ', opacity: 0.5 }}
                  ></span>
                  <div
                    className="slider mt-0 overflow-hidden h-0 transition-all duration-900 ease-in-out group-hover:h-[15rem] max-h-[15rem]"
                    style={{ gridArea: 'content' }}
                  >
                    <ul className="mt-4 text-[#222222] font-lato text-[1rem] font-bold list-disc pl-6 drop-shadow-[0_2px_4px_rgba(94,58,42,0.5)] flex flex-col justify-center text-center h-full">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="mb-2" style={{ opacity: 1, textShadow: '0 0 8px rgba(255, 255, 255, 0.9)' }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Paragraph Section */}
        <div className="flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key="combined-paragraph"
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="p-5 rounded-lg shadow-lg text-[#222222] font-lato text-[1rem] sm:text-[1.2rem] xl:text-[1.2rem] max-w-[30rem] relative z-10"
            >
              <p className="relative z-10" style={{ textShadow: '0 0 2px rgba(255, 255, 255, 0.8)' }}>{combinedDescription}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsetSection;