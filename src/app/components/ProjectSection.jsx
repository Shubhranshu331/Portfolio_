'use client';

// ─────────────────────────────────────────────────────────────
// ProjectsSection.jsx — built from scratch
//
// 5 filter tabs: All | Web Dev | Machine Learning | Data Analytics | Others
// Each tab animates cards out and new ones animate in (stagger from below)
// Cards use gradient placeholders until real screenshots are added.
//
// Each card shows:
//  - Project image / gradient placeholder
//  - Category badge
//  - Title + short description
//  - Tech tags (Geist Mono)
//  - Live Demo button (or "No live demo" label) + GitHub button
//
// Animations:
//  - Tab switch: cards fade+scale out, new ones stagger in from below
//  - Card hover: lifts up with maroon shadow
//  - Section enter: fades up on scroll
// ─────────────────────────────────────────────────────────────

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// ── Filter tabs ───────────────────────────────────────────────
const TABS = ['All', 'Web Dev', 'Machine Learning', 'Data Analytics', 'Others'];

// ── Gradient placeholders per category ───────────────────────
// Used until real screenshots are dropped into /public/images/projects/
const gradients = {
  'Web Dev':          'from-[#5e2a3a] to-[#9c4060]',
  'Machine Learning': 'from-[#1d2e3f] to-[#2d4a63]',
  'Data Analytics':   'from-[#3a5e2a] to-[#5a8a40]',
  'Others':           'from-[#4a3a5e] to-[#7a60a0]',
};

