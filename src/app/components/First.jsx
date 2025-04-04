'use client' //For type animation

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";





const First = () => {
    return (
        <section >
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <div className="col-span-7 place-self-center text-center sm:text-left">

                        {/* Main heading */}
                        <h1 className="text-white mb-4 text-4xl sm:text-2xl lg:text-5xl lg:leading-normal font-extrabold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-yellow-400 ">
                                Hey There, I&apos;m{" "}</span>
                            <br />

                            {/* Type Animation */}
                            <TypeAnimation
                                sequence={[
                                    'Shubhranshu',
                                    1000,
                                    'FrontEnd Developer',
                                    1000,
                                    'Machine Learning Engineer',
                                    1000,
                                    'Data Scientist',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={60}
                                repeat={Infinity}
                            />
                        </h1>
                        {/* Overview */}
                        <p className="text-[#CCD3DD] text-lg lg:text-3">Computer Science Engineer with a strong background in C, Python, Java, and R. Seeking roles in Machine Learning, Deep Learning, Front-end Development, or Data Science. Proficient in TensorFlow, PyTorch, ReactJS, NextJS, NodeJS, and MongoDB. Enthusiastic about collaborating with dynamic teams to drive innovative solutions.</p>
                        <div>
                            <br /><br />
                            {/* Hire me button */}
                            <Link
                                href="/#contact"
                                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-200 to-blue-700 hover:bg-slate-200 text-white">
                                Hire Me
                            </Link>
                            
                            {/* Domain resume buttons */}
                            <Link
                                href="/Shubhranshu_Resume.pdf"
                                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-2 bg-gradient-to-br from-yellow-200 to-yellow-400 bg-transparent hover:bg-slate-800 text-white mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                    FrontEnd Resume
                                </span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="col-span-5 place-self-center mt-4 mb-6 lg:mt-0">
                        <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">

                            {/* Profile picture */}
                            <Image
                                src="/images/Shubhranshu_Pic.jpg"
                                alt="Profile pic"
                                className="absolute transform -translate-x-1/2 -translate-y-2/3 top-3/4 left-1/2"
                                height={325}
                                width={325} 
                                priority/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default First
