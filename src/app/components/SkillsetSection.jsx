'use client';

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    title: "Programming Languages",
    description: (
      <div className="grid grid-cols-2 gap-2">
        <ul className="list-none">
          <li>Python</li>
          <li>Java</li>
        </ul>
        <ul className="list-none">
          <li>Javascript</li>
          <li>R</li>
        </ul>
      </div>
    ),
    image: "/images/Skills/skill1.png",
  },
  {
    title: "Machine Learning",
    description: (
      <div className="grid grid-cols-2 gap-2">
        <ul className="list-none">
          <li>Tensorflow</li>
          <li>Pytorch</li>
          <li>Pandas</li>
          <li>NLTK</li>
        </ul>
        <ul className="list-none">
          <li>Keras</li>
          <li>NumPy</li>
          <li>Vader</li>
          <li>Scikit-Learn</li>
        </ul>
      </div>
    ),
    image: "/images/Skills/skill2.png",
  },
  {
    title: "Web Development",
    description: (
      <div className="grid grid-cols-2 gap-2">
        <ul className="list-none">
          <li>Next.JS</li>
          <li>React.JS</li>
          <li>HTML</li>
          <li>Node JS</li>
        </ul>
        <ul className="list-none">
          <li>SCSS</li>
          <li>CSS</li>
          <li>TailwindCSS</li>
        </ul>
      </div>
    ),
    image: "/images/Skills/skill3.png",
  },
  {
    title: "Concepts",
    description: (
      <div className="grid grid-cols-2 gap-2">
        <ul className="list-none">
          <li>SEO Optimization</li>
          <li>Responsive Design</li>
          <li>Preprocessing</li>
          <li>U-NET</li>
        </ul>
        <ul className="list-none">
          <li>CNN</li>
          <li>GNN</li>
          <li>NLP</li>
        </ul>
      </div>
    ),
    image: "",
  },
];

const SkillsetSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleInteraction = (index) => {
    setActiveIndex(index);
  };

  const gridTemplateColumns = skills
    .map((_, i) => (i === activeIndex ? "10fr" : "1fr"))
    .join(" ");

  return (
    <section id="skillset" className="relative bg-[#f6f0e6] px-4 xl}px-16 py-8 sm:py-16 py">
      {/* Headings */}
      <h1 className="font-raleway font-bold text-5xl text-[#5e2a3a] text-center">
        My SkillSet 
      </h1>
      {/* Main Content */}
      <motion.div
        className="mt-2 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        {/* Skills Grid */}
        <ul
          className="grid mt-2 grid-cols-1 md:grid-cols-[10fr_1fr_1fr_1fr] gap-2 max-w-[700px] w-full h-[clamp(400px,40dvh,474px)] md:h-[clamp(450px,50dvh,550px)] mx-auto transform md:transform-none rotate-[-90deg]"
          style={{ gridTemplateColumns, transition: " grid-template-columns 1s" }}
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className={`relative bg-[#f6f0e6] border-[2px] border-[#5e2a3a] rounded-lg overflow-hidden min-w-[80px] md:min-w0 ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleInteraction(index)}
              onPointerMove={() => handleInteraction(index)}
              onFocus={() => handleInteraction(index)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <article className="absolute inset-0 flex flex-col justify-end gap-4 p-4 md:p-[calc(80px*0.5-9px)] pb-4 h-full">
                <h4
                  className="font-raleway font-extrabold text-[1.1rem] text-[#5e2a3a] uppercase absolute top-[50%] md:top-4 translate-y-[-50%] md:translate-y-0 md:left-[calc(80px*0.25)] md:rotate-90 md:origin-left md:whitespace-nowrap rotate-[-90deg] left-4"
                  style={{ opacity: index === activeIndex ? 1 : 0.6, transition: "opacity 0.72s" }}
                >
                  {skill.title}
                </h4>
                {index === 0 && (
                  <div
                    className="cube"
                    style={{
                      transformStyle: "preserve-3d",
                      animation: "spin 6s infinite linear",
                      width: "6.25rem",
                      height: "6.25rem",
                      position: "absolute",
                      top: "20%",
                      left: "50%",
                      marginLeft: "-3.125rem",
                      zIndex: 10,
                      display: index === activeIndex ? "block" : "none",
                      transform: "scale(0.8) scale(0.6) md:scale(1)",
                    }}
                  >
                    <div
                      className="top"
                      style={{
                        width: "6.25rem",
                        height: "6.25rem",
                        border: "2px solid #5e2a3a",
                        backgroundColor: "transparent",
                        opacity: 0.6,
                        position: "absolute",
                        transform: "rotateX(90deg)",
                        marginTop: "-1.5625rem",
                      }}
                    ></div>
                    <div
                      className="right"
                      style={{
                        width: "6.25rem",
                        height: "6.25rem",
                        border: "2px solid #5e2a3a",
                        backgroundColor: "transparent",
                        opacity: 0.6,
                        position: "absolute",
                        transform: "rotateY(90deg)",
                        marginLeft: "1.5625rem",
                      }}
                    ></div>
                    <div
                      className="bottom"
                      style={{
                        width: "6.25rem",
                        height: "6.25rem",
                        border: "2px solid #5e2a3a",
                        backgroundColor: "transparent",
                        opacity: 0.6,
                        position: "absolute",
                        transform: "rotateX(-90deg)",
                        marginTop: "1.5625rem",
                      }}
                    ></div>
                    <div
                      className="left"
                      style={{
                        width: "6.25rem",
                        height: "6.25rem",
                        border: "2px solid #5e2a3a",
                        backgroundColor: "transparent",
                        opacity: 0.6,
                        position: "absolute",
                        transform: "rotateY(-90deg)",
                        marginLeft: "-1.5625rem",
                      }}
                    ></div>
                    <div
                      className="front"
                      style={{
                        width: "6.25rem",
                        height: "6.25rem",
                        border: "2px solid #5e2a3a",
                        backgroundColor: "transparent",
                        opacity: 0.6,
                        position: "absolute",
                        transform: "translateZ(1.5625rem)",
                      }}
                    ></div>
                    <div
                      className="back"
                      style={{
                        width: "6.25rem",
                        height: "6.25rem",
                        border: "2px solid #5e2a3a",
                        backgroundColor: "transparent",
                        opacity: 0.6,
                        position: "absolute",
                        transform: "translateZ(-1.5625rem) rotateX(180deg)",
                      }}
                    ></div>
                  </div>
                )}
                {index === 1 && (
                  <div
                    className="container"
                    style={{
                      position: "absolute",
                      top: "0%", // Moved to top of grid cell
                      marginTop: "1rem", // Equivalent to mt-4
                      left: "50%",
                      marginLeft: "-3.125rem",
                      display: index === activeIndex ? "flex" : "none",
                      transform: "scale(0.8) scale(0.6) md:scale(1)",
                      zIndex: 10,
                    }}
                  >
                    <div
                      className="scene"
                      style={{
                        width: "6.25rem",
                        height: "6.25rem",
                        transformStyle: "preserve-3d",
                        transform: "rotateX(-20deg) rotateY(20deg)",
                      }}
                    >
                      <div className="webpack-cube" style={{ transformStyle: "preserve-3d", animation: "hoverY 2s infinite alternate ease-in-out" }}>
                        <div className="outer-cube" style={{ width: "6.25rem", height: "6.25rem", transformStyle: "preserve-3d", animation: "flipY 5.2s infinite" }}>
                          <div className="face face-top" style={{ transform: "rotateX(90deg) translateZ(3.125rem)", border: "1px solid #5e2a3a", background: "rgba(94, 42, 58, 0.6)", animation: "border-top 5.2s infinite" }}></div>
                          <div className="face face-bottom" style={{ transform: "rotateX(-90deg) translateZ(3.125rem)", border: "1px solid #5e2a3a", background: "rgba(94, 42, 58, 0.6)" }}></div>
                          <div className="face face-left" style={{ transform: "rotateY(-90deg) translateZ(3.125rem)", border: "1px solid #5e2a3a", background: "rgba(94, 42, 58, 0.6)", animation: "border-left 5.2s infinite" }}></div>
                          <div className="face face-right" style={{ transform: "rotateY(90deg) translateZ(3.125rem)", border: "1px solid #5e2a3a", background: "rgba(94, 42, 58, 0.6)" }}></div>
                          <div className="face face-front" style={{ transform: "translateZ(3.125rem)", border: "1px solid #5e2a3a", background: "rgba(94, 42, 58, 0.6)", animation: "border-front 5.2s infinite" }}></div>
                          <div className="face face-back" style={{ transform: "rotateY(180deg) translateZ(3.125rem)", border: "1px solid #5e2a3a", background: "rgba(94, 42, 58, 0.6)", animation: "border-back 5.2s infinite" }}></div>
                        </div>
                        <div className="inner-cube" style={{ width: "6.25rem", height: "6.25rem", transformStyle: "preserve-3d", animation: "flipY-innerCube 5.2s infinite", top: "-2px" }}>
                          <div className="face face-top" style={{ transform: "rotateX(90deg) translateZ(3.125rem)", border: "2px solid #5e2a3a", background: "#5e2a3a" }}></div>
                          <div className="face face-bottom" style={{ transform: "rotateX(-90deg) translateZ(3.125rem)", border: "2px solid #5e2a3a", background: "#5e2a3a" }}></div>
                          <div className="face face-left" style={{ transform: "rotateY(-90deg) translateZ(3.125rem)", border: "2px solid #5e2a3a", background: "#5e2a3a" }}></div>
                          <div className="face face-right" style={{ transform: "rotateY(90deg) translateZ(3.125rem)", border: "2px solid #5e2a3a", background: "#5e2a3a" }}></div>
                          <div className="face face-front" style={{ transform: "translateZ(3.125rem)", border: "2px solid #5e2a3a", background: "#5e2a3a" }}></div>
                          <div className="face face-back" style={{ transform: "rotateY(180deg) translateZ(3.125rem)", border: "2px solid #5e2a3a", background: "#5e2a3a" }}></div>
                        </div>
                      </div>
                      <div className="shadows-outer-container" style={{ width: "6.25rem", height: "6.25rem", transform: "translateX(-50%) rotateX(-90deg) translateZ(3.4375rem)", animation: "flipY-outterShadow 5.2s infinite" }}>
                        <div className="shadow-outer" style={{ width: "6.25rem", height: "6.25rem", backgroundColor: "rgba(94, 42, 58, 0.7)", animation: "scaleBigShadow 2s infinite alternate ease-in-out", boxShadow: "0px 0px 50px 40px rgba(94, 42, 58, 0.7)", transform: "scale3d(0.8, 0.8, 0.8)" }}></div>
                      </div>
                      <div className="shadows-inner-container" style={{ width: "6.25rem", height: "6.25rem", transform: "translateX(-50%) rotateX(-90deg) translateZ(0px) rotateZ(0deg)", animation: "flipY-innerShadow 5.2s infinite" }}>
                        <div className="shadow-inner" style={{ width: "6.25rem", height: "6.25rem", borderRadius: "15px", background: "radial-gradient(circle, rgba(94, 42, 58, 0.8) 10%, rgba(94, 42, 58, 0.4) 50%, rgba(0, 0, 0, 0) 70%)", animation: "scaleSmallShadow 2s infinite alternate ease-in-out", transform: "scale3d(0.4, 0.4, 0.4)" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div
                    className="assembly"
                    style={{
                      position: "absolute",
                      top: "30%",
                      left: "50%",
                      marginLeft: "-2.5rem",
                      width: "5rem",
                      height: "5rem",
                      transformStyle: "preserve-3d",
                      transform: "rotateX(-45deg) rotateY(-45deg) scale(0.8) scale(0.6) md:scale(1)",
                      zIndex: 10,
                      display: index === activeIndex ? "block" : "none",
                    }}
                  >
                    <div className="comp-3d comp-3d--i">
                      {[...Array(19)].map((_, i) => (
                        <div key={`inner-${i}`} className="cube">
                          {[...Array(6)].map((_, f) => (
                            <div key={`face-${f}`} className="cube__face"></div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="comp-3d comp-3d--o">
                      {[...Array(8)].map((_, i) => (
                        <div key={`outer-${i}`} className="pos">
                          <div className="cube">
                            {[...Array(6)].map((_, f) => (
                              <div key={`face-${f}`} className="cube__face"></div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {index === 3 && (
                  <div
                    className="loader"
                    style={{
                      position: "absolute",
                      top: "20%",
                      left: "50%",
                      marginLeft: "-2.5rem",
                      width: "5rem",
                      height: "5rem",
                      color: "#5e2a3a",
                      background: "repeating-conic-gradient(from -47deg, transparent 0deg, #5e2a3a 1deg 91deg, transparent 94deg 180deg)",
                      opacity: 0.3,
                      display: index === activeIndex ? "flex" : "none",
                      animation: "l12-0 2s infinite linear",
                      transformStyle: "preserve-3d",
                      transform: "scale(0.8) scale(0.6) md:scale(1)",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        background: "#5e2a3a",
                        clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                        animation: "l12 1s infinite alternate",
                        transformOrigin: "bottom left",
                        opacity: 0.5,
                      }}
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        background: "#5e2a3a",
                        clipPath: "polygon(100% 0, 100% 100%, 0 50%)",
                        animation: "l12 1s infinite alternate",
                        transformOrigin: "top right",
                        opacity: 0.5,
                      }}
                    ></div>
                  </div>
                )}
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    filter: index === activeIndex ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(2)",
                    transform: index === activeIndex ? "scale(1)" : "scale(1.1)",
                    transition: "filter 0.72s 0.15s, transform 0.72s 0.15s",
                    mask: "radial-gradient(100% 100% at 100% 0, #fff, #0000)",
                  }}
                />
                <div
                  className="font-lato font-extrabold text-[1.1rem] text-[#222222] leading-tight pl-4 md:pl-6 transform md:transform-none rotate-[90deg] translate-x-[-1rem] md:translate-x-0"
                  style={{ opacity: index === activeIndex ? 0.8 : 0, transition: "opacity 0.72s 0.15s" }}
                >
                  {skill.description}
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Inline CSS for Cube Animations */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotateX(-20deg) rotateY(20deg);
          }
          100% {
            transform: rotateX(-20deg) rotateY(380deg);
          }
        }
        @keyframes flipY {
          0% { transform: translateX(-50%) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          20.25% { transform: translateX(-50%) scale3d(1,1,1) rotateX(0deg) rotateY(90deg) rotateZ(0deg); }
          100% { transform: translateX(-50%) scale3d(1,1,1) rotateX(0deg) rotateY(90deg) rotateZ(0deg); }
        }
        @keyframes flipY-innerCube {
          0% { transform: translateX(-50%) scale3d(0.5,0.5,0.5) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          20.25% { transform: translateX(-50%) scale3d(0.5,0.5,0.5) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); }
          100% { transform: translateX(-50%) scale3d(0.5,0.5,0.5) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); }
        }
        @keyframes flipY-innerShadow {
          0% { transform: translateX(-50%) rotateX(-90deg) translateZ(-20px) rotateZ(0deg); }
          20.25% { transform: translateX(-50%) rotateX(-90deg) translateZ(-20px) rotateZ(-90deg); }
          100% { transform: translateX(-50%) rotateX(-90deg) translateZ(-20px) rotateZ(-90deg); }
        }
        @keyframes flipY-outterShadow {
          0% { transform: translateX(-50%) rotateX(-90deg) translateZ(3.4375rem) rotateZ(0deg); }
          20.25% { transform: translateX(-50%) rotateX(-90deg) translateZ(3.4375rem) rotateZ(90deg); }
          100% { transform: translateX(-50%) rotateX(-90deg) translateZ(3.4375rem) rotateZ(90deg); }
        }
        @keyframes border-front {
          0% { border-width: 1px 6px 6px 1px; }
          2.25% { border-width: 1px 6px 6px 1px; }
          5.75% { border-width: 1px 1px 1px 1px; }
          100% { border-width: 1px 1px 1px 1px; }
        }
        @keyframes border-back {
          0% { border-width: 1px 1px 1px 1px; }
          2.25% { border-width: 1px 1px 1px 1px; }
          5.75% { border-width: 1px 1px 6px 6px; }
          100% { border-width: 1px 1px 6px 6px; }
        }
        @keyframes border-top {
          0% { border-width: 6px 6px 1px 1px; }
          2.25% { border-width: 6px 6px 1px 1px; }
          5.75% { border-width: 1px 6px 6px 1px; }
          100% { border-width: 1px 6px 6px 1px; }
        }
        @keyframes border-left {
          0% { border-width: 1px 1px 6px 6px; }
          2.25% { border-width: 1px 1px 6px 6px; }
          5.75% { border-width: 1px 6px 6px 1px; }
          100% { border-width: 1px 6px 6px 1px; }
        }
        @keyframes hoverY {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-30px); }
        }
        @keyframes scaleBigShadow {
          0% { transform: scale3d(0.65, 0.65, 0.65); }
          100% { transform: scale3d(0.60, 0.60, 0.60); }
        }
        @keyframes scaleSmallShadow {
          0% { transform: scale3d(0.45, 0.45, 0.45); }
          100% { transform: scale3d(0.37, 0.37, 0.37); }
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .scene {
          position: relative;
          transform-style: preserve-3d;
        }
        .webpack-cube {
          transform-style: preserve-3d;
          animation: hoverY 2s infinite alternate ease-in-out;
          opacity: 0.4;
        }
        .outer-cube {
          position: relative;
          left: 0;
          top: 0;
          transform-style: preserve-3d;
          display: inline-block;
        }
        .outer-cube .face {
          position: absolute;
          width: 100%;
          height: 100%;
          text-align: center;
        }
        .inner-cube {
          display: inline-block;
          position: absolute;
          left: 0;
          transform-style: preserve-3d;
        }
        .inner-cube .face {
          position: absolute;
          width: 100%;
          height: 100%;
          text-align: center;
        }
        .shadows-outer-container {
          display: inline-block;
          transform-style: preserve-3d;
        }
        .shadow-outer {
          display: inline-block;
          position: absolute;
          transform-origin: center center;
        }
        .shadows-inner-container {
          display: inline-block;
          transform-style: preserve-3d;
        }
        .shadow-inner {
          display: inline-block;
          position: absolute;
          transform-origin: center center;
        }
        @keyframes l12-0 {
          0%, 49.9% {
            transform: scaleX(1);
          }
          50%, 100% {
            transform: scaleX(-1);
          }
        }
        @keyframes l12 {
          0%, 20% {
            transform: rotate(0deg);
          }
          80%, 100% {
            transform: rotate(-270deg);
          }
        }
        @keyframes ri {
          0%, 20% {
            transform: rotateY(-0.5turn);
          }
          50% {
            transform: none;
          }
          100%, 80% {
            transform: rotateX(-0.5turn);
          }
        }
        @keyframes ro {
          0%, 35% {
            transform: rotate(-0.5turn);
          }
          65%, 100% {
            transform: none;
          }
        }
        @keyframes m {
          0%, 5%, 95%, 100% {
            transform: none;
          }
          15% {
            transform: translate3d(0, 2rem, 0);
          }
          25% {
            transform: translate3d(0, 2rem, 2rem);
          }
          35%, 65% {
            transform: translate3d(2rem, 2rem, 2rem);
          }
          75% {
            transform: translate3d(2rem, 0, 2rem);
          }
          85% {
            transform: translate3d(2rem, 0, 0);
          }
        }
        .cube {
          transform-style: preserve-3d;
          position: absolute;
        }
        .assembly {
          position: absolute;
          transform-style: preserve-3d;
        }
        .comp-3d {
          position: absolute;
          transform-style: preserve-3d;
          animation: ease-in-out 6s infinite;
        }
        .comp-3d--i {
          animation-name: ri;
        }
        .comp-3d--o {
          animation-name: ro;
        }
        .pos .cube {
          animation: m 6s ease-out infinite;
        }
        .cube__face {
          position: absolute;
          width: 2rem;
          height: 2rem;
          margin: -1rem;
          border: 1px solid #5e2a3a;
          background: transparent;
          opacity: 0.3;
          box-shadow: inset 0 0 1rem rgba(94, 42, 58, 0.2);
          backface-visibility: hidden;
        }
        .cube__face:nth-child(2n) {
          filter: brightness(0.97);
        }
        .cube__face:nth-child(n + 5) {
          filter: brightness(0.97);
        }
        .cube__face:nth-child(1) {
          transform: rotateY(0deg) translateZ(1rem);
        }
        .cube__face:nth-child(2) {
          transform: rotateY(90deg) translateZ(1rem);
        }
        .cube__face:nth-child(3) {
          transform: rotateY(180deg) translateZ(1rem);
        }
        .cube__face:nth-child(4) {
          transform: rotateY(270deg) translateZ(1rem);
        }
        .cube__face:nth-child(5) {
          transform: rotateX(90deg) translateZ(1rem);
        }
        .cube__face:nth-child(6) {
          transform: rotateX(-90deg) translateZ(1rem);
        }
        .comp-3d--i .cube:nth-child(1) { transform: translate3d(-2rem, -2rem, 0); }
        .comp-3d--i .cube:nth-child(2) { transform: translate3d(-2rem, 0, -2rem); }
        .comp-3d--i .cube:nth-child(3) { transform: translate3d(-2rem, 0, 0); }
        .comp-3d--i .cube:nth-child(4) { transform: translate3d(-2rem, 0, 2rem); }
        .comp-3d--i .cube:nth-child(5) { transform: translate3d(-2rem, 2rem, 0); }
        .comp-3d--i .cube:nth-child(6) { transform: translate3d(0, -2rem, -2rem); }
        .comp-3d--i .cube:nth-child(7) { transform: translate3d(0, -2rem, 0); }
        .comp-3d--i .cube:nth-child(8) { transform: translate3d(0, -2rem, 2rem); }
        .comp-3d--i .cube:nth-child(9) { transform: translate3d(0, 0, -2rem); }
        .comp-3d--i .cube:nth-child(10) { transform: translate3d(0, 0, 0); }
        .comp-3d--i .cube:nth-child(11) { transform: translate3d(0, 0, 2rem); }
        .comp-3d--i .cube:nth-child(12) { transform: translate3d(0, 2rem, -2rem); }
        .comp-3d--i .cube:nth-child(13) { transform: translate3d(0, 2rem, 0); }
        .comp-3d--i .cube:nth-child(14) { transform: translate3d(0, 2rem, 2rem); }
        .comp-3d--i .cube:nth-child(15) { transform: translate3d(2rem, -2rem, 0); }
        .comp-3d--i .cube:nth-child(16) { transform: translate3d(2rem, 0, -2rem); }
        .comp-3d--i .cube:nth-child(17) { transform: translate3d(2rem, 0, 0); }
        .comp-3d--i .cube:nth-child(18) { transform: translate3d(2rem, 0, 2rem); }
        .comp-3d--i .cube:nth-child(19) { transform: translate3d(2rem, 2rem, 0); }
        .comp-3d--o .pos:nth-child(1) {
          transform: scale3d(-1, -1, -1) translate3d(2rem, 2rem, 2rem);
        }
        .comp-3d--o .pos:nth-child(2) {
          transform: scale3d(-1, -1, 1) translate3d(2rem, 2rem, 2rem);
        }
        .comp-3d--o .pos:nth-child(3) {
          transform: scale3d(-1, 1, -1) translate3d(2rem, 2rem, 2rem);
        }
        .comp-3d--o .pos:nth-child(4) {
          transform: scale3d(-1, 1, 1) translate3d(2rem, 2rem, 2rem);
        }
        .comp-3d--o .pos:nth-child(5) {
          transform: scale3d(1, -1, -1) translate3d(2rem, 2rem, 2rem);
        }
        .comp-3d--o .pos:nth-child(6) {
          transform: scale3d(1, -1, 1) translate3d(2rem, 2rem, 2rem);
        }
        .comp-3d--o .pos:nth-child(7) {
          transform: scale3d(1, 1, -1) translate3d(2rem, 2rem, 2rem);
        }
        .comp-3d--o .pos:nth-child(8) {
          transform: scale3d(1, 1, 1) translate3d(2rem, 2rem, 2rem);
        }
      `}</style>
    </section>
  );
};

export default SkillsetSection;