'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Skillset',
    path: '#skillset',
  },
  {
    title: 'Internships',
    path: '#internships',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Education',
    path: '#education',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#060815] bg-opacity-100">
      <div className="flex items-center justify-between mx-auto px-3 py-2">
        {/* Logo (Profile Picture from First.jsx) */}
        <Link href="/" className="flex items-center">
          <div className="rounded-full w-[50px] h-[50px] relative border-2 border-[#5e2a3a]">
            <Image
              src="/images/Shubhranshu_Pic.png"
              alt="Logo"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
              height={50}
              width={50}
              priority
            />
          </div>
        </Link>
      </div>
      {/* Vertical Menu (Right Side) */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-20 flex flex-col items-end pr-4 space-y-3">
        <ul className="flex flex-col items-end space-y-3">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;