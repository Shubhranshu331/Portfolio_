'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  { title: 'Home', path: '/', icon: '/icons/home.svg' },
  { title: 'About', path: '#about', icon: '/icons/about.svg' },
  { title: 'Skillset', path: '#skillset', icon: '/icons/skillset.svg' },
  { title: 'Internships', path: '#internships', icon: '/icons/internships.svg' },
  { title: 'Projects', path: '#projects', icon: '/icons/projects.svg' },
  { title: 'Education', path: '#education', icon: '/icons/education.svg' },
  { title: 'Contact', path: '#contact', icon: '/icons/contact.svg' },
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
    <nav className="fixed top-0 left-0 right-0 z-10 bg-opacity-0">
      {/* Logo and Personal Portfolio */}
      <div
        className={`flex items-center justify-between mx-auto px-3 py-2 transition-transform duration-300 ${
          isScrolledDown ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <Link href="/" className="flex items-center space-x-3">
          {/* Logo (LoadingLogo.mp4 Video) */}
          <div className="rounded-full w-[80px] h-[80px] relative border-[0.04em] border-[#5e2a3a] overflow-hidden">
            <video
              src="/videos/LoadingLogo.mp4"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover w-full h-full"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Logo"
            />
          </div>
          {/* Personal Portfolio with TypeAnimation */}
          <div className="hidden sm:block">
            <TypeAnimation
              sequence={['Personal Portfolio', 1000, 'Personal Portfolio', 1000]}
              wrapper="span"
              speed={50}
              className="text-[1.5rem] font-bold text-[#5e2a3a] font-['Raleway']"
              repeat={Infinity}
            />
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
      </div>

      {/* Vertical Menu (Right Side for lg+, Mobile Menu for sm and below) */}
      <div
        className={`fixed top-1/2 right-0 transform -translate-y-1/2 z-20 flex flex-col items-end pr-3 space-y-2 ${
          isMenuOpen ? 'block' : 'hidden lg:flex'
        }`}
      >
        <ul className="flex flex-col items-end space-y-2 relative">
          {/* Connecting Line */}
          <div className="absolute right-[1.25rem] h-full w-[2px] bg-[#5e2a3a] translate-x-[-50%]"></div>
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <Link
                href={link.path}
                className="flex items-center justify-end w-[2.5rem] h-[2.5rem] p-1 border-[0.04em] border-[#5e2a3a] rounded-full hover:bg-[#9c8f75] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu on click (mobile)
              >
                <img
                  src={link.icon}
                  alt={`${link.title} icon`}
                  className="w-[1.5rem] h-[1.5rem] text-[#222222]"
                />
              </Link>
              {/* Tooltip */}
              <span
                className="absolute right-[3rem] bg-[#5e2a3a] text-[#f6f0e6] text-sm font-['Lato'] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:group-hover:opacity-100 lg:pointer-events-auto pointer-events-none"
              >
                {link.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;