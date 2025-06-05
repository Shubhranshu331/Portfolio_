"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsetList = [
  {
    id: "slide1",
    title: "Programming Languages",
    items: ["Python", "Javascript", "Java", "R"],
    image: "/images/Skills/skill1.png",
    alt: "Programming Languages Skills"
  },
  {
    id: "slide2",
    title: "Machine Learning",
    items: ["Tensorflow", "Pytorch", "Pandas", "NLTK", "Keras", "NumPy", "Vader", "Scikit-Learn"],
    image: "/images/Skills/skill2.png",
    alt: "Machine Learning Skills"
  },
  {
    id: "slide3",
    title: "Web Development",
    items: ["Next.JS", "React.JS", "HTML", "Node.JS", "TailwindCSS", "SCSS", "CSS"],
    image: "/images/Skills/skill3.png",
    alt: "Web Development Skills"
  },
  {
    id: "slide4",
    title: "Concepts",
    items: ["GNN", "CNN", "U-Net", "NLP", "Preprocessing", "SEO-Optimization", "Responsive Design"],
    image: "/images/Skills/skill4.png",
    alt: "Concepts Skills"
  }
];

const combinedDescription = "My expertise spans programming languages (Python, JavaScript, Java, R), enabling versatile software development and data analysis. I leverage Machine Learning tools (TensorFlow, PyTorch, Pandas, NLTK, Keras, NumPy, Scikit-Learn) for predictive modeling and natural language processing. For Web Development, I utilize Next.js, React.js, Node.js, and modern CSS frameworks to build dynamic and responsive applications. My understanding of advanced concepts like GNN, CNN, NLP, preprocessing, and SEO optimization ensures I deliver cutting-edge, optimized solutions.";

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
          My Skillset
        </h2>
      </div>

      {/* Two-Column Layout */}
      <div className="max-w-[80rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skillset List */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-[0.7rem] sm:text-[1rem] xl:text-[1.5rem]"
        >
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
                  className="grid grid-cols-[1fr_auto] grid-rows-[auto_auto] gap-2 p-4 rounded-lg border-[2px] border-[#5e2a3a] transition-all duration-350 ease-in-out group hover:bg-[#9c8f75] cursor-pointer relative"
                  style={{
                    gridTemplateAreas: '"h4 control" "content content"',
                    backgroundImage: `linear-gradient(rgba(38, 25, 71, 0.7), rgba(99, 51, 156, 0.7)), url(${skill.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'lighten',
                    filter: 'opacity(0.8)'
                  }}
                >
                  <h4
                    className={`text-[1.5rem] font-raleway font-bold h-[1.27em] overflow-hidden transition-all duration-900 ease-in-out group-hover:h-[1.5em] drop-shadow-[0_8px_24px_rgba(255,255,255,0.5)] ${
                      skill.id === "slide1" || skill.id === "slide4" ? "text-[#3a1a24]" : "text-[#5e2a3a]"
                    }`}
                    style={{ gridArea: 'h4', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)', opacity: 1 }}
                  >
                    {skill.title}
                  </h4>
                  <span
                    className="control w-[1.5em] h-[1.5em] bg-[url('https://lidachk.github.io/cssBayan/cssBayan/assets/control.svg')] bg-no-repeat bg-center bg-contain opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:rotate-[450deg] group-hover:drop-shadow-[0_-0.2em_0.5em_#5ed8d8]"
                    style={{ gridArea: 'control', filter: 'invert(1%) sepia(42%) saturate(1672%) hue-rotate(167deg) brightness(101%) contrast(87%)' }}
                  ></span>
                  <div
                    className="slider mt-0 overflow-hidden h-0 transition-all duration-900 ease-in-out group-hover:h-[15rem] max-h-[15rem]"
                    style={{ gridArea: 'content' }}
                  >
                    <ul className="mt-4 text-[#3a1a24] font-lato text-[1rem] font-bold list-disc pl-6 drop-shadow-[0_2px_4px_rgba(94,58,42,0.3)] flex flex-col text-center h-full">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="mb-2" style={{ opacity: 1 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Paragraph Section with Cube Animation */}
        <div className="flex items-center justify-center relative overflow-hidden">
          <style>
            {`
              .cube-animation-container {
                perspective: 24rem;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #FFFFFF; /* White background */
                z-index: 0;
                overflow: hidden;
              }

              .cube-animation-container div {
                position: absolute;
                transform-style: preserve-3d;
              }

              .assembly {
                top: 50%;
                left: 50%;
                transform: rotateX(-45deg) rotateY(-45deg);
              }

              .comp-3d {
                animation: r 2s ease-in-out infinite;
              }

              .comp-3d--i {
                animation-name: ri;
              }

              .comp-3d--o {
                animation-name: ro;
              }

              @keyframes ri {
                0%, 20% { transform: rotateY(-0.5turn); }
                50% { transform: none; }
                100%, 80% { transform: rotateX(-0.5turn); }
              }

              @keyframes ro {
                0%, 35% { transform: rotate(-0.5turn); }
                65%, 100% { transform: none; }
              }

              .cube {
                position: relative;
              }

              .pos .cube {
                animation: m 2s ease-out infinite;
              }

              .cube__face {
                position: absolute;
                margin: -1rem;
                width: 2rem;
                height: 2rem;
                box-shadow: 0 0 1rem rgba(228, 147, 160, 0.3) inset; /* Lighter shade #E493A0 */
                backface-visibility: hidden;
                background: #C76A7E; /* Lighter shade of #A8415B */
                opacity: 0.4; /* Reduced opacity */
              }

              .cube__face:nth-child(2n) {
                background: #E493A0; /* Even lighter shade */
                opacity: 0.4; /* Reduced opacity */
              }

              .cube__face:nth-child(n + 5) {
                background: #A8415B; /* Original shade for top/bottom faces */
                opacity: 0.4; /* Reduced opacity */
              }

              .cube__face:nth-child(1) { transform: rotateY(0deg) translateZ(1rem); }
              .cube__face:nth-child(2) { transform: rotateY(90deg) translateZ(1rem); }
              .cube__face:nth-child(3) { transform: rotateY(180deg) translateZ(1rem); }
              .cube__face:nth-child(4) { transform: rotateY(270deg) translateZ(1rem); }
              .cube__face:nth-child(5) { transform: rotateX(90deg) translateZ(1rem); }
              .cube__face:nth-child(6) { transform: rotateX(-90deg) translateZ(1rem); }

              @keyframes m {
                0%, 5%, 95%, 100% { transform: none; }
                15% { transform: translate3d(0, 2rem, 0); }
                25% { transform: translate3d(0, 2rem, 2rem); }
                35%, 65% { transform: translate3d(2rem, 2rem, 2rem); }
                75% { transform: translate3d(2rem, 0, 2rem); }
                85% { transform: translate3d(2rem, 0, 0); }
              }

              /* Responsive adjustments */
              @media (max-width: 768px) {
                .cube__face {
                  margin: -0.75rem;
                  width: 1.5rem;
                  height: 1.5rem;
                }
                .cube__face:nth-child(1),
                .cube__face:nth-child(2),
                .cube__face:nth-child(3),
                .cube__face:nth-child(4),
                .cube__face:nth-child(5),
                .cube__face:nth-child(6) {
                  transform: translateZ(0.75rem) rotateY(calc(var(--i) * 90deg));
                }
                .cube__face:nth-child(5) { transform: rotateX(90deg) translateZ(0.75rem); }
                .cube__face:nth-child(6) { transform: rotateX(-90deg) translateZ(0.75rem); }
                @keyframes m {
                  0%, 5%, 95%, 100% { transform: none; }
                  15% { transform: translate3d(0, 1.5rem, 0); }
                  25% { transform: translate3d(0, 1.5rem, 1.5rem); }
                  35%, 65% { transform: translate3d(1.5rem, 1.5rem, 1.5rem); }
                  75% { transform: translate3d(1.5rem, 0, 1.5rem); }
                  85% { transform: translate3d(1.5rem, 0, 0); }
                }
              }

              @media (max-width: 480px) {
                .cube-animation-container {
                  perspective: 18rem;
                }
                .cube__face {
                  margin: -0.5rem;
                  width: 1rem;
                  height: 1rem;
                }
                .cube__face:nth-child(1),
                .cube__face:nth-child(2),
                .cube__face:nth-child(3),
                .cube__face:nth-child(4),
                .cube__face:nth-child(5),
                .cube__face:nth-child(6) {
                  transform: translateZ(0.5rem) rotateY(calc(var(--i) * 90deg));
                }
                .cube__face:nth-child(5) { transform: rotateX(90deg) translateZ(0.5rem); }
                .cube__face:nth-child(6) { transform: rotateX(-90deg) translateZ(0.5rem); }
                @keyframes m {
                  0%, 5%, 95%, 100% { transform: none; }
                  15% { transform: translate3d(0, 1rem, 0); }
                  25% { transform: translate3d(0, 1rem, 1rem); }
                  35%, 65% { transform: translate3d(1rem, 1rem, 1rem); }
                  75% { transform: translate3d(1rem, 0, 1rem); }
                  85% { transform: translate3d(1rem, 0, 0); }
                }
              }

              /* Dynamic cube positioning */
              ${(() => {
                const n_per_dim = 3;
                const n_dims = 3;
                const n_o = Math.pow(2, n_dims);
                const n_i = Math.pow(n_per_dim, n_dims) - n_o;
                const l = 2; // rem, reduced size
                const n = n_per_dim - 1;
                const nh = 0.5 * n;
                const dm = nh * l;
                let m = 1;
                let css = '';

                for (let i = 0; i < n_per_dim; i++) {
                  const i1 = i % n;
                  const i2 = Math.pow(-1, Math.floor(i / n));
                  const x = (i - nh) * l;

                  for (let j = 0; j < n_per_dim; j++) {
                    const j1 = j % n;
                    const j2 = Math.pow(-1, Math.floor(j / n));
                    const y = (j - nh) * l;

                    for (let k = 0; k < n_per_dim; k++) {
                      const k1 = k % n;
                      const k2 = Math.pow(-1, Math.floor(k / n));
                      const z = (k - nh) * l;

                      if (i1 + j1 + k1 > 0) {
                        css += `
                          .comp-3d--i > .cube:nth-child(${m}) {
                            transform: translate3d(${x}rem, ${y}rem, ${z}rem);
                          }
                        `;
                        m++;
                      } else {
                        const idx = 2 * i + j + 0.5 * k + 1;
                        css += `
                          .pos:nth-child(${idx}) {
                            transform: scale3d(${i2}, ${j2}, ${k2}) translate3d(${dm}rem, ${dm}rem, ${dm}rem);
                          }
                        `;
                      }
                    }
                  }
                }

                return css;
              })()}
            `}
          </style>
          <AnimatePresence mode="wait">
            <motion.div
              key="combined-paragraph"
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="p-5 rounded-lg shadow-lg text-[#222222] font-lato text-[1rem] sm:text-[1.2rem] xl:text-[1.2rem] max-w-[30rem] relative z-10"
            >
              <div className="cube-animation-container">
                <div className="assembly">
                  <div className="comp-3d comp-3d--i">
                    {Array.from({ length: Math.pow(3, 3) - Math.pow(2, 3) }).map((_, index) => (
                      <div className="cube" key={`inner-${index}`}>
                        {Array.from({ length: 6 }).map((_, faceIndex) => (
                          <div className="cube__face" key={`face-${index}-${faceIndex}`}></div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="comp-3d comp-3d--o">
                    {Array.from({ length: Math.pow(2, 3) }).map((_, index) => (
                      <div className="pos" key={`outer-${index}`}>
                        <div className="cube">
                          {Array.from({ length: 6 }).map((_, faceIndex) => (
                            <div className="cube__face" key={`face-${index}-${faceIndex}`}></div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="relative z-10" style={{ textShadow: '0 0 2px rgba(255, 255, 255, 0.8)' }}>{combinedDescription}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsetSection;