'use client';

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    title: "Programming Languages",
    description: (
      <div className="grid grid-cols-2 gap-0.5rem">
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
      <div className="grid grid-cols-2 gap-0.5rem">
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
      <div className="grid grid-cols-2 gap-0.5rem">
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
      <div className="grid grid-cols-2 gap-0.5rem">
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
    image: "/images/Skills/skill4.png",
  },
];

const SkillsetSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleInteraction = (index) => {
    setActiveIndex(index);
  };

  const gridTemplateColumns = skills
    .map((_, i) => (i === activeIndex ? "3fr" : "1fr"))
    .join(" ");

  return (
    <section id="skillset" className="relative bg-[#f6f0e6] px-[2vw] sm:px-[4vw] lg:px-[8vw] py-[4vh] sm:py-[6vh]">
      {/* Headings */}
      <h1 className="font-raleway font-bold text-[clamp(2rem,5vw,2.5rem)] sm:text-[clamp(2.5rem,5vw,3rem)] lg:text-[clamp(3rem,5vw,3.5rem)] text-[#5e2a3a] text-center mb-[2vh] sm:mb-[3vh]">
        My SkillSet
      </h1>
      {/* Main Content */}
      <motion.div
        className="mt-[1vh] flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        {/* Skills Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.5rem] max-w-[92vw] sm:max-w-[80vw] lg:max-w-[70vw] w-full h-auto sm:h-[50vh] lg:h-[55vh] mx-auto"
          style={{ gridTemplateColumns }}
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className={`relative bg-[#f6f0e6] border-[0.125rem] border-[#5e2a3a] rounded-lg overflow-hidden ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleInteraction(index)}
              onPointerMove={() => handleInteraction(index)}
              onFocus={() => handleInteraction(index)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <article className="relative flex flex-col justify-between gap-[1rem] p-[1rem] h-full min-h-[30vh] sm:min-h-[40vh] lg:min-h-[50vh]">
                <h4
                  className="font-raleway font-extrabold text-[clamp(1rem,3vw,1.25rem)] sm:text-[clamp(1.25rem,3vw,1.5rem)] text-[#5e2a3a] uppercase text-center"
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
                      width: "5rem",
                      height: "5rem",
                      position: "absolute",
                      top: "20%",
                      left: "50%",
                      transform: "translateX(-50%) scale(0.8) sm:scale(1)",
                      zIndex: 10,
                      display: index === activeIndex ? "block" : "none",
                    }}
                  >
                    <div
                      className="top"
                      style={{
                        width: "5rem",
                        height: "5rem",
                        border: "0.125rem solid #5e2a3a",
                        backgroundColor: "transparent",
                        opacity: 0.6,
                        position: "absolute",
                        transform: "rotateX(90deg)",
                        marginTop: "-2.5rem",
                      }}
                    ></div>
                    <div
                      className="right"
                      style={{
                        width: "5rem",
                        height: "5rem",
                        border: "0.125rem solid #5e2a3a",
                        backgroundColor: "transparent",
                        opacity: 0.6,
                        position: "absolute",
                        transform: "rotateY(90deg)",
                        marginLeft: "2.5rem",
                      }}
                    ></div>
                    <div
                      className="bottom"
                      style={{
                        width: "5rem",
                        height: "5rem",
                        border: "0.125rem solid #5e2a3a",
                        backgroundColor: "transparent",
                        opacity: 0.6,
                        position: "absolute",
                        transform: "rotateX(-90deg)",
                        marginTop: "2.5rem",
                      }}
                    ></div>
                    <div
                      className="left"
                      style={{
                        width: "5rem",
                        height: "5rem",
                        border: "0.125rem solid #5e2a3a",
                        backgroundColor: "transparent",
                        opacity: 0.6,
                        position: "absolute",
                        transform: "rotateY(-90deg)",
                        marginLeft: "-2.5rem",
                      }}
                    ></div>
                    <div
                      className="front"
                      style={{
                        width: "5rem",
                        height: "5rem",
                        border: "0.125rem solid #5e2a3a",
                        backgroundColor: "transparent",
                        opacity: 0.6,
                        position: "absolute",
                        transform: "translateZ(2.5rem)",
                      }}
                    ></div>
                    <div
                      className="back"
                      style={{
                        width: "5rem",
                        height: "5rem",
                        border: "0.125rem solid #5e2a3a",
                        backgroundColor: "transparent",
                        opacity: 0.6,
                        position: "absolute",
                        transform: "translateZ(-2.5rem) rotateX(180deg)",
                      }}
                    ></div>
                  </div>
                )}
                {index === 1 && (
                  <div
                    className="container"
                    style={{
                      display: index === activeIndex ? "flex" : "none",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      top: "20%",
                      left: "50%",
                      transform: "translateX(-50%) scale(0.8) sm:scale(1)",
                      zIndex: 10,
                    }}
                  >
                    <div className="scene">
                      <div className="webpack-cube">
                        <div className="outer-cube">
                          <div className="face face-top"></div>
                          <div className="face face-bottom"></div>
                          <div className="face face-left"></div>
                          <div className="face face-right"></div>
                          <div className="face face-front"></div>
                          <div className="face face-back"></div>
                        </div>
                        <div className="inner-cube">
                          <div className="face face-top"></div>
                          <div className="face face-bottom"></div>
                          <div className="face face-left"></div>
                          <div className="face face-right"></div>
                          <div className="face face-front"></div>
                          <div className="face face-back"></div>
                        </div>
                      </div>
                      <div className="shadows-outer-container">
                        <div className="shadow-outer"></div>
                      </div>
                      <div className="shadows-inner-container">
                        <div className="shadow-inner"></div>
                      </div>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div
                    className="assembly"
                    style={{
                      position: "absolute",
                      top: "20%",
                      left: "50%",
                      transform: "translateX(-50%) rotateX(-45deg) rotateY(-45deg) scale(0.8) sm:scale(1)",
                      width: "4rem",
                      height: "4rem",
                      transformStyle: "preserve-3d",
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
                      transform: "translateX(-50%) scale(0.8) sm:scale(1)",
                      width: "4rem",
                      height: "4rem",
                      color: "#5e2a3a",
                      background: "repeating-conic-gradient(from -47deg, transparent 0deg, #5e2a3a 1deg 91deg, transparent 94deg 180deg)",
                      opacity: 0.3,
                      display: index === activeIndex ? "flex" : "none",
                      animation: "l12-0 2s infinite linear",
                      transformStyle: "preserve-3d",
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
                  className="font-lato font-extrabold text-[clamp(0.75rem,2vw,0.875rem)] sm:text-[clamp(0.875rem,2vw,1rem)] text-[#222222] leading-tight text-center"
                  style={{ opacity: index === activeIndex ? 0.8 : 0, transition: "opacity 0.72s 0.15s" }}
                >
                  {skill.description}
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Inline CSS for Animations */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotateX(-20deg) rotateY(20deg);
          }
          100% {
            transform: rotateX(-20deg) rotateY(380deg);
          }
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
        @keyframes flipY {
          0% { transform: translateX(0) scale3d(1,1,1) rotatex(0deg) rotatey(0deg) rotatez(0deg); }
          20.25% { transform: translateX(0) scale3d(1,1,1) rotatex(0deg) rotatey(90deg) rotatez(0deg); }
          100% { transform: translateX(0) scale3d(1,1,1) rotatex(0deg) rotatey(90deg) rotatez(0deg); }
        }
        @keyframes flipY-innerCube {
          0% { transform: translateX(0) scale3d(0.5,0.5,0.5) rotatex(0deg) rotatey(0deg) rotatez(0deg); }
          20.25% { transform: translateX(0) scale3d(0.5,0.5,0.5) rotatex(0deg) rotatey(-90deg) rotatez(0deg); }
          100% { transform: translateX(0) scale3d(0.5,0.5,0.5) rotatex(0deg) rotatey(-90deg) rotatez(0deg); }
        }
        @keyframes flipY-innerShadow {
          0% { transform: translatex(0) rotatex(-90deg) translatez(-1.25rem) rotatez(0deg); }
          20.25% { transform: translatex(0) rotatex(-90deg) translatez(-1.25rem) rotatez(-90deg); }
          100% { transform: translatex(0) rotatex(-90deg) translatez(-1.25rem) rotatez(-90deg); }
        }
        @keyframes flipY-outterShadow {
          0% { transform: translatex(0) rotatex(-90deg) translatez(6.5625rem) rotatez(0deg); }
          20.25% { transform: translatex(0) rotatex(-90deg) translatez(6.5625rem) rotatez(90deg); }
          100% { transform: translatex(0) rotatex(-90deg) translatez(6.5625rem) rotatez(90deg); }
        }
        @keyframes border-front {
          0% { border-width: 0.0625rem 0.375rem 0.375rem 0.0625rem; }
          2.25% { border-width: 0.0625rem 0.375rem 0.375rem 0.0625rem; }
          5.75% { border-width: 0.0625rem 0.0625rem 0.0625rem 0.0625rem; }
          100% { border-width: 0.0625rem 0.0625rem 0.0625rem 0.0625rem; }
        }
        @keyframes border-back {
          0% { border-width: 0.0625rem 0.0625rem 0.0625rem 0.0625rem; }
          2.25% { border-width: 0.0625rem 0.0625rem 0.0625rem 0.0625rem; }
          5.75% { border-width: 0.0625rem 0.0625rem 0.375rem 0.375rem; }
          100% { border-width: 0.0625rem 0.0625rem 0.375rem 0.375rem; }
        }
        @keyframes border-top {
          0% { border-width: 0.375rem 0.375rem 0.0625rem 0.0625rem; }
          2.25% { border-width: 0.375rem 0.375rem 0.0625rem 0.0625rem; }
          5.75% { border-width: 0.0625rem 0.375rem 0.375rem 0.0625rem; }
          100% { border-width: 0.0625rem 0.375rem 0.375rem 0.0625rem; }
        }
        @keyframes border-left {
          0% { border-width: 0.0625rem 0.0625rem 0.375rem 0.375rem; }
          2.25% { border-width: 0.0625rem 0.0625rem 0.375rem 0.375rem; }
          5.75% { border-width: 0.0625rem 0.375rem 0.375rem 0.0625rem; }
          100% { border-width: 0.0625rem 0.375rem 0.375rem 0.0625rem; }
        }
        @keyframes hoverY {
          0% { transform: translatey(0); }
          100% { transform: translatey(-1.875rem); }
        }
        @keyframes scaleBigShadow {
          0% { transform: scale3d(0.65, 0.65, 0.65); }
          100% { transform: scale3d(0.60, 0.60, 0.60); }
        }
        @keyframes scaleSmallShadow {
          0% { transform: scale3d(0.45, 0.45, 0.45); }
          100% { transform: scale3d(0.37, 0.37, 0.37); }
        }
        .cube {
          transform-style: preserve-3d;
          position: absolute;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .scene {
          position: relative;
          width: 5rem;
          height: 5rem;
          margin-top: 0;
          transform-style: preserve-3d;
          transform: rotatex(-20deg) rotatey(20deg);
        }
        .webpack-cube {
          transform-style: preserve-3d;
          animation: hoverY 2s infinite alternate;
          animation-timing-function: ease-in-out;
        }
        .outer-cube {
          position: absolute;
          width: 5rem;
          height: 5rem;
          left: 0;
          top: 0;
          transform-style: preserve-3d;
          animation: flipY 5.2s infinite;
          display: inline-block;
        }
        .outer-cube .face {
          position: absolute;
          width: 100%;
          height: 100%;
          text-align: center;
          background: rgba(94, 42, 58, 0.2);
          line-height: 5rem;
          border: 0.0625rem solid #5e2a3a;
        }
        .outer-cube .face-front {
          transform: translatez(2.5rem);
          border-right-width: 0.375rem;
          border-bottom-width: 0.375rem;
          animation: border-front 5.2s infinite;
        }
        .outer-cube .face-back {
          transform: rotateY(180deg) translatez(2.5rem);
          animation: border-back 5.2s infinite;
        }
        .outer-cube .face-top {
          transform: rotatex(90deg) translatez(2.5rem);
          border-top-width: 0.375rem;
          border-right-width: 0.375rem;
          animation: border-top 5.2s infinite;
        }
        .outer-cube .face-bottom {
          transform: rotatex(-90deg) translatez(2.5rem);
        }
        .outer-cube .face-left {
          transform: rotateY(-90deg) translatez(2.5rem);
          border-left-width: 0.375rem;
          border-bottom-width: 0.375rem;
          animation: border-left 5.2s infinite;
        }
        .outer-cube .face-right {
          transform: rotateY(90deg) translatez(2.5rem);
        }
        .inner-cube {
          display: inline-block;
          position: absolute;
          width: 5rem;
          height: 5rem;
          left: 0;
          top: -0.125rem;
          transform-style: preserve-3d;
          animation: flipY-innerCube 5.2s infinite;
        }
        .inner-cube .face {
          position: absolute;
          width: 100%;
          height: 100%;
          text-align: center;
          background: rgba(94, 42, 58, 0.4);
          line-height: 5rem;
          border: 0.125rem solid #5e2a3a;
        }
        .inner-cube .face-front {
          transform: translatez(2.5rem);
        }
        .inner-cube .face-back {
          transform: rotateY(180deg) translatez(2.5rem);
        }
        .inner-cube .face-top {
          transform: rotatex(90deg) translatez(2.5rem);
        }
        .inner-cube .face-bottom {
          transform: rotatex(-90deg) translatez(2.5rem);
        }
        .inner-cube .face-left {
          transform: rotateY(-90deg) translatez(2.5rem);
        }
        .inner-cube .face-right {
          transform: rotateY(90deg) translatez(2.5rem);
        }
        .shadows-outer-container {
          display: inline-block;
          transform-style: preserve-3d;
          width: 5rem;
          height: 5rem;
          transform: translatex(0) rotatex(-90deg) translatez(5.5rem);
          animation: flipY-outterShadow 5.2s infinite;
        }
        .shadow-outer {
          display: inline-block;
          position: absolute;
          width: 5rem;
          height: 5rem;
          background-color: rgba(255, 255, 255, 0.4);
          animation: scaleBigShadow 2s infinite alternate;
          animation-timing-function: ease-in-out;
          box-shadow: 0 0 2.8125rem 2.1875rem rgba(255, 255, 255, 0.4);
          transform-origin: center center;
          transform: scale3d(0.8, 0.8, 0.8);
        }
        .shadows-inner-container {
          display: inline-block;
          transform-style: preserve-3d;
          width: 5rem;
          height: 5rem;
          transform: translatex(0) rotatex(-90deg) translatez(0) rotatez(0deg);
          animation: flipY-innerShadow 5.2s infinite;
        }
        .shadow-inner {
          display: inline-block;
          position: absolute;
          width: 5rem;
          height: 5rem;
          border-radius: 0.9375rem;
          background:  
            linear-gradient(0deg, rgba(0,0,0,0) 10%, rgba(109,109,109,0.5) 50%, rgba(0,0,0,0)),
            linear-gradient(90deg, rgba(0,0,0,0) 10%, rgba(109,109,109,0.5) 50%, rgba(0,0,0,0)),
            linear-gradient(180deg, rgba(0,0,0,0) 10%, rgba(109,109,109,0.5) 50%, rgba(0,0,0,0)),
            linear-gradient(270deg, rgba(0,0,0,0) 10%, rgba(109,109,109,0.5) 50%, rgba(0,0,0,0));
          animation: scaleSmallShadow 2s infinite alternate;
          animation-timing-function: ease-in-out;
          transform-origin: center center;
          transform: scale3d(0.4, 0.4, 0.4);
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
          width: 1.5rem;
          height: 1.5rem;
          margin: -0.75rem;
          border: 0.0625rem solid #5e2a3a;
          background: transparent;
          opacity: 0.3;
          box-shadow: inset 0 0 0.625rem rgba(94, 42, 58, 0.2);
          backface-visibility: hidden;
        }
        .cube__face:nth-child(2n) {
          filter: brightness(0.97);
        }
        .cube__face:nth-child(n + 5) {
          filter: brightness(0.97);
        }
        .cube__face:nth-child(1) {
          transform: rotateY(0deg) translateZ(0.75rem);
        }
        .cube__face:nth-child(2) {
          transform: rotateY(90deg) translateZ(0.75rem);
        }
        .cube__face:nth-child(3) {
          transform: rotateY(180deg) translateZ(0.75rem);
        }
        .cube__face:nth-child(4) {
          transform: rotateY(270deg) translateZ(0.75rem);
        }
        .cube__face:nth-child(5) {
          transform: rotateX(90deg) translateZ(0.75rem);
        }
        .cube__face:nth-child(6) {
          transform: rotateX(-90deg) translateZ(0.75rem);
        }
        .comp-3d--i .cube:nth-child(1) { transform: translate3d(-1.5rem, -1.5rem, 0); }
        .comp-3d--i .cube:nth-child(2) { transform: translate3d(-1.5rem, 0, -1.5rem); }
        .comp-3d--i .cube:nth-child(3) { transform: translate3d(-1.5rem, 0, 0); }
        .comp-3d--i .cube:nth-child(4) { transform: translate3d(-1.5rem, 0, 1.5rem); }
        .comp-3d--i .cube:nth-child(5) { transform: translate3d(-1.5rem, 1.5rem, 0); }
        .comp-3d--i .cube:nth-child(6) { transform: translate3d(0, -1.5rem, -1.5rem); }
        .comp-3d--i .cube:nth-child(7) { transform: translate3d(0, -1.5rem, 0); }
        .comp-3d--i .cube:nth-child(8) { transform: translate3d(0, -1.5rem, 1.5rem); }
        .comp-3d--i .cube:nth-child(9) { transform: translate3d(0, 0, -1.5rem); }
        .comp-3d--i .cube:nth-child(10) { transform: translate3d(0, 0, 0); }
        .comp-3d--i .cube:nth-child(11) { transform: translate3d(0, 0, 1.5rem); }
        .comp-3d--i .cube:nth-child(12) { transform: translate3d(0, 1.5rem, -1.5rem); }
        .comp-3d--i .cube:nth-child(13) { transform: translate3d(0, 1.5rem, 0); }
        .comp-3d--i .cube:nth-child(14) { transform: translate3d(0, 1.5rem, 1.5rem); }
        .comp-3d--i .cube:nth-child(15) { transform: translate3d(1.5rem, -1.5rem, 0); }
        .comp-3d--i .cube:nth-child(16) { transform: translate3d(1.5rem, 0, -1.5rem); }
        .comp-3d--i .cube:nth-child(17) { transform: translate3d(1.5rem, 0, 0); }
        .comp-3d--i .cube:nth-child(18) { transform: translate3d(1.5rem, 0, 1.5rem); }
        .comp-3d--i .cube:nth-child(19) { transform: translate3d(1.5rem, 1.5rem, 0); }
        .comp-3d--o .pos:nth-child(1) {
          transform: scale3d(-1, -1, -1) translate3d(1.5rem, 1.5rem, 1.5rem);
        }
        .comp-3d--o .pos:nth-child(2) {
          transform: scale3d(-1, -1, 1) translate3d(1.5rem, 1.5rem, 1.5rem);
        }
        .comp-3d--o .pos:nth-child(3) {
          transform: scale3d(-1, 1, -1) translate3d(1.5rem, 1.5rem, 1.5rem);
        }
        .comp-3d--o .pos:nth-child(4) {
          transform: scale3d(-1, 1, 1) translate3d(1.5rem, 1.5rem, 1.5rem);
        }
        .comp-3d--o .pos:nth-child(5) {
          transform: scale3d(1, -1, -1) translate3d(1.5rem, 1.5rem, 1.5rem);
        }
        .comp-3d--o .pos:nth-child(6) {
          transform: scale3d(1, -1, 1) translate3d(1.5rem, 1.5rem, 1.5rem);
        }
        .comp-3d--o .pos:nth-child(7) {
          transform: scale3d(1, 1, -1) translate3d(1.5rem, 1.5rem, 1.5rem);
        }
        .comp-3d--o .pos:nth-child(8) {
          transform: scale3d(1, 1, 1) translate3d(1.5rem, 1.5rem, 1.5rem);
        }
      `}</style>
    </section>
  );
};

export default SkillsetSection;