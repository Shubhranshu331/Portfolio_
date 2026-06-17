'use client';

// ─────────────────────────────────────────────────────────────
// CertificationsSection.jsx
//
// A fully manual, draggable carousel — no auto-scroll, no waiting.
// Shows 2-3 cards depending on screen size. Navigate via:
//   - Left/Right arrow buttons
//   - Drag/swipe directly on the cards (mouse or touch)
//
// Built with Framer Motion's drag constraints + velocity-based
// "snap to nearest card" logic — feels like a native carousel,
// not a flaky CSS scroll-snap hack.
//
// Clicking a card image opens the certificate PDF in a modal,
// same pattern as InternshipsSection for consistency.
// ─────────────────────────────────────────────────────────────

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// ── Certification data ────────────────────────────────────────
// 6 real certifications. No Excel cert (confirmed not held).
const certifications = [
  {
    id: 1,
    title: 'Data Analysis: SQL, Tableau, Power BI & Excel',
    issuer: 'Udemy',
    date: 'May 2026',
    image: '/images/certifications/udemy.png',
    pdf: '/certifications/udemy.pdf',
    topics: ['SQL', 'Tableau', 'Power BI', 'Excel'],
  },
  {
    id: 2,
    title: 'Machine Learning Pipelines with Azure ML Studio',
    issuer: 'Coursera',
    date: 'May 2026',
    image: '/images/certifications/azure.png',
    pdf: '/certifications/azure.pdf',
    topics: ['Azure ML', 'ML Pipelines', 'MLOps'],
  },
  {
    id: 3,
    title: 'SQL for Data Science',
    issuer: 'UC Davis (Coursera)',
    date: 'Aug 2025',
    image: '/images/certifications/sql-davis.png',
    pdf: '/certifications/sql-davis.pdf',
    topics: ['SQL', 'Data Science', 'Querying'],
  },
  {
    id: 4,
    title: 'Using Beam ML to Catch Toxicity in Gaming',
    issuer: 'Google Cloud (Coursera)',
    date: 'Nov 2023',
    image: '/images/certifications/beam-ml.png',
    pdf: '/certifications/beam-ml.pdf',
    topics: ['Apache Beam', 'ML', 'Content Moderation'],
  },
  {
    id: 5,
    title: 'Getting Started with Microsoft Excel',
    issuer: 'Coursera Project Network',
    date: 'Aug 2024',
    image: '/images/certifications/excel.png',
    pdf: '/certifications/excel.pdf',
    topics: ['Excel', 'Data Analysis', 'Data Modeling'],
  },
  {
    id: 6,
    title: 'Data Analytics and Visualization Job Simulation',
    issuer: 'Accenture (Forage)',
    date: 'Jul 2024',
    image: '/images/certifications/accenture.png',
    pdf: '/certifications/accenture.pdf',
    topics: ['Data Cleaning', 'Visualization', 'Storytelling'],
  },
];

