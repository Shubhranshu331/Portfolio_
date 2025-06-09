'use client';

// Import required dependencies for building the component
import React, { useState } from 'react'; // React for component logic, useState for state management
import Image from 'next/image'; // Next.js Image component for optimized image rendering
import { motion } from 'framer-motion'; // Framer Motion for animations
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/solid'; // Icons for viewing media and linking to GitHub

// Define the projects array containing 10 sample projects with their details
const projects = [
  {
    id: 1,
    title: 'Graph Neural Networks for Survival Prediction',
    video: '/video/vid1.mp4', // Placeholder video path
    images: [
      '/images/projects/space.png',
      '/images/projects/space.png',
      '/images/projects/space.png'
    ],
    github: 'https://github.com/Shubhranshu331/Graph-Neural-Networks-for-Survival-Prediction',
    languages: ['Python (Juypter Notebook)'],
    brief: 'Employs graph neural networks to advance survival prediction, using relational data to boost accuracy and interpretability in time-to-event forecasting for critical applications.',
    description: 'This project uses Graph Neural Networks to predict survival outcomes, likely for cancer prognosis. It models entities (e.g., patients, genes) as nodes and interactions as edges in a graph, capturing complex patterns in multimodal data (e.g., genomic, clinical). It aims to improve on traditional methods by building graphs and training GNNs for time-to-event predictions, with potential use in personalized medicine.',
    concepts: ['Graph Neural Networks', 'Survival Analysis', 'Graph Representation', 'Multimodal Data Processing', 'Time-to-Event Prediction', 'Prognostic Modeling']
  },
  {
    id: 2,
    title: 'Personal Portfolio using Next.JS, TailwindCSS and Node.JS',
    video: '/video/vid1.mp4',
    images: [
      '/images/projects/space.png',
      '/images/projects/space.png',
      '/images/projects/space.png'
    ],
    github: 'https://github.com/Shubhranshu331/Portfolio_',
    languages: ['JavaScript (Next.JS)', 'CSS (TailwindCSS)', 'HTML'],
    brief: 'Aims to professionally showcase my skills, projects, and achievements. It offers a responsive, interactive platform with a secure email-sending feature to highlight expertise and facilitate contact.',
    description: 'This Next.js portfolio website showcases my skills and projects with a responsive design, smooth loading animation, and dynamic navigation. Modular content sections, reusable item cards, and a secure email-sending API enhance functionality, while Tailwind CSS ensures a cohesive, appealing look across devices.',
    concepts: ['Next.js', 'React Hooks', 'Tailwind CSS', 'API Routes', 'Responsive Design', 'Item Card Pattern']
  },
  {
    id: 3,
    title: 'Detection of Polp in Colonoscopy Images using U_Net Architecture',
    video: '/video/vid1.mp4',
    images: [
      '/images/projects/space.png',
      '/images/projects/space.png',
      '/images/projects/space.png'
    ],
    github: 'https://github.com/Shubhranshu331/Polyp--Image_segmentation-UNET-',
    languages: ['Python (Jupyter Notebook)'],
    brief: 'Project develops a U-Net model to segment polyps in colonoscopy images, aiding early colorectal cancer detection using TensorFlow/Keras, with IoU-based evaluation and visualizations.',
    description: 'This project implements a U-Net model in Python using TensorFlow/Keras to segment polyps in colonoscopy images, supporting early colorectal cancer detection. It includes data preprocessing, an efficient tf.data pipeline, model training with callbacks, and evaluation using IoU and visualizations.',
    concepts: ['U-Net Architecture', 'Image Segmentation', 'Data Pipeline', 'TensorFlow/Keras', 'Intersection over Union (IoU)', 'Training Callbacks']
  },
  {
    id: 4,
    title: 'Handwritten Digit Recognition using Sequential Keras',
    video: '/video/vid1.mp4',
    images: [
      '/images/projects/space.png',
      '/images/projects/space.png',
      '/images/projects/space.png'
    ],
    github: 'https://github.com/Shubhranshu331/Handwritten-Digit-Recognition',
    languages: ['Python (Jupyter Notebook)'],
    brief: 'Handwritten digit recognition model for a Kaggle competition using Python in a Jupyter Notebook. It loads and explores the "digit-recognizer" dataset, setting up a robust environment for model training and visualization with TensorBoard.',
    description: 'Project builds a handwritten digit recognition model for a Kaggle competition, using Python to load and explore the "digit-recognizer" dataset with pandas. It sets up a Kaggle environment, imports libraries like TensorFlow and seaborn, and uses TensorBoard for training visualization, ensuring a robust setup for model development.',
    concepts: ['Handwritten Digit Recognition', 'Data Loading', 'Pandas DataFrames', 'TensorFlow', 'TensorBoard', 'Kaggle Environment']
  },
  {
    id: 5,
    title: 'Amazon Food Review - Sentiment Analysis',
    video: '/video/vid1.mp4',
    images: [
      '/images/projects/space.png',
      '/images/projects/space.png',
      '/images/projects/space.png'
    ],
    github: 'https://github.com/Shubhranshu331/Sentiment-Analysis',
    languages: ['Python (Jupyter Notebook)'],
    brief: 'Seeks to perform sentiment analysis on Amazon food reviews using NLTK and VADER to classify text as positive, neutral, or negative. It involves text preprocessing, polarity scoring, and visualization to evaluate VADER’s sentiment classification accuracy against star ratings.',
    description: 'Conducts sentiment analysis on Amazon food reviews using Python and the NLTK library, with VADER to classify review text as positive, neutral, or negative. It includes text preprocessing, tokenization, polarity scoring, and sentiment classification, with matplotlib and seaborn visualizations to compare VADER’s sentiment labels against star ratings, enabling evaluation of classification accuracy.',
    concepts: ['Sentiment Analysis', 'NLTK Library', 'VADER Sentiment Analyzer', 'Text Preprocessing', 'Polarity Scores', 'Data Visualization']
  },
  {
    id: 6,
    title: 'Tic-Tac-Toe app using Android Studio',
    video: '/video/vid1.mp4',
    images: [
      '/images/projects/space.png',
      '/images/projects/space.png',
      '/images/projects/space.png'
    ],
    github: 'https://github.com/Shubhranshu331/TicTacToeApp-java-',
    languages: ['Java', 'XML'],
    brief: 'Java-based Android Tic Tac Toe app to provide an interactive two-player game experience. It uses a GridLayout for the board, manages game state and player turns, and checks for wins, all configured via build.gradle.kts to compile into a functional APK.',
    description: 'Built in Java, implements a Tic Tac Toe game with a 3x3 GridLayout of tappable ImageViews defined in activity_main.xml. The MainActivity.java manages game logic, including player turns (tracked by activePlayer), game state (via an integer array), and win conditions, with the dropIn method handling tap interactions, state updates, and winner checks, all configured through app/build.gradle.kts for compilation into an APK.',
    concepts: ['Android Development', 'GridLayout', 'Game State Management', 'Player Turn Tracking', 'Interactive UI', 'Win Condition Logic']
  },
  {
    id: 7,
    title: 'Parallax using React.JS and SCSS',
    video: '/video/vid1.mp4',
    images: [
      '/images/projects/space.png',
      '/images/projects/space.png',
      '/images/projects/space.png'
    ],
    github: 'https://github.com/Shubhranshu331/Parallax-React.JS-and-scss',
    languages: ['JavaScript (React.JS)', 'HTML', 'SCSS'],
    brief: 'Web application with a parallax scrolling effect, using the App component in src/App.js to manage UI via JSX and SCSS for nested styling. It employs the useState and useEffect hooks to track scroll position and update background layer transformations, creating a dynamic depth effect.',
    description: 'React project builds a web application with a parallax scrolling effect, using the App component in src/App.js to manage UI via JSX and SCSS for nested styling. It employs the useState and useEffect hooks to track scroll position and update background layer transformations, creating a dynamic depth effect.',
    concepts: ['React Functional Components', 'JSX', 'useState Hook', 'useEffect Hook', 'SCSS Styling', 'Parallax Effect']
  },
  {
    id: 8,
    title: 'Netflix Clone using HTML, CSS and JS',
    video: '/video/vid1.mp4',
    images: [
      '/images/projects/space.png',
      '/images/projects/space.png',
      '/images/projects/space.png'
    ],
    github: 'https://github.com/Shubhranshu331/Netflix-Clone',
    languages: ['HTML', 'CSS', 'JavaScript'],
    brief: 'Web-based Netflix-Clone to display and search movies dynamically using HTML, CSS, and JavaScript. It aims to create an interactive user interface with a styled layout and search functionality driven by a movie data array.',
    description: 'Netflix-Clone project builds a web application using HTML, CSS, and JavaScript to display a dynamic movie catalog with a styled interface. It employs Flexbox for layout, a JavaScript array for movie data, and functions like displayMovies() and searchMovie() to enable dynamic rendering and case-insensitive search, creating an interactive user experience.',
    concepts: ['HTML Structure', 'CSS Flexbox', 'JavaScript Arrays', 'Dynamic Content Generation', 'User Event Handling', 'Movie Search Functionality']
  },
  {
    id: 9,
    title: 'AssignmentO using HTML and CSS',
    video: '/video/vid1.mp4',
    images: [
      '/images/projects/space.png',
      '/images/projects/space.png',
      '/images/projects/space.png'
    ],
    github: 'https://github.com/Shubhranshu331/Assignment0',
    languages: ['HTML', 'CSS'],
    brief: 'web-based assignment management system using separate HTML pages for workflow steps, linked via simple navigation. It employs consistent CSS styling and an animated background grid to deliver a user-friendly, visually appealing interface.',
    description: 'Assignment0 is a web-based assignment management system using distinct HTML pages (e.g., home.html, submit.html) for workflow steps, connected by simple links. It features a consistent layout with CSS classes like .formbg and .flex, a navigational footer, global CSS for maintainability, and an animated background grid for visual appeal, ensuring a cohesive and user-friendly interface.',
    concepts: ['HTML Page Structure', 'CSS Grid', 'Global CSS Styling', 'Form Presentation', 'Site Navigation', 'CSS Animations']
  },
];

