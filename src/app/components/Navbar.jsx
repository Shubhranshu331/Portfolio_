"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

{/*Right side navigation link jsx*/}
const navLinks = [
    {
        title :"Home",
        path:"/"
    },
    {
        title: "About Me",
        path: "#about"
    },
    {
        title: "My Projects",
        path: "#myprojects"
    },
    {
        title: "Contact Me",
        path: "#contact"
    }
]

const Navbar = () => {
    const [navbarOpen,setNavbarOpen]= useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#060815] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-3 py-2">
{/* Logo */}
                <Link href={"/"} classname="">
                    <Image src="/images/logo.png" width={300} height ={100} alt="LOGO" />
                </Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-4 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5"/>
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-4 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <XMarkIcon className="h-5 w-5"/></button>
                        )
                    }

                </div>
                <div className="menu hidden md:block md:w-auto " id="navbar">
{/* Right side navigation*/}
                    <ul className = "flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link,index) =>(
                                <li key={index}>
                                    <NavLink href = {link.path} title={link.title} />

                                </li>
                            )

                            )
                        }
                    </ul>
                </div>

            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/>:null}
        </nav>
    )
}

export default Navbar