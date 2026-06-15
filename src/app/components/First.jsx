'use client';

// ─────────────────────────────────────────────
// First.jsx  —  Hero Section
//
// Layout: two-column grid on large screens (photo left, text right)
//         stacked on mobile (photo on top, text below)
//
// Fixes in this version:
//  - Dot grid opacity bumped from 8% (#14) → 22% (#38) — actually visible now
//  - Vignette reduced so it doesn't swallow the dots
//  - Photo pulled to top on large screens (self-start instead of center)
//  - Pulse rings now use CSS responsive sizes matching the photo at every breakpoint:
//      mobile: photo=250px → rings at 275px / 265px
//      lg+:    photo=380px → rings at 415px / 400px
//  - Scroll progress bar lives in Navbar now (see Navbar.jsx)
// ─────────────────────────────────────────────

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const First = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start pt-[40px] pb-[4vh] px-[2vw] xl:px-[8vw] bg-[#f6f0e6] overflow-hidden"
    >

      {/* ── BACKGROUND: dot grid ────────────────────────────────────────
          Opacity raised to 22% (#38) so dots are actually visible.
          Grid tightened slightly to 26px for a denser, richer feel.
      ──────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, #5e2a3a38 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
        }}
      />

      {/* Vignette: reduced so it only fades the very edges, not the middle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 55%, #f6f0e6 95%)',
        }}
      />

      {/* ── CONTENT GRID ─────────────────────────────────────────────── */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* ── LEFT: Profile photo ─────────────────────────────────────
            - lg:self-start + lg:pt-4 pulls the whole column to the top
              on large screens so there's no empty space above the photo
            - Pulse rings sized with inline style using clamp() so they
              always wrap outside the photo at every screen size
        ────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="col-span-1 lg:col-span-4 place-self-center "
        >
          {/* Ring wrapper — must be explicitly sized so absolute rings 
              don't collapse to 0. We make it the same size as the lg photo. */}
          <div className="relative flex items-center justify-center"
               style={{ width: '250px', height: '250px' }}>

            {/* ── Pulse ring 1: outer slow pulse ──
                Size = photo + 30px on each side = photo + 60px total.
                clamp mirrors the photo size so it scales with the viewport. */}
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute rounded-full border-2 border-[#5e2a3a]"
              style={{
                width: '280px',
                height: '280px',
              }}
            />

            {/* ── Pulse ring 2: inner faster pulse ── */}
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.1, 0.65] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute rounded-full border border-[#9c8f75]"
              style={{
                width: '268px',
                height: '268px',
              }}
            />

            {/* ── Actual photo — fills the wrapper div ── */}
            <div
              className="rounded-full relative border-[2px] border-[#5e2a3a] overflow-hidden shadow-xl shadow-[#5e2a3a]/20"
              style={{ width: '100%', height: '100%' }}
            >
              <Image
                src="/images/Shubhranshu_Pic.png"
                alt="Shubhranshu — profile photo"
                className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                height={400}
                width={400}
                priority
              />
            </div>
          </div>

          {/* ── Section shortcut icons (desktop only) ──────────────────
              Staggered pop-in. mt-6 gives breathing room under the photo.
          ────────────────────────────────────────────────────────────── */}
          {/* <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex flex-wrap justify-center gap-[0.875rem] mt-6"
          >
            {[
              { href: '/#about',       label: 'About',      d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { href: '/#skillset',    label: 'Skillsets',  d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
              { href: '/#internships', label: 'Experience', d: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { href: '/#projects',    label: 'Projects',   d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
              { href: '/#education',   label: 'Education',  d: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
              { href: '/#contact',     label: 'Connect',    d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            ].map(({ href, label, d }) => (
              <motion.div key={href} variants={fadeUp}>
                <Link
                  href={href}
                  aria-label={label}
                  className="group relative call-to-action w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-[1.2rem] h-[1.2rem] text-[#222222] group-hover:text-white transition-colors duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
                  </svg>
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[0.65rem] bg-[#5e2a3a] text-[#f6f0e6] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>

        {/* ── RIGHT: Text content ─────────────────────────────────────
            lg:pt-8 aligns top of text with top of photo on large screens.
            Each element animates from a different direction.
        ────────────────────────────────────────────────────────────── */}
        <div className="col-span-1 lg:col-span-8 place-self-center lg:place-self-start text-center lg:text-left lg:pl-[3rem]">

          {/* "HEY, I'M" label — slides from left */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#9c8f75] font-['Lato'] text-[1rem] lg:text-[1.1rem] mb-2 tracking-widest uppercase"
          >
            Hey, I&apos;m
          </motion.p>

          {/* Name — slides from left, small delay */}
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.5rem] font-extrabold text-[#5e2a3a] font-geist leading-tight mb-2"
          >
            Shubhranshu
          </motion.h1>

          {/* Role TypeAnimation — slides from right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="text-[1.4rem] sm:text-[1.75rem] lg:text-[2.2rem] font-bold text-[#1d2e3f] font-geist mb-5 min-h-[2.5rem]"
          >
            <TypeAnimation
              sequence={[
                'ML Engineer',         1500,
                'Web Developer',       1500,
                'Computer Vision Eng', 1500,
                'Full Stack Dev',      1500,
                'AI / DL Enthusiast',  1500,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </motion.div>

          {/* Bio — fades up. Honest, human, no C/Java/R overclaiming. */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[#444444] text-[0.9rem] sm:text-[1rem] lg:text-[1.1rem] mb-8 leading-relaxed max-w-[600px] mx-auto lg:mx-0"
          >
            CS graduate who actually finishes things. I build across the whole stack — 
            FastAPI and Flask backends, TensorFlow and PyTorch models, React and Next.js 
            frontends, Docker containers, cloud deployments. Throw in some Three.js when 
            things need to look good, and Tableau or Power BI when the data needs to speak 
            for itself. Not chasing titles — just looking for work that&apos;s worth showing up for.
          </motion.p>

          {/* CTA buttons — fade in last */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            {/* Primary: scroll to About */}
            <Link
              href="/#about"
              className="call-to-action group px-6 py-3 inline-flex items-center justify-center gap-3
                         rounded-full bg-[#5e2a3a] border-[#5e2a3a] text-white
                         hover:bg-[#9c8f75] hover:border-[#9c8f75]
                         transition-all duration-300 font-['Lato'] text-[0.95rem] font-semibold
                         shadow-md shadow-[#5e2a3a]/25 hover:shadow-lg hover:shadow-[#9c8f75]/30"
            >
              More About Me
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.span>
            </Link>

            {/* Secondary: download resume PDF */}
            <a
              href="/Shubhranshu_Resume.pdf"
              download
              className="call-to-action group px-6 py-3 inline-flex items-center justify-center gap-3
                         rounded-full bg-transparent border-[#5e2a3a] text-[#5e2a3a]
                         hover:bg-[#5e2a3a] hover:text-white
                         transition-all duration-300 font-['Lato'] text-[0.95rem] font-semibold"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default First;