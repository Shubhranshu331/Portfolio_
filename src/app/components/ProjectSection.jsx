"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion";


const projectData = [
    {
        id: 1,
        title: "My Portfolio",
        description: "A sleek and modern personal portfolio built with Next.js and deployed on Vercel. Responsive Design: Optimized for all devices. Dynamic Content: Using Next.jsdynamic routing. SEO Friendly: Incorporates SEO best practices. Fast Load Times.",
        image: "/images/projects/portfolio.png",
        tag: ["All", "Front-End"],
        gitUrl: "https://github.com/Shubhranshu331/Portfolio_",
        previewUrl: "https://www.shubhranshu.me/"
    },
    {
        id: 2,
        title: "Detection of polyp in colonoscopy images",
        description: "The model utilizes a unit architecture, known for its robustness in medical image analysis, to achieve high accuracy in identifying polyps.various usages of this project are: Early Diagnosis,Enhancing Accuracy, Supporting Gastroenterologists, Medical Research, Education and Training, Real-time Analysis",
        image: "/images/projects/unet.png",
        tag: ["All", "Machine Learning"],
        gitUrl: "https://github.com/Shubhranshu331/Polyp--Image_segmentation-UNET-",
        previewUrl: "https://github.com/Shubhranshu331/Polyp--Image_segmentation-UNET-"
    },
    {
        id: 3,
        title: "Tic-Tac-Toe app",
        description: "An Android application designed to play the classic Tic Tac Toe game. It's a simple yet engaging app that allows users to play against an AI opponent or another player. The application aims to provide an intuitive and fun gaming experience, suitable for all ages.",
        image: "/images/projects/tictactoe.png",
        tag: ["All", "Android"],
        gitUrl: "https://github.com/Shubhranshu331/TicTacToeApp-java-",
        previewUrl: "https://github.com/Shubhranshu331/TicTacToeApp-java-"
    },
    {
        id: 4,
        title: "Handwritten Digit Recognition Model",
        description: "A machine learning model capable of recognizing handwritten digits with high accuracy. The model is trained on a dataset of handwritten digits and can identify and classify each digit from 0 to 9, making it useful for various applications such as digitizing handwritten notes, automating data entry, and more.",
        image: "/images/projects/handwritten.png",
        tag: ["All", "Machine Learning"],
        gitUrl: "https://github.com/Shubhranshu331/Handwritten-Digit-Recognition",
        previewUrl: "https://github.com/Shubhranshu331/Handwritten-Digit-Recognition"
    },
    {
        id: 5,
        title: "Amazon food review analysis",
        description: "A machine learning model to perform sentiment analysis on Amazon food reviews. The model is designed to classify reviews into positive, negative, or neutral sentiments, helping to understand customer feedback and improve product offerings.",
        image: "/images/projects/sentiment.png",
        tag: ["All", "Machine Learning"],
        gitUrl: "https://github.com/Shubhranshu331/Sentiment-Analysis",
        previewUrl: "https://github.com/Shubhranshu331/Sentiment-Analysis"
    },
    {
        id: 6,
        title: "Parallax",
        description: "A front-end web application that leverages parallax scrolling effects to create an engaging and immersive user experience. Built using ReactJS for a dynamic and responsive interface, and SCSS for advanced styling, this project showcases the power of modern web technologies in crafting compelling web pages.",
        image: "/images/projects/parallax.png",
        tag: ["All", "Front-End"],
        gitUrl: "https://github.com/Shubhranshu331/Parallax-React.JS-and-scss",
        previewUrl: "https://parallax-react-js-and-scss.vercel.app/"
    },
    // {
    //     id: 7,
    //     title: "Space parallax",
    //     description: "A static front-end application built using CSS and React. The main feature of the application is its visually captivating parallax effects, which are used to create an immersive experience focused on the description of terrestrial bodies.",
    //     image: "/images/projects/space.png",
    //     tag: ["All", "Front-End"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
    {
        id: 7,
        title: "Batman and chill",
        description: "A static front-end web application designed to mimic the user interface of Netflix. Built using HTML, CSS, and JavaScript, this application provides a visually appealing platform for users to browse through a variety of video content, even though it does not support streaming functionalities.",
        image: "/images/projects/Netflix_clone.png",
        tag: ["All", "Front-End"],
        gitUrl: "https://github.com/Shubhranshu331/Netflix-Clone",
        previewUrl: "https://netflix-clone-weld-six-44.vercel.app/"
    },
    {
        id: 8,
        title: "Assignment0",
        description: "A front-end web application designed to streamline the process of accepting and providing assignments. Built using HTML, CSS, and JavaScript, the application offers an intuitive and user-friendly interface for both students and instructors.",
        image: "/images/projects/assignment0.png",
        tag: ["All", "Front-End"],
        gitUrl: "https://github.com/Shubhranshu331/Assignment0",
        previewUrl: "https://github.com/Shubhranshu331/Assignment0"
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProject = projectData.filter((project) =>
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };

    return (
        <section id="myprojects">
            <div  className="items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-10 ">
                <Image src="/images/My_Projects.png" width={431} height={78} className="mb-2 mx-auto" alt='Project_snap'/>
                <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
                    <ProjectTag onClick={handleTagChange} tag="All" isSelected={tag === "All"} />
                    <ProjectTag onClick={handleTagChange} tag="Front-End" isSelected={tag === "Front-End"} />
                    <ProjectTag onClick={handleTagChange} tag="Machine Learning" isSelected={tag === "Machine Learning"} />
                    {/* <ProjectTag onClick={handleTagChange} tag="DL" isSelected={tag === "Deep Learning"} /> */}
                    <ProjectTag onClick={handleTagChange} tag="Android" isSelected={tag === "Android"} />
                </div>
                <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">{filteredProject.map((project, index) => (

                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index* 0.4 }}>
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl} />
                    </motion.li>
                )
                )}</ul></div>
        </section>
    )
}

export default ProjectSection