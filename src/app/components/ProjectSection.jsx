'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/solid';

const CATEGORIES = ['All', 'Web Dev', 'Data Analytics', 'Machine Learning', 'Others'];

const projects = [
  // ── MACHINE LEARNING ──────────────────────────────────────────────────────────

  {
    id: 1,
    category: 'Machine Learning',
    title: 'Polyp Segmentation using U-Net Architecture',
    // SCREENSHOT: use output segmentation mask image (e.g. polyp with overlay) — NOT a random project image
    images: ['/images/projects/project3a.png', '/images/projects/project3b.png'],
    github: 'https://github.com/Shubhranshu331/Polyp--Image_segmentation-UNET-',
    live: null,
    liveLabel: null,
    languages: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
    brief: 'U-Net model achieving 95.20% precision on colonoscopy polyp detection — built during MNNIT Allahabad internship. Segmentation masks overlaid on colonoscopy images for clinical-grade accuracy.',
    description: 'Implements a U-Net architecture in TensorFlow/Keras to segment polyps in colonoscopy images, supporting early colorectal cancer detection. Achieved 95.20% precision with an efficient tf.data pipeline, IoU-based evaluation, and training callbacks. Dataset includes annotated colonoscopy images with binary segmentation masks.',
    concepts: ['U-Net Architecture', 'Image Segmentation', 'TensorFlow/Keras', 'IoU Metric', 'Medical Imaging', 'tf.data Pipeline'],
  },
  {
    id: 2,
    category: 'Machine Learning',
    title: 'Graph Neural Networks for Survival Prediction',
    // SCREENSHOT: use confusion matrix or concordance index plot from the notebook output
    images: ['/images/projects/project1a.png', '/images/projects/project1b.png'],
    github: 'https://github.com/Shubhranshu331/Graph-Based-Titanic-Survival-Analysis-GCN-k-NN',
    live: null,
    languages: ['Python', 'PyTorch', 'Jupyter Notebook'],
    brief: 'Graph Convolutional Network for survival prediction achieving 85% concordance index — models entity relationships as graph edges for richer prognostic insight than classical ML.',
    description: 'Uses Graph Convolutional Networks to model survival outcomes by treating entities as graph nodes and their relationships as edges. The GCN + k-NN pipeline captures complex relational patterns in structured data, achieving an 85% concordance index. Demonstrates how graph-based approaches outperform classical ML in time-to-event forecasting tasks.',
    concepts: ['Graph Neural Networks', 'GCN', 'k-NN Graph Construction', 'Survival Analysis', 'PyTorch', 'Concordance Index'],
  },
  {
    id: 3,
    category: 'Machine Learning',
    title: 'Handwritten Digit Recognition — CNN on MNIST',
    // SCREENSHOT: use the prediction output grid from Jupyter (digits with predicted labels overlaid)
    images: ['/images/projects/project4a.png', '/images/projects/handwritten.png'],
    github: 'https://github.com/Shubhranshu331/Digit-recognition-cnn-mnist',
    live: null,
    languages: ['Python', 'TensorFlow', 'Keras', 'Jupyter Notebook'],
    brief: 'CNN trained on the MNIST dataset for handwritten digit classification — with TensorBoard training visualisation and full model export for downstream deployment.',
    description: 'CNN model trained on the Kaggle digit-recognizer (MNIST) dataset using TensorFlow/Keras. Features TensorBoard integration for loss/accuracy tracking and model checkpointing. The exported model is then consumed by the Digit Recognition React app (see Web Dev section) to enable live in-browser predictions.',
    concepts: ['CNN', 'MNIST', 'TensorFlow', 'TensorBoard', 'Model Export', 'Classification'],
  },
  {
    id: 4,
    category: 'Machine Learning',
    title: 'Adult Income Prediction — Random Forest & Gradient Boosting',
    // SCREENSHOT: use the confusion matrix or feature importance bar chart from the notebook
    images: ['/images/projects/project5a.png', '/images/projects/sentiment.png'],
    github: 'https://github.com/Shubhranshu331/Adult-Income-prediction-model',
    live: null,
    languages: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter Notebook'],
    brief: 'Binary classification predicting whether income exceeds $50K — Random Forest vs Gradient Boosting comparison on the UCI Adult dataset with full preprocessing pipeline.',
    description: 'Applies Random Forest and Gradient Boosting classifiers to the UCI Adult Census dataset for income prediction. Covers end-to-end preprocessing including handling missing values, encoding categorical features, and feature scaling. Model evaluation via accuracy, precision, recall, F1, and confusion matrix with side-by-side comparison.',
    concepts: ['Random Forest', 'Gradient Boosting', 'Feature Engineering', 'Binary Classification', 'Scikit-learn', 'Model Comparison'],
  },
  {
    id: 5,
    category: 'Machine Learning',
    title: 'Amazon Food Review — Sentiment Analysis (VADER)',
    // SCREENSHOT: use the sentiment distribution bar chart or the star-rating vs VADER comparison plot
    images: ['/images/projects/project5a.png', '/images/projects/sentiment.png'],
    github: 'https://github.com/Shubhranshu331/Amazon-reviews-vader-Sentiment-analysis',
    live: null,
    languages: ['Python', 'NLTK', 'Pandas', 'Matplotlib'],
    brief: 'Sentiment analysis on Amazon food reviews using NLTK VADER — 88% accuracy. Classifies reviews as positive, neutral, or negative and validates results against star ratings.',
    description: 'Conducts sentiment analysis on Amazon food reviews using NLTK VADER to classify text as positive, neutral, or negative. Achieves 88% accuracy. Includes text preprocessing, tokenisation, polarity scoring, and seaborn/matplotlib visualisations comparing VADER sentiment labels against star ratings for a thorough accuracy evaluation.',
    concepts: ['Sentiment Analysis', 'VADER', 'NLTK', 'Text Preprocessing', 'Polarity Scoring', 'Data Visualisation'],
  },

  // ── DATA ANALYTICS ────────────────────────────────────────────────────────────

  {
    id: 6,
    category: 'Data Analytics',
    title: 'Washington EV Dashboard — Tableau',
    // SCREENSHOT: use a screenshot of the actual Tableau dashboard (export from Tableau Public)
    images: ['/images/projects/project2a.png', '/images/projects/project2b.png'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics/tree/main/EV%20dashboard',
    live: 'https://github.com/Shubhranshu331/Data-Analytics/tree/main',
    liveLabel: 'DA Portfolio Site →',
    languages: ['Tableau', 'Excel'],
    brief: 'Interactive Tableau dashboard analysing Washington State EV adoption — breakdowns by manufacturer, model year, county, and CAFV eligibility.',
    description: 'Built in Tableau Public, this dashboard visualises EV registration data across Washington State. Includes manufacturer breakdown, model-year distribution, county-level mapping, and CAFV eligibility analysis. Designed for stakeholders to track EV adoption pace and identify underserved regions.',
    concepts: ['Tableau', 'Geospatial Mapping', 'Time-Series Analysis', 'Dashboard Design', 'EV Data', 'CAFV Eligibility'],
  },
  {
    id: 7,
    category: 'Data Analytics',
    title: 'Bike Sales Dashboard — Tableau',
    // SCREENSHOT: use a screenshot of the Tableau dashboard showing the revenue/profit breakdown
    images: ['/images/projects/project3a.png', '/images/projects/project3b.png'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics/tree/main/Bike%20Sales%20Dashboard',
    live: 'https://github.com/Shubhranshu331/Data-Analytics/tree/main',
    liveLabel: 'DA Portfolio Site →',
    languages: ['Tableau', 'Excel'],
    brief: 'Sales performance dashboard for a bicycle retail dataset — revenue, profit, product category mix, and regional performance with interactive Tableau filters.',
    description: 'Tableau dashboard exploring bike sales data across regions and product categories. Features revenue vs. profit trend lines, top-selling product breakdowns, regional heat maps, and dynamic filters for year and category. Designed to surface actionable insight for retail decision-making.',
    concepts: ['Tableau', 'Sales Analysis', 'KPI Dashboards', 'Trend Analysis', 'Retail Analytics', 'Filters & Parameters'],
  },
  {
    id: 8,
    category: 'Data Analytics',
    title: 'Classic Models Sales Dashboard — Power BI',
    // SCREENSHOT: use the Power BI dashboard screenshot showing product line revenue breakdown
    images: ['/images/projects/project4a.png', '/images/projects/project4b.png'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics/tree/main/Classic%20Models%20Sales%20Dashboard',
    live: 'https://github.com/Shubhranshu331/Data-Analytics/tree/main',
    liveLabel: 'DA Portfolio Site →',
    languages: ['Power BI', 'DAX', 'SQL'],
    brief: 'Power BI dashboard on the Classic Models database — product-line revenue, order status tracking, customer segmentation, and DAX measures for YoY growth.',
    description: 'Built in Power BI using the Classic Models sample database. Features product-line revenue breakdowns, order status funnels, customer segmentation by country, and custom DAX measures for YoY and MoM growth calculations. Data was pre-processed using SQL queries before import.',
    concepts: ['Power BI', 'DAX', 'SQL', 'Customer Segmentation', 'YoY Growth', 'Order Analytics'],
  },
  {
    id: 9,
    category: 'Data Analytics',
    title: 'Netflix Content Analysis — Power BI',
    // SCREENSHOT: use the Power BI dashboard screenshot showing genre distribution or content type split
    images: ['/images/projects/Netflix_clone.png', '/images/projects/project5b.png'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics/tree/main/Netflix%20Content%20Analysis',
    live: 'https://github.com/Shubhranshu331/Data-Analytics/tree/main',
    liveLabel: 'DA Portfolio Site →',
    languages: ['Power BI', 'DAX', 'Excel'],
    brief: 'Power BI analysis of the Netflix content library — genre distribution, release year trends, Movies vs TV Shows split, and top contributing countries.',
    description: 'Analysed the Netflix public content dataset in Power BI to uncover library composition patterns. Includes genre frequency charts, release year growth trends, Movies vs TV Shows split, duration distribution, and a country-level breakdown. DAX measures compute content growth rates and genre diversity scores.',
    concepts: ['Power BI', 'DAX', 'Content Analytics', 'Genre Analysis', 'Time-Series Trends', 'Entertainment Data'],
  },
  {
    id: 10,
    category: 'Data Analytics',
    title: 'Student Database Management System — SQL',
    // SCREENSHOT: use an ER diagram image or a screenshot of query output from MySQL Workbench
    images: ['/images/projects/project9a.png', '/images/projects/project9b.png'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics/tree/main/Student%20Database%20Management%20System',
    live: null,
    languages: ['SQL', 'MySQL'],
    brief: 'Normalised relational database for student academic records — schema design, stored procedures, and complex SQL queries for enrolment and grade management.',
    description: 'Designed and implemented a normalised relational database schema for managing student academic records. Includes tables for students, courses, grades, and instructors with proper foreign key constraints. Features stored procedures for enrolment and grade entry, plus complex JOIN queries for performance analysis.',
    concepts: ['SQL', 'Database Design', 'Normalisation', 'Stored Procedures', 'Joins & Subqueries', 'MySQL'],
  },

  // ── WEB DEV ───────────────────────────────────────────────────────────────────

  {
    id: 11,
    category: 'Web Dev',
    title: 'Personal Portfolio — Next.js + TailwindCSS',
    // SCREENSHOT: use a full-page screenshot of this portfolio (hero section works great)
    images: ['/images/projects/project2a.png', '/images/projects/project2b.png'],
    github: 'https://github.com/Shubhranshu331/Portfolio_',
    live: 'https://portfolio-pied-seven-64.vercel.app/',
    liveLabel: 'Live Site →',
    languages: ['JavaScript', 'Next.js', 'TailwindCSS'],
    brief: 'This portfolio — built with Next.js and TailwindCSS. Responsive design, framer-motion animations, modular component architecture, and a Resend email API.',
    description: 'This Next.js portfolio showcases skills and projects with a responsive design, smooth animations, and dynamic navigation. Modular content sections, reusable card components, and a secure Resend email API. TailwindCSS ensures consistent styling across all screen sizes and is deployed via Vercel.',
    concepts: ['Next.js', 'React Hooks', 'TailwindCSS', 'Framer Motion', 'Responsive Design', 'Vercel Deployment'],
  },
  {
    id: 12,
    category: 'Web Dev',
    title: 'PolypSeg FullStack — Next.js + FastAPI',
    // SCREENSHOT: use a screenshot of the web app UI showing the canvas/upload + segmentation result side by side
    images: ['/images/projects/project3a.png', '/images/projects/project3b.png'],
    github: 'https://github.com/Shubhranshu331/PolypSeg-FullStack',
    live: null,
    liveLabel: null,
    languages: ['Next.js', 'FastAPI', 'Python', 'TailwindCSS'],
    brief: 'Full-stack web deployment of the Polyp Segmentation U-Net model — Next.js frontend for image upload and result display, FastAPI backend serving the trained TensorFlow model.',
    description: 'Bridges the ML model (U-Net, 95.20% precision) and a real user interface. The Next.js frontend lets users upload a colonoscopy image and view the predicted segmentation mask in real time. FastAPI handles model inference on the backend, returning the overlay mask as a response. Demonstrates end-to-end ML deployment from research to production-ready app.',
    concepts: ['Next.js', 'FastAPI', 'TensorFlow Serving', 'REST API', 'Image Upload', 'Full-Stack ML Deployment'],
  },
  {
    id: 13,
    category: 'Web Dev',
    title: 'Digit Recognition App — React.js + FastAPI',
    // SCREENSHOT: use a screenshot of the React canvas where user draws a digit and prediction appears below
    images: ['/images/projects/project4a.png', '/images/projects/handwritten.png'],
    github: 'https://github.com/Shubhranshu331/Digit-Recognition-ReactJS-SCSS',
    live: null,
    liveLabel: null,
    languages: ['React.js', 'SCSS', 'FastAPI', 'Python'],
    brief: 'React.js web app where users draw a digit on a canvas and get a live CNN prediction — FastAPI backend serves the trained MNIST model for real-time inference.',
    description: 'User-facing deployment of the MNIST CNN model. React.js frontend with SCSS styling provides a smooth drawing canvas using the HTML5 Canvas API. On submission, the canvas image is sent to a FastAPI backend which runs the trained model and returns the predicted digit. Demonstrates how to connect a trained ML model to a polished frontend.',
    concepts: ['React.js', 'Canvas API', 'SCSS', 'FastAPI', 'REST API', 'Real-Time Inference'],
  },
  {
    id: 14,
    category: 'Web Dev',
    title: 'Data Analytics Portfolio Website — HTML, CSS, JS',
    // SCREENSHOT: use a screenshot of the homepage of the DA website showing project cards
    images: ['/images/projects/project9a.png', '/images/projects/project9b.png'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics/tree/main/Data%20Analytics%20website',
    live: 'https://github.com/Shubhranshu331/Data-Analytics/tree/main',
    liveLabel: 'View Repo →',
    languages: ['HTML', 'CSS', 'JavaScript'],
    brief: 'A dedicated frontend website housing all data analytics projects — project cards with live Tableau and Power BI links, built in vanilla HTML/CSS/JS.',
    description: 'Frontend website built in HTML, CSS, and JavaScript to centralise all data analytics work. Features project cards linking directly to live Tableau Public dashboards and Power BI reports. Responsive layout with CSS Grid and Flexbox, smooth scroll navigation, and an animated hero section.',
    concepts: ['HTML', 'CSS Grid', 'Flexbox', 'JavaScript', 'Responsive Design', 'Project Showcasing'],
  },
  {
    id: 15,
    category: 'Web Dev',
    title: 'Netflix UI Clone — HTML, CSS, JavaScript',
    // SCREENSHOT: use a screenshot of the clone showing the movie grid and search bar
    images: ['/images/projects/Netflix_clone.png', '/images/projects/project8b.png'],
    github: 'https://github.com/Shubhranshu331/Netflix-UI-Clone',
    live: null,
    languages: ['HTML', 'CSS', 'JavaScript'],
    brief: 'Pixel-accurate Netflix UI clone with dynamic movie catalog and JavaScript-powered case-insensitive search — built in vanilla HTML/CSS/JS.',
    description: 'Netflix-Clone replicating the streaming platform UI using HTML, CSS Flexbox, and vanilla JavaScript. A JS array acts as the movie data source; displayMovies() and searchMovie() functions handle dynamic rendering and case-insensitive search — a solid demonstration of DOM manipulation without any framework.',
    concepts: ['HTML', 'CSS Flexbox', 'JavaScript', 'DOM Manipulation', 'Dynamic Rendering', 'Search Functionality'],
  },

  // ── OTHERS ────────────────────────────────────────────────────────────────────

  {
    id: 16,
    category: 'Others',
    title: 'Tic-Tac-Toe Android App — Java',
    // SCREENSHOT: use a screenshot of the running APK on Android emulator or device
    images: ['/images/projects/tictactoe.png', '/images/projects/project6b.png'],
    github: 'https://github.com/Shubhranshu331/TicTacToeApp-java-',
    live: null,
    languages: ['Java', 'XML', 'Android Studio'],
    brief: 'Android Tic-Tac-Toe in Java — GridLayout board, full game-state logic, player-turn tracking, and win detection compiled into a functional APK.',
    description: 'Java-based Android app implementing two-player Tic-Tac-Toe. Uses a 3×3 GridLayout of tappable ImageViews defined in XML. MainActivity manages game state (integer array), player turns (activePlayer), and win-condition checking via the dropIn method. Configured via build.gradle.kts and compiled into an APK.',
    concepts: ['Android Development', 'Java', 'GridLayout', 'Game State Management', 'Win Detection', 'APK Build'],
  },
];

// ─── Project Card ──────────────────────────────────────────────────────────────
const ProjectCard = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoomed, setZoomed] = useState(null);

  const slides = [
    { type: 'overview' },
    { type: 'languages' },
    { type: 'concepts' },
    { type: 'description' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="w-[300px] sm:w-[320px] h-[440px] sm:h-[470px] bg-white flex flex-col shadow-lg rounded-[10px] relative"
    >
      {/* Category badge */}
      <span className="absolute top-2 left-2 z-20 text-[10px] font-bold uppercase tracking-widest bg-[#5e2a3a] text-white px-2 py-0.5 rounded-full">
        {project.category}
      </span>

      {/* Dots */}
      <div className="flex justify-center mt-4 pt-1 gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === i ? 'bg-[#5e2a3a] scale-110' : 'bg-[#222]/20 scale-75'
            }`}
          />
        ))}
      </div>

      {/* Slide content */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center px-4 pt-2"
          >

            {/* ── Slide 0: Overview ── */}
            {currentSlide === 0 && (
              <>
                <div className="relative group w-[200px] sm:w-[220px] h-[140px] sm:h-[155px] mt-1 flex-shrink-0">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 rounded-lg">
                    <button
                      onClick={() => setZoomed(project.images[0])}
                      className="bg-white/80 p-2 rounded-full shadow"
                      aria-label="Zoom image"
                    >
                      <EyeIcon className="w-5 h-5 text-gray-800" />
                    </button>
                    <button
                      onClick={() => window.open(project.github, '_blank')}
                      className="bg-white/80 p-2 rounded-full shadow"
                      aria-label="GitHub"
                    >
                      <CodeBracketIcon className="w-5 h-5 text-gray-800" />
                    </button>
                  </div>
                </div>

                <h3 className="text-[13px] sm:text-[14px] leading-[1.4em] uppercase tracking-[0.1em] text-center text-[#5e2a3a] font-raleway font-bold mt-2 px-2">
                  {project.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] leading-[1.65em] text-[#333] text-center px-2 mt-1.5 line-clamp-4">
                  {project.brief}
                </p>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-[11px] font-bold text-[#5e2a3a] underline underline-offset-2 hover:opacity-70 transition-opacity"
                  >
                    {project.liveLabel || 'Live →'}
                  </a>
                )}
              </>
            )}

            {/* ── Slide 1: Tech Stack ── */}
            {currentSlide === 1 && (
              <>
                <div className="relative group w-[200px] sm:w-[220px] h-[140px] sm:h-[155px] mt-1 flex-shrink-0">
                  <Image src={project.images[0]} alt={project.title} fill className="rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 rounded-lg">
                    <button onClick={() => setZoomed(project.images[0])} className="bg-white/80 p-2 rounded-full shadow"><EyeIcon className="w-5 h-5 text-gray-800" /></button>
                    <button onClick={() => window.open(project.github, '_blank')} className="bg-white/80 p-2 rounded-full shadow"><CodeBracketIcon className="w-5 h-5 text-gray-800" /></button>
                  </div>
                </div>
                <h3 className="text-[13px] uppercase tracking-[0.1em] text-center text-[#5e2a3a] font-raleway font-bold mt-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap justify-center gap-1.5 mt-2 px-2">
                  {project.languages.map((lang, i) => (
                    <span key={i} className="text-[11px] bg-[#f6f0e6] border border-[#5e2a3a]/30 text-[#5e2a3a] rounded-full px-2.5 py-0.5 font-semibold">
                      {lang}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* ── Slide 2: Key Concepts ── */}
            {currentSlide === 2 && (
              <>
                <div className="relative group w-[200px] sm:w-[220px] h-[140px] sm:h-[155px] mt-1 flex-shrink-0">
                  <Image src={project.images[1]} alt={project.title} fill className="rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 rounded-lg">
                    <button onClick={() => setZoomed(project.images[1])} className="bg-white/80 p-2 rounded-full shadow"><EyeIcon className="w-5 h-5 text-gray-800" /></button>
                    <button onClick={() => window.open(project.github, '_blank')} className="bg-white/80 p-2 rounded-full shadow"><CodeBracketIcon className="w-5 h-5 text-gray-800" /></button>
                  </div>
                </div>
                <h3 className="text-[13px] uppercase tracking-[0.1em] text-center text-[#5e2a3a] font-raleway font-bold mt-3">
                  Key Concepts
                </h3>
                <div className="flex flex-wrap justify-center gap-1.5 mt-2 px-2">
                  {project.concepts.map((c, i) => (
                    <span key={i} className="text-[11px] bg-[#5e2a3a]/10 text-[#5e2a3a] rounded-full px-2.5 py-0.5 font-medium">
                      {c}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* ── Slide 3: Description ── */}
            {currentSlide === 3 && (
              <div className="flex-1 flex flex-col justify-center px-2 pb-2">
                <h3 className="text-[13px] uppercase tracking-[0.1em] text-center text-[#5e2a3a] font-raleway font-bold mb-3">
                  Description
                </h3>
                <p className="text-[13px] sm:text-[14px] leading-[1.7em] text-[#333] text-justify">
                  {project.description}
                </p>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav buttons */}
      <div className="flex justify-between items-center px-4 pb-4">
        <button
          onClick={() => setCurrentSlide(s => Math.max(0, s - 1))}
          className={`px-3 py-1 rounded-full bg-[#f6f0e6] text-[11px] text-[#333] font-semibold flex items-center gap-1 transition-opacity ${
            currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <span className="w-4 h-4 rounded-full bg-[#5e2a3a] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-2.5 h-2.5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </span>
          Back
        </button>
        <button
          onClick={() => setCurrentSlide(s => Math.min(slides.length - 1, s + 1))}
          className={`px-3 py-1 rounded-full bg-[#f6f0e6] text-[11px] text-[#333] font-semibold flex items-center gap-1 transition-opacity ${
            currentSlide === slides.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          Next
          <span className="w-4 h-4 rounded-full bg-[#5e2a3a] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-2.5 h-2.5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>

      {/* Zoom modal */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setZoomed(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[90vh]"
            >
              <Image src={zoomed} alt="Zoomed" width={1280} height={720} className="w-[90vw] h-[90vh] object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Section ───────────────────────────────────────────────────────────────────
const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-[2vh] sm:py-[4vh] md:py-[6vh] lg:py-[8vh] px-[4vw] sm:px-[2vw] xl:px-[8vw] bg-[#f6f0e6]">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative text-center mb-[3vh]"
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

      {/* Category Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2 mb-[4vh]"
      >
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-[12px] sm:text-[13px] font-bold uppercase tracking-widest transition-all duration-300 border-[1.5px] ${
              activeCategory === cat
                ? 'bg-[#5e2a3a] text-white border-[#5e2a3a] shadow-md'
                : 'bg-transparent text-[#5e2a3a] border-[#5e2a3a]/50 hover:border-[#5e2a3a] hover:bg-[#5e2a3a]/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1200px] mx-auto justify-items-center"
        >
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>

    </section>
  );
};

export default ProjectSection;