// Component to render individual project screens (video, languages, concepts, description)
const ProjectScreen = ({ screen, isActive, type, github }) => {
  // State to manage the zoomed media modal (for enlarged image/video)
  const [zoomedMedia, setZoomedMedia] = useState(null);

  // Handle Eye icon click to open modal with enlarged media
  const handleMediaClick = () => {
    setZoomedMedia(type === 'video' ? screen.video : screen.image);
  };

  // Handle Code icon click to open GitHub repository in a new tab
  const handleGithubClick = () => {
    window.open(github, '_blank');
  };

  // Close the zoomed media modal
  const handleCloseZoom = () => {
    setZoomedMedia(null);
  };

  return (
    <>
      {/* List item for each screen, slides in/out based on active state */}
      <li
        className={`absolute w-full h-full flex flex-col transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] 
          ${isActive ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-[-72px]'}`}
        style={{ transitionDelay: isActive ? '0.4s' : '0s', zIndex: isActive ? 10 : 0 }}
      >
        {/* Video or image display for video, languages, and concepts screens */}
        {(type === 'video' || type === 'languages' || type === 'concepts') && (
          <div className="flex justify-center mt-2 sm:mt-4">
            <div
              className="relative group w-[180px] sm:w-[200px] h-[135px] sm:h-[150px] bg-transparent"
              style={{ pointerEvents: 'auto', zIndex: 20 }}
            >
              {type === 'video' ? (
                <video
                  src={screen.video}
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-50"
                  style={{ pointerEvents: 'none', zIndex: 10 }}
                />
              ) : (
                <Image
                  src={screen.image}
                  alt={`Project ${type}`}
                  width={200}
                  height={150}
                  className="absolute inset-0 w-full h-full rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-50"
                  style={{ pointerEvents: 'none', zIndex: 10, transitionDelay: isActive ? '0.6s' : '0s' }}
                />
              )}
              <div
                className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30"
                style={{ pointerEvents: 'auto', zIndex: 30 }}
              >
                <button
                  onClick={handleMediaClick}
                  className="bg-white/80 p-2 rounded-full shadow-md"
                  style={{ pointerEvents: 'auto' }}
                  aria-label={type === 'video' ? 'View video' : 'View image'}
                >
                  <EyeIcon className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={handleGithubClick}
                  className="bg-white/80 p-2 rounded-full shadow-md"
                  style={{ pointerEvents: 'auto' }}
                  aria-label="View GitHub repository"
                >
                  <CodeBracketIcon className="w-6 h-6 text-gray-800" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Title below video/image */}
        <div className="flex flex-col mb-2 sm:mb-4 mt-2 sm:mt-4">
          <h3
            className="text-base leading-[1.4em] uppercase tracking-[0.15em] text-center text-[#5e2a3a] font-raleway font-bold"
            dangerouslySetInnerHTML={{ __html: screen.title }}
          />
        </div>

        {/* Content (brief, languages, concepts, or description) */}
        {type === 'video' && screen.content && (
          <p className="text-[12px] sm:text-[13px] leading-[1.6em] text-[#222222]/80 px-4 text-center text-justify mb-2 sm:mb-4">
            {screen.content}
          </p>
        )}
        {type === 'languages' && screen.content && (
          <p className="text-[12px] sm:text-[13px] leading-[1.6em] text-[#222222]/80 px-4 text-center text-justify mb-2 sm:mb-4">
            {screen.content.join(', ')}
          </p>
        )}
        {type === 'concepts' && screen.content && (
          <p className="text-[12px] sm:text-[13px] leading-[1.6em] text-[#222222]/80 px-4 text-center text-justify mb-2 sm:mb-4">
            {screen.content.join(', ')}
          </p>
        )}
        {type === 'description' && (
          <div className="flex-1 flex flex-col items-center justify-center mt-0 sm:mt-0 px-6">
            <p className="text-[13px] sm:text-[14px] leading-[1.6em] text-[#222222]/80 text-center text-justify">
              {screen.content}
            </p>
          </div>
        )}
      </li>

      {/* Modal for zoomed image/video */}
      {zoomedMedia && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseZoom}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[90vw] max-h-[90vh]"
          >
            {zoomedMedia.endsWith('.mp4') ? (
              <video
                src={zoomedMedia}
                autoPlay
                loop
                muted
                className="w-[90vw] h-[90vh] object-contain"
              />
            ) : (
              <Image
                src={zoomedMedia}
                alt="Zoomed project media"
                width={1280}
                height={720}
                className="w-[90vw] h-[90vh] object-contain"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

// Component for rendering a single project walkthrough with navigation
const ProjectWalkthrough = ({ project }) => {
  // State to track current screen (0: video, 1: languages, 2: concepts, 3: description)
  const [currentScreen, setCurrentScreen] = useState(0);

  // Define the four screens for each project
  const screens = [
    {
      type: 'video',
      video: project.video,
      title: project.title,
      content: project.brief // Full brief without truncation
    },
    {
      type: 'languages',
      image: project.images[0],
      title: 'Programming<br />Languages',
      content: project.languages
    },
    {
      type: 'concepts',
      image: project.images[1],
      title: 'Key<br />Concepts',
      content: project.concepts
    },
    {
      type: 'description',
      title: 'Description',
      content: project.description
    }
  ];

  // Navigate to next screen
  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  // Navigate to previous screen
  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1); // Fixed: Correctly decrement currentScreen
    }
  };

  // Animation variants for project card
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className="w-[280px] sm:w-[300px] h-[400px] sm:h-[440px] bg-white flex flex-col shadow-lg rounded-[10px]"
    >
      {/* Navigation dots */}
      <div className="flex justify-center mt-2 sm:mt-4">
        {screens.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full mx-1 transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] 
              ${currentScreen === index ? 'bg-[#5e2a3a] scale-100' : 'bg-[#222222]/25 scale-75'}`}
            style={{ transitionDelay: currentScreen === index ? '0.4s' : '0s' }}
          />
        ))}
      </div>

      {/* Container for project screens */}
      <div className="flex-1 flex items-start text-center relative">
        <ul className="flex-1 relative w-full h-full">
          {screens.map((screen, index) => (
            <ProjectScreen
              key={index}
              screen={screen}
              isActive={currentScreen === index}
              type={screen.type}
              github={project.github}
            />
          ))}
        </ul>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center px-4 pb-2 sm:pb-4">
        {/* Back button */}
        <button
          onClick={prevScreen}
          disabled={currentScreen === 0}
          className={`call-to-action px-[0.4rem] sm:px-[0.6rem] py-[0.2rem] sm:py-[0.3rem] inline-block w-fit rounded-full bg-[#f6f0e6] text-white relative hover:bg-[#f6f0e6]
            ${currentScreen === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <span className="flex items-center justify-between text-[#222222] text-[0.5rem] sm:text-[0.625rem]">
            <span className="mr-[0.2rem] sm:mr-[0.3rem] w-[0.8rem] sm:w-[1rem] h-[0.8rem] sm:h-[1rem] rounded-full bg-[#5e2a3a] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-[0.5rem] sm:w-[0.625rem] h-[0.5rem] sm:h-[0.625rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
            Back
          </span>
        </button>

        {/* Next button */}
        <button
          onClick={nextScreen}
          disabled={currentScreen === screens.length - 1}
          className={`call-to-action px-[0.4rem] sm:px-[0.6rem] py-[0.2rem] sm:py-[0.3rem] inline-block w-fit rounded-full bg-[#f6f0e6] text-white relative hover:bg-[#f6f0e6]
            ${currentScreen === screens.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <span className="flex items-center justify-between text-[#222222] text-[0.5rem] sm:text-[0.625rem]">
            Next
            <span className="ml-[0.2rem] sm:ml-[0.3rem] w-[0.8rem] sm:w-[1rem] h-[0.8rem] sm:h-[1rem] rounded-full bg-[#5e2a3a] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-[0.5rem] sm:w-[0.625rem] h-[0.5rem] sm:h-[0.625rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </span>
        </button>

        {/* Reset button */}
        <button
          onClick={() => setCurrentScreen(0)}
          disabled={currentScreen !== screens.length - 1}
          className={`absolute bottom-2 sm:bottom-4 left-0 w-full h-8 sm:h-10 bg-[#9c8f75] text-white uppercase text-[10px] sm:text-[12px] font-bold tracking-[0.15em] transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)]
            ${currentScreen === screens.length - 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-x-0'}`}
        >
          Reset
        </button>
      </div>
    </motion.div>
  );
};

// Main section component to render all project cards
const ProjectSection = () => {
  return (
    <section id="projects" className="py-[2vh] sm:py-[4vh] md:py-[6vh] lg:py-[8vh] px-[4vw] sm:px-[2vw] xl:px-[8vw] bg-[#f6f0e6]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
        }}
        className="relative text-center mb-[4vh]"
      >
        <h1
          className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.375rem] font-bold text-[#e0b0bc] opacity-50"
          style={{ fontFamily: 'Faktor, Raleway, sans-serif' }}
        >
          PROJECTS
        </h1>
        <h2
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-[#5e2a3a]"
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          My Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[1200px] mx-auto justify-items-center">
        {projects.map((project) => (
          <ProjectWalkthrough
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;