// ── Project data ──────────────────────────────────────────────
const projects = [
  // ── WEB DEV ──────────────────────────────────────────────────
  {
    id: 1,
    title: 'PolypSeg — Medical Imaging Full Stack',
    category: 'Web Dev',
    image: '/images/projects/polyp-seg.png',
    description: 'Full stack app for polyp detection in colonoscopy images. Next.js + Three.js frontend, Flask + Gunicorn backend, Attention U-Net model, Docker deployed on HuggingFace Spaces.',
    tech: ['Next.js', 'Three.js', 'Flask', 'Docker', 'HuggingFace'],
    github: 'https://github.com/Shubhranshu331/PolypSeg-FullStack',
    demo: 'https://polyp-seg-full-stack.vercel.app/',
  },
  {
    id: 2,
    title: 'Digit Recognition — React + FastAPI',
    category: 'Web Dev',
    image: '/images/projects/digit-recognition.png',
    description: 'Draw a digit and get a real-time prediction. React + SCSS frontend, FastAPI backend serving a TensorFlow/Keras CNN trained on MNIST. Deployed on Vercel + Render.',
    tech: ['React', 'SCSS', 'FastAPI', 'TensorFlow', 'Uvicorn'],
    github: 'https://github.com/Shubhranshu331/Digit-Recognition-ReactJS-SCSS',
    demo: 'https://digit-recognition-react-js-scss.vercel.app/',
  },
  {
    id: 3,
    title: 'Data Analytics Portfolio Website',
    category: 'Web Dev',
    image: '/images/projects/data-analytics-website.png',
    description: 'Showcase website built to present data analytics dashboards and projects. Clean, responsive layout with project walkthroughs and live links.',
    tech: ['React', 'CSS', 'Vercel'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics/tree/main/Data%20Analytics%20website',
    demo: 'https://data-analytics-khaki.vercel.app/',
  },
  {
    id: 4,
    title: 'Netflix UI Clone',
    category: 'Web Dev',
    image: '/images/projects/netflix-clone.png',
    description: 'A pixel-close recreation of the Netflix landing page UI. Built to sharpen CSS and layout skills — responsive across screen sizes.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Shubhranshu331/Netflix-UI-Clone',
    demo: null,
  },
  {
    id: 5,
    title: 'Personal Portfolio',
    category: 'Web Dev',
    image: '/images/projects/portfolio.png',
    description: 'This portfolio — built with Next.js, Framer Motion, and TailwindCSS. Features animated sections, a draggable cert carousel, radar skill chart, and custom Geist font setup.',
    tech: ['Next.js', 'Framer Motion', 'TailwindCSS', 'Vercel'],
    github: 'https://github.com/Shubhranshu331/Portfolio_',
    demo: 'https://shubhranshu.xyz',
  },

  // ── MACHINE LEARNING ─────────────────────────────────────────
  {
    id: 6,
    title: 'Polyp Image Segmentation — Attention U-Net',
    category: 'Machine Learning',
    image: '/images/projects/polyp-unet.png',
    description: 'Research-stage implementation of an Attention U-Net for polyp segmentation on the CVC-ClinicDB dataset. Trained and evaluated in a Jupyter notebook with TensorFlow/Keras.',
    tech: ['TensorFlow', 'Keras', 'U-Net', 'OpenCV', 'Python'],
    github: 'https://github.com/Shubhranshu331/Polyp--Image_segmentation-UNET-',
    demo: null,
  },
  {
    id: 7,
    title: 'Digit Recognition — CNN on MNIST',
    category: 'Machine Learning',
    image: '/images/projects/digit-cnn.png',
    description: 'Convolutional Neural Network trained on the MNIST dataset to classify handwritten digits. Achieves high test accuracy — the model that powers the deployed React+FastAPI app.',
    tech: ['TensorFlow', 'Keras', 'CNN', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/Shubhranshu331/Digit-recognition-cnn-mnist',
    demo: null,
  },
  {
    id: 8,
    title: 'Adult Income Prediction',
    category: 'Machine Learning',
    image: '/images/projects/adult-income.png',
    description: 'Comparative study of ML classifiers (Logistic Regression, Random Forest, SVM, etc.) on the UCI Adult Income dataset to predict whether income exceeds $50K.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/Shubhranshu331/Adult-Income-prediction-model',
    demo: null,
  },
  {
    id: 9,
    title: 'Amazon Reviews Sentiment Analysis',
    category: 'Machine Learning',
    image: '/images/projects/amazon-sentiment.png',
    description: 'Sentiment analysis on Amazon product reviews using VADER — a lexicon-based NLP tool. Classifies reviews as positive, neutral, or negative with visualised score distributions.',
    tech: ['Python', 'VADER', 'NLTK', 'Pandas', 'Seaborn'],
    github: 'https://github.com/Shubhranshu331/Amazon-reviews-vader-Sentiment-analysis',
    demo: null,
  },
  {
    id: 10,
    title: 'Titanic Survival — Graph Neural Network',
    category: 'Machine Learning',
    image: '/images/projects/titanic-gcn.png',
    description: 'Non-standard take on the classic Titanic dataset — builds a k-NN graph from passenger features and applies a Graph Convolutional Network for survival prediction.',
    tech: ['Python', 'GCN', 'k-NN', 'PyTorch', 'NetworkX'],
    github: 'https://github.com/Shubhranshu331/Graph-Based-Titanic-Survival-Analysis-GCN-k-NN',
    demo: null,
  },

  // ── DATA ANALYTICS ───────────────────────────────────────────
  {
    id: 11,
    title: 'Bike Sales Performance Dashboard',
    category: 'Data Analytics',
    image: '/images/projects/bike-sales.png',
    description: 'Interactive Tableau dashboard analysing global bike sales across demographics, product categories, and regions. Revenue, profit, and customer segmentation all in one view.',
    tech: ['Tableau', 'Data Cleaning', 'Dashboard Design'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics',
    demo: 'https://public.tableau.com/app/profile/shubhranshu.shubhranshu/viz/BikeSales_17795285853410/BikeSalesAnalysis',
  },
  {
    id: 12,
    title: 'Classic Models Sales Dashboard',
    category: 'Data Analytics',
    image: '/images/projects/classic-models.png',
    description: 'Power BI dashboard on classic model car sales data. Covers revenue KPIs, product line analysis, geo distribution, and DAX-driven trend calculations.',
    tech: ['Power BI', 'DAX', 'Power Query', 'Business Intelligence'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics',
    demo: 'https://youtu.be/wTj2IFPLmLU',
  },
  {
    id: 13,
    title: 'Washington EV Population Dashboard',
    category: 'Data Analytics',
    image: '/images/projects/ev-population.png',
    description: 'Tableau dashboard mapping EV adoption across Washington State. Covers battery range, MSRP, county-level concentration, and growth forecasting.',
    tech: ['Tableau', 'Geo Analytics', 'Data Visualization'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics',
    demo: 'https://public.tableau.com/app/profile/shubhranshu.shubhranshu/viz/WashingtonEVDashboard_17795234433300/Dashboard1',
  },
  {
    id: 14,
    title: 'Netflix Content Analysis Dashboard',
    category: 'Data Analytics',
    image: '/images/projects/netflix-powerbi.png',
    description: 'Power BI report on Netflix content using a normalised relational data model. Analyses content growth, genre trends, and geographic production patterns.',
    tech: ['Power BI', 'Data Modeling', 'Schema Design'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics',
    demo: 'https://youtu.be/R5TZUIijL1Q',
  },
  {
    id: 15,
    title: 'Student Database Management System',
    category: 'Data Analytics',
    image: '/images/projects/student-db.png',
    description: 'Relational database project covering schema design, normalisation (1NF–3NF), CRUD operations, joins, aggregate functions, and query optimisation in MySQL.',
    tech: ['MySQL', 'SQL', 'Database Design', 'Normalization'],
    github: 'https://github.com/Shubhranshu331/Data-Analytics',
    demo: null,
  },

  // ── OTHERS ───────────────────────────────────────────────────
  {
    id: 16,
    title: 'TicTacToe — Android App',
    category: 'Others',
    image: '/images/projects/tictactoe.png',
    description: 'A simple TicTacToe Android app built in Java. Two-player mode, win detection, and a clean minimal UI. A college project that taught me mobile layout fundamentals.',
    tech: ['Java', 'Android', 'XML'],
    github: 'https://github.com/Shubhranshu331/TicTacToeApp-java-',
    demo: null,
  },
];

// ── Project card ──────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
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
                 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#5e2a3a]/10
                 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Image / gradient placeholder */}
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
          // Gradient placeholder with project initial
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <span className="text-white/30 font-geist font-bold text-[3rem]">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Category badge on image */}
        <span className="absolute top-3 left-3 font-geist-mono text-[0.65rem] uppercase tracking-wider
                         bg-white/90 text-[#5e2a3a] px-2 py-0.5 rounded-full">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="font-geist font-bold text-[#5e2a3a] text-[0.95rem] leading-snug">
          {project.title}
        </h3>
        <p className="text-[#555] text-[0.82rem] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span key={t}
              className="font-geist-mono text-[0.65rem] px-1.5 py-0.5 rounded
                         bg-[#5e2a3a]/8 text-[#5e2a3a] border border-[#5e2a3a]/15">
              {t}
            </span>
          ))}
        </div>

        {/* Links row */}
        <div className="flex gap-2 pt-2 mt-auto">
          {/* GitHub button — always present */}
          <a
            href={project.github}
            target="_blank" rel="noopener noreferrer"
            className="call-to-action flex items-center gap-1.5 px-3 py-1.5 rounded-full
                       text-[#5e2a3a] hover:text-white text-[0.78rem] font-semibold
                       transition-all duration-200"
          >
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
            GitHub
          </a>

          {/* Live demo — show button or greyed label */}
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
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                             border border-[#5e2a3a]/15 text-[#9c8f75] text-[0.78rem]
                             cursor-default select-none">
              No live demo
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ── Main component ────────────────────────────────────────────
const ProjectsSection = () => {
  const [activeTab,   setActiveTab]   = useState('All');
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasAnimated(true); },
      { threshold: 0.1 }
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
      className="py-[8vh] px-[2vw] xl:px-[8vw] bg-[#f6f0e6] overflow-hidden"
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

      {/* ── Filter tabs ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {TABS.map((tab) => {
          const count = tab === 'All' ? projects.length : projects.filter(p => p.category === tab).length;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-2 rounded-full font-geist text-[0.82rem] font-semibold
                          border-2 transition-all duration-300 flex items-center gap-1.5
                          ${activeTab === tab
                            ? 'bg-[#5e2a3a] border-[#5e2a3a] text-white shadow-md shadow-[#5e2a3a]/25'
                            : 'bg-transparent border-[#5e2a3a]/30 text-[#5e2a3a] hover:border-[#5e2a3a] hover:bg-[#5e2a3a]/5'
                          }`}
            >
              {tab}
              {/* Count badge */}
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

      {/* ── Projects grid ───────────────────────────────────────── */}
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
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default ProjectsSection;