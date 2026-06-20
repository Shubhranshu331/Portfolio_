'use client';

// ─────────────────────────────────────────────────────────────
// ProjectsSection.jsx
//
// 5 filter tabs: All | Web Dev | Machine Learning | Data Analytics | Others
// Cards animate out/in when tab changes.
// Click "More" → drawer slides DOWN on all screen sizes.
// Only one card expanded at a time (expandedId lifted to parent).
// Descriptions are detailed. All projects have 5+ tech tags.
// ─────────────────────────────────────────────────────────────

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = ['All', 'Web Dev', 'Machine Learning', 'Data Analytics', 'Others'];

const gradients = {
  'Web Dev':          'from-[#5e2a3a] to-[#9c4060]',
  'Machine Learning': 'from-[#1d2e3f] to-[#2d4a63]',
  'Data Analytics':   'from-[#3a5e2a] to-[#5a8a40]',
  'Others':           'from-[#4a3a5e] to-[#7a60a0]',
};

const projects = [
  // ── WEB DEV ──────────────────────────────────────────────────
  {
    id: 1,
    title: 'PolypSeg — Medical Imaging Full Stack',
    category: 'Web Dev',
    image: '/images/projects/polyp-seg.png',
    description: 'A complete full-stack medical imaging application for detecting polyps in colonoscopy images. The frontend is built with Next.js and Three.js for 3D visualisation, backed by a Flask + Gunicorn REST API serving an Attention U-Net model trained on the CVC-ClinicDB dataset. The entire backend is containerised with Docker and deployed on HuggingFace Spaces, while the frontend lives on Vercel. This project bridges ML research and production deployment in one coherent pipeline.',
    tech: ['Next.js', 'Three.js', 'Flask', 'Docker', 'HuggingFace', 'Gunicorn', 'TailwindCSS'],
    github: 'https://github.com/Shubhranshu331/PolypSeg-FullStack',
    demo: 'https://polyp-seg-full-stack.vercel.app/',
  },
  {
    id: 2,
    title: 'Digit Recognition — React + FastAPI',
    category: 'Web Dev',
    image: '/images/projects/digit-recognition.png',
    description: 'Draw a digit on a canvas and get an instant prediction from a live ML model. The frontend is built with React and styled with SCSS, while the backend is a FastAPI app served by Uvicorn, running a TensorFlow/Keras CNN trained on the MNIST dataset. The two are decoupled and deployed independently — frontend on Vercel, backend on Render — communicating via REST API calls with Axios. A clean demonstration of how ML models can power interactive web experiences.',
    tech: ['React', 'SCSS', 'FastAPI', 'TensorFlow', 'Uvicorn', 'Axios', 'Render'],
    github: 'https://github.com/Shubhranshu331/Digit-Recognition-ReactJS-SCSS',
    demo: 'https://digit-recognition-react-js-scss.vercel.app/',
  },
  {
    id: 3,
    title: 'Data Analytics Portfolio Website',
    category: 'Web Dev',
    image: '/images/projects/data-analytics-website.png',
    description: 'A dedicated showcase website built to present data analytics dashboards and projects in one place. Built with React and Vanilla JavaScript for interactivity, styled with pure CSS and deployed on Vercel. The site organises Tableau dashboards, Power BI walkthroughs, and SQL projects with clean navigation and live links — making it easy for anyone to explore the analytics work without needing to dig through a GitHub repo.',
    tech: ['Vanilla JS', 'CSS3', 'Vercel', 'HTML5'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics/tree/main/Data%20Analytics%20website',
    demo: 'https://data-analytics-khaki.vercel.app/',
  },
  {
    id: 4,
    title: 'Netflix UI Clone',
    category: 'Web Dev',
    image: '/images/projects/netflix-clone.png',
    description: 'A pixel-close recreation of the Netflix landing page built purely with HTML, CSS, and JavaScript — no frameworks, no libraries. The goal was to sharpen layout skills using Flexbox and Grid, and nail the responsiveness across screen sizes. Every section from the hero to the FAQ accordion was hand-coded. A good reminder that you can build something polished without reaching for a framework.',
    tech: ['HTML', 'CSS', 'Flexbox', 'CSS Grid'],
    github: 'https://github.com/Shubhranshu331/Netflix-UI-Clone',
    demo: null,
  },
  {
    id: 5,
    title: 'Personal Portfolio',
    category: 'Web Dev',
    image: '/images/projects/portfolio.png',
    description: 'This portfolio — built from scratch with Next.js 14 App Router, Framer Motion for animations, and TailwindCSS for styling. Features a draggable certification carousel, an SVG radar skill chart with hover interactions, expandable project cards, a vertical scroll progress bar, and a custom Geist VF font setup via next/font/local. Deployed on Vercel and connected to a custom GoDaddy domain.',
    tech: ['Next.js', 'Framer Motion', 'TailwindCSS', 'Vercel', 'Next.js App Router'],
    github: 'https://github.com/Shubhranshu331/Portfolio_',
    demo: 'https://shubhranshu.xyz',
  },

  // ── MACHINE LEARNING ─────────────────────────────────────────
  {
    id: 6,
    title: 'Polyp Image Segmentation — Attention U-Net',
    category: 'Machine Learning',
    image: '/images/projects/polyp-unet.png',
    description: 'Research-stage implementation of an Attention U-Net architecture for medical image segmentation. Trained and evaluated on the CVC-ClinicDB colonoscopy dataset from Kaggle using TensorFlow and Keras. The attention gates help the model focus on relevant polyp regions while suppressing background noise, improving segmentation accuracy over a standard U-Net. Results were visualised with Matplotlib and image preprocessing was handled with OpenCV and Pillow. This notebook directly fed into the PolypSeg full-stack deployment.',
    tech: ['TensorFlow', 'Keras', 'Attention U-Net', 'OpenCV', 'Pillow', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/Shubhranshu331/Polyp--Image_segmentation-UNET-',
    demo: null,
  },
  {
    id: 7,
    title: 'Digit Recognition — CNN on MNIST',
    category: 'Machine Learning',
    image: '/images/projects/digit-cnn.png',
    description: 'A Convolutional Neural Network trained on the classic MNIST dataset to classify handwritten digits (0–9). Built and trained in a Jupyter notebook using TensorFlow and Keras, with multiple Conv2D, MaxPooling, and Dense layers. Achieves high test accuracy on the 10,000-image test set. This is the model that was later extracted, served via FastAPI, and connected to the React frontend in the Digit Recognition web app.',
    tech: ['TensorFlow', 'Keras', 'CNN', 'NumPy', 'Matplotlib', 'Jupyter', 'MNIST'],
    github: 'https://github.com/Shubhranshu331/Digit-recognition-cnn-mnist',
    demo: null,
  },
  {
    id: 8,
    title: 'Adult Income Prediction',
    category: 'Machine Learning',
    image: '/images/projects/adult-income.png',
    description: 'A comparative study of multiple ML classifiers on the UCI Adult Income dataset to predict whether a person earns over $50K annually. Models tested include Logistic Regression, Random Forest, SVM, K-Nearest Neighbours, and Decision Tree. Each model was evaluated on accuracy, precision, recall, and F1-score, with results visualised for comparison. Data preprocessing involved handling missing values, encoding categorical features, and scaling with Scikit-Learn pipelines. Conducted entirely in a Jupyter notebook.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
    github: 'https://github.com/Shubhranshu331/Adult-Income-prediction-model',
    demo: null,
  },
  {
    id: 9,
    title: 'Amazon Reviews Sentiment Analysis',
    category: 'Machine Learning',
    image: '/images/projects/amazon-sentiment.png',
    description: 'Sentiment analysis on Amazon product reviews using VADER (Valence Aware Dictionary and sEntiment Reasoner) — a lexicon and rule-based NLP tool tuned for social media and informal text. Each review is scored for positive, neutral, and negative sentiment, with compound scores used for final classification. Results are visualised as score distributions using Seaborn, showing how sentiment varies across product categories. Entirely built in Python with NLTK and Pandas for data handling.',
    tech: ['Python', 'VADER', 'NLTK', 'Pandas', 'Seaborn', 'Matplotlib', 'Jupyter'],
    github: 'https://github.com/Shubhranshu331/Amazon-reviews-vader-Sentiment-analysis',
    demo: null,
  },
  {
    id: 10,
    title: 'Titanic Survival — Graph Neural Network',
    category: 'Machine Learning',
    image: '/images/projects/titanic-gcn.png',
    description: 'A non-standard approach to the classic Titanic survival problem — instead of treating it as a tabular classification task, this project builds a k-Nearest Neighbour graph from passenger feature vectors and applies a Graph Convolutional Network for node-level survival prediction. Each passenger becomes a graph node, and edges connect similar passengers. Built with PyTorch and the NetworkX graph library. An experiment in applying graph-based learning to structured data.',
    tech: ['Python', 'PyTorch', 'GCN', 'k-NN', 'NetworkX', 'Pandas', 'Jupyter'],
    github: 'https://github.com/Shubhranshu331/Graph-Based-Titanic-Survival-Analysis-GCN-k-NN',
    demo: null,
  },

  // ── DATA ANALYTICS ───────────────────────────────────────────
  {
    id: 11,
    title: 'Bike Sales Performance Dashboard',
    category: 'Data Analytics',
    image: '/images/projects/bike-sales.png',
    description: 'An interactive Tableau dashboard analysing global bike sales performance across customer demographics, product categories, and geographic markets. Covers revenue and profit analysis, customer segmentation by age group and gender, regional sales comparison across countries, and product-level performance tracking. Built with drill-down filters so any segment can be isolated at a click. Data was cleaned and structured in Excel before being connected to Tableau Public.',
    tech: ['Tableau', 'Excel', 'Data Cleaning', 'Tableau Public', 'Dashboard Design'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics',
    demo: 'https://public.tableau.com/app/profile/shubhranshu.shubhranshu/viz/BikeSales_17795285853410/BikeSalesAnalysis',
  },
  {
    id: 12,
    title: 'Classic Models Sales Dashboard',
    category: 'Data Analytics',
    image: '/images/projects/classic-models.png',
    description: 'A Power BI business intelligence dashboard built on sales transaction data from a classic model cars company. Covers revenue and profit KPIs, product line performance, geographic sales distribution across regions, and time-series trend analysis. DAX measures were used for custom KPI calculations and Power Query handled data transformation before loading. The result is an executive-level report that tells the business story clearly in a single view.',
    tech: ['Power BI', 'DAX', 'Power Query', 'Excel', 'Business Intelligence'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics',
    demo: 'https://youtu.be/wTj2IFPLmLU',
  },
  {
    id: 13,
    title: 'Washington EV Population Dashboard',
    category: 'Data Analytics',
    image: '/images/projects/ev-population.png',
    description: 'A Tableau dashboard analysing electric vehicle adoption trends across Washington State using public registry data. Visualises EV concentration by county on an interactive map, battery range comparisons across manufacturers, MSRP distribution, and year-over-year growth forecasting. Data was cleaned and prepared in Excel before being connected to Tableau Public for visualisation. Useful for understanding how EV infrastructure needs vary geographically.',
    tech: ['Tableau', 'Excel', 'Data Cleaning', 'Geo Analytics', 'Tableau Public'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics',
    demo: 'https://public.tableau.com/app/profile/shubhranshu.shubhranshu/viz/WashingtonEVDashboard_17795234433300/Dashboard1',
  },
  {
    id: 14,
    title: 'Netflix Content Analysis Dashboard',
    category: 'Data Analytics',
    image: '/images/projects/netflix-powerbi.png',
    description: 'A Power BI report analysing Netflix content using a normalised relational data model — separating titles, genres, directors, and countries into related tables connected by keys. Covers content growth over time, genre popularity distribution, geographic production patterns, and the split between movies and TV shows. Power Query was used for data cleaning and transformation, with DAX measures for calculated metrics. The schema design gives this report more analytical depth than a flat-table approach.',
    tech: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'Excel'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics',
    demo: 'https://youtu.be/R5TZUIijL1Q',
  },
  {
    id: 15,
    title: 'Student Database Management System',
    category: 'Data Analytics',
    image: '/images/projects/student-db.png',
    description: 'A relational database project built in MySQL covering the full lifecycle of database design and querying. Schema was designed from scratch with proper normalisation through 1NF, 2NF, and 3NF to eliminate redundancy. Implemented CRUD operations, multi-table joins (INNER, LEFT, RIGHT), aggregate functions (COUNT, AVG, SUM), and subqueries for complex data retrieval. Also explored query optimisation fundamentals. A solid foundation project for anyone serious about working with structured data.',
    tech: ['MySQL', 'SQL', 'Normalization', 'CRUD', 'Joins', 'Database Design'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics',
    demo: null,
  },

  // ── OTHERS ───────────────────────────────────────────────────
  {
    id: 16,
    title: 'TicTacToe — Android App',
    category: 'Others',
    image: '/images/projects/tictactoe.png',
    description: 'A two-player TicTacToe Android application built in Java using Android Studio. Implements clean OOP principles with separate classes for game logic and UI handling. Features win detection across rows, columns, and diagonals, a draw condition check, and a reset button. UI is built with XML layouts. A college project that gave me my first exposure to mobile development, event-driven programming, and the Android activity lifecycle.',
    tech: ['Java', 'Android Studio', 'XML', 'OOP', 'Android SDK'],
    github: 'https://github.com/Shubhranshu331/TicTacToeApp-java-',
    demo: null,
  },
];

// ── GitHub SVG ────────────────────────────────────────────────
const GitHubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
             0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755
             -1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236
             1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466
             -1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
             0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405
             2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23
             1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22
             0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295
             24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

// ── Project card ──────────────────────────────────────────────
// Drawer slides DOWN on all screen sizes.
// isExpanded + onToggle lifted to parent so only one card is
// open at a time.
const ProjectCard = ({ project, index, isExpanded, onToggle }) => {
  const [imgError, setImgError] = useState(false);
  const gradient = gradients[project.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
      className="group bg-white rounded-xl border border-[#5e2a3a]/15 shadow-sm
                 hover:shadow-lg hover:shadow-[#5e2a3a]/10
                 transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className={`relative h-[160px] shrink-0 bg-gradient-to-br ${gradient} overflow-hidden`}>
        {!imgError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <span className="text-white/30 font-geist font-bold text-[3rem]">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <span className="absolute top-3 left-3 font-geist-mono text-[0.65rem] uppercase tracking-wider
                         bg-white/90 text-[#5e2a3a] px-2 py-0.5 rounded-full">
          {project.category}
        </span>
      </div>

      {/* Always-visible content */}
      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-geist font-bold text-[#5e2a3a] text-[0.95rem] leading-snug">
          {project.title}
        </h3>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t}
              className="font-geist-mono text-[0.65rem] px-1.5 py-0.5 rounded
                         bg-[#5e2a3a]/8 text-[#5e2a3a] border border-[#5e2a3a]/15">
              {t}
            </span>
          ))}
        </div>

        {/* More / Less button */}
        <button
          onClick={onToggle}
          className="self-start flex items-center gap-1 mt-1 text-[0.78rem] font-semibold
                     text-[#5e2a3a] hover:text-[#9c8f75] transition-colors duration-200"
        >
          {isExpanded ? 'Less' : 'More'}
          <motion.svg
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" className="w-3.5 h-3.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
      </div>

      {/* ── Drawer — slides down on all screens ───────────────── */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-3 flex flex-col gap-3 border-t border-[#5e2a3a]/10">
              <p className="text-[#444] text-[0.85rem] leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                <a
                  href={project.github}
                  target="_blank" rel="noopener noreferrer"
                  className="call-to-action flex items-center gap-1.5 px-3 py-1.5 rounded-full
                             text-[#5e2a3a] hover:text-white text-[0.78rem] font-semibold
                             transition-all duration-200"
                >
                  <GitHubIcon /> GitHub
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                               bg-[#5e2a3a] text-white text-[0.78rem] font-semibold
                               hover:bg-[#9c8f75] transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                ) : (
                  <span className="flex items-center px-3 py-1.5 rounded-full
                                   border border-[#5e2a3a]/15 text-[#9c8f75] text-[0.78rem]
                                   cursor-default select-none">
                    No live demo
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ── Main component ────────────────────────────────────────────
const ProjectsSection = () => {
  const [activeTab,   setActiveTab]   = useState('All');
  const [expandedId,  setExpandedId]  = useState(null); // one card open at a time
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Toggle: clicking same card collapses it
  const handleToggle = (id) => setExpandedId((prev) => (prev === id ? null : id));

  // Collapse open card when switching tabs
  const handleTabChange = (tab) => { setActiveTab(tab); setExpandedId(null); };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasAnimated(true); },
      { threshold: 0, rootMargin: '-80px 0px -50% 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeTab === 'All'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-[8vh] px-[2vw] xl:px-[8vw] bg-[#f6f0e6]/85 overflow-hidden"
    >
      {/* Section heading */}
      <div className="relative text-center mb-[5vh]">
        <h1 className="text-[4rem] lg:text-[5rem] font-bold text-[#e0b0bc]/50 font-geist select-none">
          PROJECTS
        </h1>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       text-[2rem] lg:text-[2.5rem] font-bold text-[#5e2a3a] font-geist whitespace-nowrap">
          My Projects
        </h2>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {TABS.map((tab) => {
          const count = tab === 'All' ? projects.length : projects.filter(p => p.category === tab).length;
          return (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`relative px-4 py-2 rounded-full font-geist text-[0.82rem] font-semibold
                          border-2 transition-all duration-300 flex items-center gap-1.5
                          ${activeTab === tab
                            ? 'bg-[#5e2a3a] border-[#5e2a3a] text-white shadow-md shadow-[#5e2a3a]/25'
                            : 'bg-transparent border-[#5e2a3a]/30 text-[#5e2a3a] hover:border-[#5e2a3a] hover:bg-[#5e2a3a]/5'
                          }`}
            >
              {tab}
              <span className={`text-[0.65rem] font-geist-mono px-1.5 py-0.5 rounded-full
                                ${activeTab === tab ? 'bg-white/20 text-white' : 'bg-[#5e2a3a]/10 text-[#5e2a3a]'}`}>
                {count}
              </span>
              {activeTab === tab && (
                <motion.span
                  layoutId="projectTab"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#9c8f75]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default ProjectsSection;