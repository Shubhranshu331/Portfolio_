'use client';

// ─────────────────────────────────────────────
// Navbar.jsx
//
// What's in here:
//  1. TOP BAR — logo + "Personal Portfolio", hides on scroll-down,
//     reappears on scroll-up. Glassmorphism blur so page shows through.
//
//  2. SCROLL PROGRESS BAR — a thin maroon line on the far right edge
//     of the screen. Grows from top to bottom as you scroll the page.
//     Built with useScroll + useSpring from framer-motion so it's
//     buttery smooth, not jittery.
//
//  3. ICON RAIL — vertical column of nav icons, right side, vertically
//     centred. Active section is detected via IntersectionObserver and
//     gets a filled maroon background. Icons stagger in on first load.
// ─────────────────────────────────────────────

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

// ── Nav link definitions ──────────────────────
const navLinks = [
  {
    title: 'Home',
    path: '/',
    sectionId: 'home',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-[1.5rem] h-[1.5rem]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'About',
    path: '#about',
    sectionId: 'about',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-[1.5rem] h-[1.5rem]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Skillsets',
    path: '#skillset',
    sectionId: 'skillset',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-[1.5rem] h-[1.5rem]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Certifications',
    path: '#certifications',
    sectionId: 'certifications',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-[1.5rem] h-[1.5rem]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Projects',
    path: '#projects',
    sectionId: 'projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-[1.5rem] h-[1.5rem]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Education',
    path: '#education',
    sectionId: 'education',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-[1.5rem] h-[1.5rem]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Connect',
    path: '#contact',
    sectionId: 'contact',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-[1.5rem] h-[1.5rem]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// ── Framer Motion: staggered icon entrance ────
const iconRailVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const iconItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } },
};

// ── Component ─────────────────────────────────
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen]     = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY]   = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  // ── Scroll progress bar ───────────────────────────────────────────
  // useScroll tracks scrollYProgress (0 → 1 as user scrolls the page).
  // useSpring smooths the raw value so the bar glides rather than jumps.
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // ── Hide/show top bar on scroll direction ──
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolledDown(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolledDown(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // ── Active section via IntersectionObserver ──
  // Watches each section id. Whichever section is 35%+ in view
  // becomes the active one, highlighting its icon in the rail.
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.sectionId).filter(Boolean);
    const observers  = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ── SCROLL PROGRESS BAR ────────────────────────────────────────
          Fixed to the very right edge of the screen.
          A full-height grey track sits behind a maroon fill bar.
          scaleY goes from 0 → 1 (top → bottom) as you scroll.
          transform-origin: top means it grows downward from the top.
      ─────────────────────────────────────────────────────────────── */}
      <div className="fixed right-0 top-0 h-screen w-[3px] z-50 pointer-events-none">
        {/* Track (background) */}
        <div className="absolute inset-0 bg-[#5e2a3a]/10" />
        {/* Fill bar — driven by scroll position */}
        <motion.div
          className="absolute top-0 left-0 right-0 bg-[#5e2a3a] origin-top"
          style={{ scaleY }}
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-10">

        {/* ── TOP BAR ──────────────────────────────────────────────────
            Frosted glass effect via backdrop-blur + semi-transparent bg.
            Slides up/down based on scroll direction.
        ─────────────────────────────────────────────────────────────── */}
        <AnimatePresence>
          {!isScrolledDown && (
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="flex items-center justify-between mx-auto px-3 py-1
                         bg-[#f6f0e6]/80 backdrop-blur-md border-b border-[#5e2a3a]/10
                         shadow-sm"
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="rounded-full w-[45px] h-[45px] relative border-[0.04em] border-[#5e2a3a]/40 overflow-hidden">
                  <video
                    src="/video/NavLogo.mp4"
                    className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover w-full h-full"
                    autoPlay muted playsInline aria-label="Logo"
                  />
                </div>
                <div className="hidden sm:block">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-[1.5rem] font-bold text-[#5e2a3a] font-geist tracking-wide"
                  >
                    Personal Portfolio
                  </motion.span>
                </div>
              </Link>

              {/* Hamburger — only on mobile */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-[#5e2a3a] hover:text-[#9c8f75] focus:outline-none transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isMenuOpen ? (
                      <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <XMarkIcon className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div key="bars" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Bars3Icon className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── ICON RAIL ────────────────────────────────────────────────
            Desktop: fixed right side, vertically centred.
            Mobile: shown when hamburger is open.
            Active icon = filled maroon bg. Tooltip slides in on hover.
            Connecting line between icons fades from maroon to transparent.
        ─────────────────────────────────────────────────────────────── */}
        <motion.div
          variants={iconRailVariants}
          initial="hidden"
          animate="visible"
          className={`fixed top-1/2 right-0 transform -translate-y-1/2 z-20
                      flex flex-col items-end pr-3 space-y-4
                      ${isMenuOpen ? 'flex' : 'hidden lg:flex'}`}
        >
          <ul className="flex flex-col items-end space-y-4 relative">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.sectionId;
              return (
                <motion.li key={index} variants={iconItemVariants} className="relative group">

                  {/* Icon button */}
                  <Link
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-center w-[3rem] h-[3rem]
                                rounded-full border-[0.04em] border-[#5e2a3a]
                                transition-all duration-300
                                ${isActive
                                  ? 'bg-[#5e2a3a] text-white shadow-lg shadow-[#5e2a3a]/30'
                                  : 'bg-[#f6f0e6]/80 backdrop-blur-sm text-[#222222] hover:bg-[#9c8f75] hover:border-[#9c8f75] hover:text-white'
                                }`}
                  >
                    {link.icon}
                  </Link>

                  {/* Tooltip — slides in from the right on hover */}
                  <span className="absolute right-[3.5rem] top-1/2 -translate-y-1/2
                                   bg-[#5e2a3a] text-[#f6f0e6] text-sm font-['Lato']
                                   px-3 py-1 rounded-md whitespace-nowrap shadow-md
                                   opacity-0 translate-x-2
                                   group-hover:opacity-100 group-hover:translate-x-0
                                   transition-all duration-200 pointer-events-none">
                    {link.title}
                  </span>

                  {/* Connecting line between icons */}
                  {index < navLinks.length - 1 && (
                    <div
                      className="absolute w-[2px] right-[1.5rem]"
                      style={{
                        top: 'calc(100% + 0.04em)',
                        height: 'calc(4rem - 3rem - 0.04em)',
                        background: isActive
                          ? 'linear-gradient(to bottom, #5e2a3a, #9c8f75)'
                          : 'linear-gradient(to bottom, #5e2a3a55, #5e2a3a22)',
                      }}
                    />
                  )}
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;