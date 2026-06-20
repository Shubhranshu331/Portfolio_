'use client';

// ─────────────────────────────────────────────────────────────
// AboutSection.jsx
//
// Layout: Two columns on large screens
//  LEFT:  Open to Work badge → personal about para → stat counters → links
//  RIGHT: Vertical internship timeline (4 entries, expandable cards)
//
// Animations:
//  - Left column slides in from left on scroll
//  - Stat counters count up once when section enters viewport
//  - Timeline line draws itself downward (scaleY 0→1)
//  - Cards slide in from right with stagger
//  - Cards: hover shows a peek of details, click fully expands (accordion)
// ─────────────────────────────────────────────────────────────

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// ── Stat counter data ─────────────────────────────────────────
const stats = [
  { value: 4, postfix: '', label: 'Internships' },
  { value: 7, postfix: '+', label: 'Certifications' },
  { value: 15, postfix: '+', label: 'Projects Built' },
  { value: 3, postfix: '+', label: 'Years Building' },
];

// ── Internship data ───────────────────────────────────────────
// Chronological order. No duration mentioned — just start/end months.
const internships = [
  {
    company: 'Allsoft Solutions',
    badge: 'IBM Business Partner',
    role: 'Full Stack Development Training',
    period: 'Aug 2022 – Sep 2022',
    location: 'Prayagraj',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    peek: 'Industry-oriented full stack training with IBM-backed curriculum.',
    expanded: `Completed an industry-oriented project under Allsoft Solutions, an ISO 9001:2008 certified company and IBM Business Partner. The training covered the full web development stack — HTML, CSS, JavaScript, Node.js and MongoDB — through hands-on project work. This was my first real exposure to building something end-to-end outside of college assignments — the kind of work where you're accountable for the whole thing, not just one piece of it.`,
    cert: '/internships/allsoft.pdf',
  },
  {
    company: 'MNNIT Allahabad',
    badge: 'NIT Research Internship',
    role: 'Research Intern — Computer Vision',
    period: 'Jun 2024 – Jul 2024',
    location: 'Prayagraj',
    tech: ['TensorFlow', 'Keras', 'Attention U-Net', 'OpenCV', 'Python', 'Pillow'],
    peek: 'Built an Attention U-Net model for polyp detection in medical images.',
    expanded: `Interned at the Department of Computer Science & Engineering at Motilal Nehru National Institute of Technology, Allahabad. The work focused on detection of polyps in colonoscopy images using UNet architecture — a real medical imaging problem with clinical relevance. I designed, trained and evaluated an Attention U-Net model using TensorFlow/Keras, working with the CVC-ClinicDB dataset from Kaggle. This internship directly fed into the full-stack PolypSeg project I later built and deployed — adding a Next.js + Three.js frontend, a Flask/Gunicorn backend, and Docker deployment on HuggingFace Spaces.`,
    cert: '/internships/mnnit.pdf',
  },
  {
    company: 'ISRO / IIRS',
    badge: 'Government of India · Dept. of Space',
    role: 'Online Course — AI/ML for Geodata Analysis',
    period: 'Aug 2024',
    location: 'Remote · Dehradun (IIRS)',
    tech: ['Python', 'Machine Learning', 'Remote Sensing', 'Geodata'],
    peek: 'AI/ML techniques applied to satellite and geospatial data — run by ISRO.',
    expanded: `Participated in a focused online course on AI/ML for Geodata Analysis conducted by the Indian Institute of Remote Sensing (IIRS), Dehradun — a unit of ISRO under the Government of India. Over 5 intensive days, the course covered how machine learning techniques are applied to satellite imagery and geospatial datasets for real-world analysis. It was a sharp, technical programme — the kind where you realise how broad the applications of ML actually are beyond the usual classification or NLP tasks.`,
    cert: '/internships/isro.pdf',
  },
  {
    company: 'Teachnook',
    badge: 'Online Internship · Verified',
    role: 'Biostatistics Mentorship Program',
    period: 'Sep 2024 – Oct 2024',
    location: 'Remote',
    tech: ['Biostatistics', 'Data Analysis', 'Statistical Methods'],
    peek: 'Mentorship program covering biostatistics and applied data analysis.',
    expanded: `Completed a structured mentorship program on biostatistics with Teachnook, a Wipro DICE verified platform. The program covered core statistical concepts and their application in data analysis — probability distributions, hypothesis testing, regression, and biostatistical methods used in life sciences and health data. It complemented my ML work by giving me a more rigorous statistical foundation. Noted by the academic team as a keen and enthusiastic candidate throughout the program.`,
    cert: '/internships/teachnook.pdf',
  },
];