// ── Single certification card ─────────────────────────────────
const CertCard = ({ cert, onView }) => (
  <div className="w-full h-full flex flex-col bg-white rounded-xl border border-[#5e2a3a]/15
                  shadow-md overflow-hidden select-none">
    {/* Image with hover-to-reveal eye icon */}
    <div className="relative group h-[160px] shrink-0 bg-[#5e2a3a]/5">
      <Image
        src={cert.image}
        alt={`${cert.title} certificate`}
        fill
        className="object-cover transition-opacity duration-300 group-hover:opacity-60 pointer-events-none"
        draggable={false}
      />
      <button
        onClick={(e) => { e.stopPropagation(); onView(cert.pdf); }}
        onPointerDown={(e) => e.stopPropagation()} // prevents drag from hijacking the click
        className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 bg-white/90 p-2 rounded-full shadow-md z-20"
        aria-label="View certificate PDF"
      >
        <EyeIcon className="w-5 h-5 text-[#5e2a3a]" />
      </button>
    </div>

    {/* Text content */}
    <div className="flex flex-col flex-1 p-4 gap-1.5">
      <span className="font-geist-mono text-[0.68rem] text-[#9c8f75] uppercase tracking-wider">
        {cert.issuer} · {cert.date}
      </span>
      <h3 className="font-geist font-bold text-[#5e2a3a] text-[0.92rem] leading-snug">
        {cert.title}
      </h3>
      <div className="flex flex-wrap gap-1 mt-auto pt-2">
        {cert.topics.map((t) => (
          <span key={t}
            className="font-geist-mono text-[0.65rem] px-1.5 py-0.5 rounded
                       bg-[#5e2a3a]/8 text-[#5e2a3a] border border-[#5e2a3a]/15">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// ── Main component ────────────────────────────────────────────
const CertificationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomedPdf,   setZoomedPdf]   = useState(null);
  const containerRef = useRef(null);

  // How many cards are visible at once — responsive via CSS,
  // but we use a fixed JS value for drag-snap math (3 on desktop).
  const [cardsPerView, setCardsPerView] = useState(3);

  React.useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640)  setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, certifications.length - cardsPerView);

  const goNext = () => setActiveIndex((i) => Math.min(i + 1, maxIndex));
  const goPrev = () => setActiveIndex((i) => Math.max(i - 1, 0));

  // ── Drag handling ──────────────────────────────────────────
  // On drag end, look at how far + how fast the user dragged.
  // If it crosses a threshold, snap to the next/prev card.
  // Otherwise snap back to the current one.
  const handleDragEnd = (event, info) => {
    const threshold = 80;       // px — minimum drag distance to trigger a slide
    const velocityThreshold = 500; // px/s — fast flick also triggers a slide

    if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      goNext();
    } else if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      goPrev();
    }
    // else: snaps back automatically because x is driven by activeIndex
  };

  // Card width percentage based on how many are visible
  const cardWidthPercent = 100 / cardsPerView;

  return (
    <section
      id="certifications"
      className="py-[8vh] px-[2vw] xl:px-[8vw] bg-[#f6f0e6] overflow-hidden"
    >
      {/* Section heading — same watermark style as other sections */}
      <div className="relative text-center mb-[6vh]">
        <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.375rem] font-bold text-[#e0b0bc] opacity-50 font-geist select-none">
          CERTIFICATIONS
        </h1>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       text-[2rem] lg:text-[2.5rem] font-bold text-[#5e2a3a] font-geist whitespace-nowrap">
          My Certifications
        </h2>
      </div>

      {/* ── Carousel container ─────────────────────────────────── */}
      <div className="relative max-w-6xl mx-auto">

        {/* Prev / Next buttons */}
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 z-30
                      w-10 h-10 rounded-full flex items-center justify-center
                      bg-white shadow-md border border-[#5e2a3a]/20 transition-all duration-200
                      ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#5e2a3a] hover:text-white text-[#5e2a3a]'}`}
          aria-label="Previous certificate"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        <button
          onClick={goNext}
          disabled={activeIndex >= maxIndex}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 z-30
                      w-10 h-10 rounded-full flex items-center justify-center
                      bg-white shadow-md border border-[#5e2a3a]/20 transition-all duration-200
                      ${activeIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#5e2a3a] hover:text-white text-[#5e2a3a]'}`}
          aria-label="Next certificate"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

        {/* Draggable track — overflow hidden viewport */}
        <div className="overflow-hidden px-2" ref={containerRef}>
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }} // we control position via animate, not free drag
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            animate={{ x: `-${activeIndex * cardWidthPercent}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex cursor-grab active:cursor-grabbing"
            style={{ touchAction: 'pan-y' }} // allows vertical page scroll on touch while still dragging horizontally
          >
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="shrink-0 px-2"
                style={{ width: `${cardWidthPercent}%` }}
              >
                <CertCard cert={cert} onView={setZoomedPdf} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Dot indicators ──────────────────────────────────── */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300
                          ${i === activeIndex ? 'w-6 bg-[#5e2a3a]' : 'w-2 bg-[#5e2a3a]/25 hover:bg-[#5e2a3a]/50'}`}
            />
          ))}
        </div>

        {/* Hint text */}
        <p className="text-center text-[#9c8f75] text-[0.75rem] font-geist-mono mt-3">
          drag, swipe, or use the arrows
        </p>
      </div>

      {/* ── PDF Modal ───────────────────────────────────────────
          Same pattern as InternshipsSection for consistency.
      ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {zoomedPdf && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedPdf(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setZoomedPdf(null)}
                className="absolute -top-10 right-0 text-white text-sm font-geist hover:text-[#e0b0bc] transition-colors"
              >
                ✕ Close
              </button>
              <iframe
                src={zoomedPdf}
                className="w-[90vw] h-[90vh] rounded-lg"
                title="Certificate"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;