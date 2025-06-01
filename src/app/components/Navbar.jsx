'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  {
    title: 'Home',
    path: '/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#222222"
        className="w-[1.5rem] h-[1.5rem]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: 'About',
    path: '#about',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#222222"
        className="w-[1.5rem] h-[1.5rem]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Skillsets',
    path: '#skillset',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#222222"
        className="w-[1.5rem] h-[1.5rem]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    title: 'Internships',
    path: '#internships',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#222222"
        className="w-[1.5rem] h-[1.5rem]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Projects',
    path: '#projects',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#222222"
        className="w-[1.5rem] h-[1.5rem]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Education',
    path: '#education',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#222222"
        className="w-[1.5rem] h-[1.5rem]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
  },
  {
    title: 'Connect',
    path: '#contact',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#222222"
        className="w-[1.5rem] h-[1.5rem]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2v-6a2 2 0 012-2h2m4 0V6a2 2 0 00-2-2H7a2 2 0 00-2 2v2m10 8v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2"
        />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle menu for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolledDown(true); // Hide on scroll down
      } else if (currentScrollY < lastScrollY) {
        setIsScrolledDown(false); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      {/* Logo and Personal Portfolio */}
      <AnimatePresence>
        {!isScrolledDown && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between mx-auto px-3 py-2 bg-[#f6f0e6] bg-opacity-90"
          >
            <Link href="/" className="flex items-center space-x-3">
              {/* Logo (LoadingLogo.mp4 Video) */}
              <div className="rounded-full w-[60px] h-[60px] relative border-[0.04em] overflow-hidden">
                <video
                  src="/video/NavLogo.mp4"
                  className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover w-full h-full"
                  autoPlay
                  muted
                  playsInline
                  aria-label="Logo"
                />
              </div>
              {/* Personal Portfolio with Fade-In Animation */}
              <div className="hidden sm:block">
                <motion.span
                  key="personal-portfolio"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}
                  className="text-[1.5rem] font-bold text-[#5e2a3a] font-['Raleway']"
                >
                  Personal Portfolio
                </motion.span>
              </div>
            </Link>
            {/* Hamburger Menu Button (visible on sm and below) */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-[#222222] hover:text-[#9c8f75] focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vertical Menu (Right Side for lg+, Mobile Menu for sm and below) */}
      <div
        className={`fixed top-1/2 right-0 transform -translate-y-1/2 z-20 flex flex-col items-end pr-3 space-y-4 ${
          isMenuOpen ? 'block' : 'hidden lg:flex'
        }`}
      >
        <ul className="flex flex-col items-end space-y-4 relative">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <Link
                href={link.path}
                className="flex items-center justify-center w-[3rem] h-[3rem] border-[0.04em] border-[#5e2a3a] rounded-full hover:bg-[#9c8f75] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu on click (mobile)
              >
                {link.icon}
              </Link>
              {/* Active Label (Left Side on Hover/Click) */}
              <span
                className="absolute right-[3.5rem] top-1/2 transform -translate-y-1/2 bg-[#5e2a3a] text-[#f6f0e6] text-sm font-['Lato'] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:group-hover:opacity-100 lg:pointer-events-auto pointer-events-none"
              >
                {link.title}
              </span>
              {/* Connecting Line (Below Icon) */}
              {index < navLinks.length - 1 && (
                <div
                  className="absolute w-[2px] bg-[#5e2a3a] right-[1.5rem]"
                  style={{
                    top: 'calc(100% + 0.04em)', // Start just below maroon border
                    height: 'calc(4rem - 3rem - 0.04em)', // Span to next icon, minus icon height and border
                  }}
                ></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;