// ── Animated counter ──────────────────────────────────────────
const Counter = ({ end, duration = 2000, trigger }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let startTime = null;
    let rafId;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) rafId = requestAnimationFrame(animate);
      else setCount(end);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [trigger, end, duration]);
  return <span>{count}</span>;
};

// ── Timeline card ─────────────────────────────────────────────
// Hover → peek text fades in at the bottom.
// Click → full expanded text animates open (accordion).
const TimelineCard = ({ item, index, inView }) => {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.2 + index * 0.15, ease: 'easeOut' }}
      className="relative ml-8"
    >
      {/* Timeline dot — scales on hover */}
      <motion.div
        animate={{ scale: hovered || expanded ? 1.3 : 1 }}
        transition={{ duration: 0.2 }}
        className={`absolute -left-[2.15rem] top-5 w-4 h-4 rounded-full border-4 border-[#f6f0e6] z-10
                    ${expanded ? 'bg-[#9c8f75]' : 'bg-[#5e2a3a]'} transition-colors duration-300`}
      />

      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded(!expanded)}
        className={`cursor-pointer border rounded-xl p-5 transition-all duration-300
                    ${expanded
            ? 'bg-white border-[#5e2a3a]/30 shadow-lg shadow-[#5e2a3a]/10'
            : 'bg-white/50 backdrop-blur-sm border-[#5e2a3a]/15 hover:-translate-y-1 hover:shadow-md hover:shadow-[#5e2a3a]/10'
          }`}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="font-geist font-bold text-[#5e2a3a] text-[1rem]">{item.company}</h3>
            <span className="text-[0.68rem] font-geist-mono text-[#9c8f75] uppercase tracking-wider">{item.badge}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[0.75rem] text-[#9c8f75] font-['Lato'] shrink-0">{item.period}</span>
            {/* Expand/collapse chevron */}
            <motion.svg
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="#9c8f75" className="w-4 h-4 shrink-0"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </div>
        </div>

        {/* Role */}
        <p className="text-[#1d2e3f] font-semibold text-[0.88rem] font-['Lato'] mb-2">{item.role}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.tech.map((t) => (
            <span key={t}
              className="font-geist-mono text-[0.68rem] px-2 py-0.5 rounded-md
                         bg-[#5e2a3a]/8 text-[#5e2a3a] border border-[#5e2a3a]/20">
              {t}
            </span>
          ))}
        </div>

        {/* Peek text — visible on hover when NOT expanded */}
        <AnimatePresence>
          {hovered && !expanded && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
              className="text-[#777] text-[0.8rem] font-['Lato'] italic"
            >
              {item.peek} <span className="text-[#5e2a3a] not-italic font-semibold">Click to read more →</span>
            </motion.p>
          )}
        </AnimatePresence>

        {/* Expanded full text — accordion open/close */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="text-[#444] text-[0.85rem] font-['Lato'] leading-relaxed pt-1 border-t border-[#5e2a3a]/10 mt-1">
                {item.expanded}
              </p>
              <p className="text-[#9c8f75] text-[0.75rem] font-['Lato'] mt-2 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {item.location}
              </p>
              <a
                href={item.cert}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-[0.78rem] font-semibold
             text-[#5e2a3a] border border-[#5e2a3a]/30 rounded-full px-3 py-1
             hover:bg-[#5e2a3a] hover:text-white transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Certificate
              </a>
            </motion.div>
          )} 
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ── Main component ────────────────────────────────────────────
const AboutSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasAnimated) setHasAnimated(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-[8vh] px-[2vw] xl:px-[8vw] bg-[#f6f0e6]/85 overflow-hidden"
    >
      {/* Section heading — watermark style */}
      <div className="relative text-center mb-[6vh]">
        <h1 className="text-[4rem] lg:text-[5rem] font-bold text-[#e0b0bc]/50 font-geist select-none">
          ABOUT
        </h1>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       text-[2rem] lg:text-[2.5rem] font-bold text-[#5e2a3a] font-geist whitespace-nowrap">
          About Me
        </h2>
      </div>

      {/* Two column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* ── LEFT COLUMN ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-6 bg-[#5e2a3a]/5 rounded-2xl p-6 border border-[#5e2a3a]/10"
        >
          {/* Open to Work badge */}
          <div className="flex items-center gap-2 w-fit">
            <motion.div
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-green-500"
            />
            <span className="text-green-600 font-semibold text-[0.85rem] font-['Lato'] tracking-wide uppercase">
              Open to Work
            </span>
          </div>

          {/* ── Personal about text ────────────────────────────────
              Angle: mix of journey + what drives me + who I am.
              Different from the hero bio which is purely skills-focused.
              No skill namedropping here — this is the human part.
          ─────────────────────────────────────────────────────── */}
          <div className="space-y-4 text-[#444] text-[1rem] lg:text-[1.05rem] leading-relaxed font-['Lato']">
            <p>
              I built my first thing and got hooked. That&apos;s genuinely the whole origin story —
              no dramatic moment, no grand plan. Just the feeling of making something work
              that didn&apos;t exist before, and wanting more of that.
            </p>
            <p>
              Since then I&apos;ve been chasing that feeling across ML, web dev, data — whatever
              the problem needs. I care a lot about how things look and feel, not just whether
              they work. Probably comes from spending too much time gaming and noticing when
              interfaces are just right.
            </p>
            <p>
              Right now I&apos;m looking for the kind of work where I can keep getting better at
              the craft — a team that takes what they build seriously, and doesn&apos;t mind
              someone who asks a lot of questions.
            </p>
          </div>

          {/* Stat counters — count up on scroll */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-white/50 border border-[#5e2a3a]/15 rounded-xl p-4
                           hover:border-[#5e2a3a]/40 hover:shadow-sm transition-all duration-300"
              >
                <p className="text-[2rem] font-extrabold text-[#5e2a3a] font-geist leading-none">
                  <Counter end={stat.value} duration={2000} trigger={hasAnimated} />
                  {stat.postfix}
                </p>
                <p className="text-[#9c8f75] text-[0.78rem] font-['Lato'] mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* GitHub + LinkedIn links */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://github.com/Shubhranshu331"
              target="_blank" rel="noopener noreferrer"
              className="call-to-action flex items-center gap-2 px-5 py-2.5 rounded-full
                         text-[#5e2a3a] hover:text-white text-[0.9rem] font-['Lato'] font-semibold
                         transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
            <a
              href="https://www.linkedin.com/in/shubhranshu489/"
              target="_blank" rel="noopener noreferrer"
              className="call-to-action flex items-center gap-2 px-5 py-2.5 rounded-full
                         text-[#5e2a3a] hover:text-white text-[0.9rem] font-['Lato'] font-semibold
                         transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853
                         0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
                         1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337
                         7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782
                         13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542
                         C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24
                         .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN — Timeline ───────────────────────────── */}
        <div ref={timelineRef}>
          <h3 className="font-geist font-bold text-[#5e2a3a] text-[1.3rem] mb-6">
            Experience
          </h3>

          <div className="relative">
            {/* Animated vertical line — draws itself downward on scroll */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={timelineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.1 }}
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#5e2a3a] to-[#9c8f75] origin-top"
            />

            <div className="flex flex-col gap-5">
              {internships.map((item, index) => (
                <TimelineCard
                  key={index}
                  item={item}
                  index={index}
                  inView={timelineInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;