"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing menu and close icons

export const NavBar = () => {
  // State to toggle the sidebar
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center py-10 px-20">
        <div>
          <figure>
            <Image src="/images/logo.png" width="165" height="165" alt="logo" />
          </figure>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden min-[1348px]:flex gap-4 items-center text-xl">
          <ul className="flex items-center gap-3">
            <li className="py-[10px] px-[14px]">
              <Link href="/">Home</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="/about">About Me</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="/services">Services</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-[5px]">
              <Link href="/cv">Download CV</Link>
            </button>
          </div>
        </nav>
        {/* Mobile Menu Icon */}
        <div className="min-[1348px]:hidden flex items-center">
          <button onClick={toggleSidebar}>
            <FiMenu size={30} />
          </button>
        </div>
      </header>

      {/* Sidebar for Mobile View */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-white z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 mt-8">
          <figure>
            <Image src="/images/logo.png" width="165" height="165" alt="logo" />
          </figure>
          <button onClick={toggleSidebar}>
            <FiX size={30} />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-4 mt-8 text-[21px]">
          <li className="py-[10px] px-[14px]">
            <Link href="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li className="py-[10px] px-[14px]">
            <Link href="/about" onClick={toggleSidebar}>
              About Me
            </Link>
          </li>
          <li className="py-[10px] px-[14px]">
            <Link href="/services" onClick={toggleSidebar}>
              Services
            </Link>
          </li>
          <li className="py-[10px] px-[14px]">
            <Link href="/projects" onClick={toggleSidebar}>
              Projects
            </Link>
          </li>
          <li className="py-[10px] px-[14px]">
            <Link href="/testimonials" onClick={toggleSidebar}>
              Testimonials
            </Link>
          </li>
          <li className="py-[10px] px-[14px]">
            <Link href="/contact" onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex justify-center pt-8">
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-[5px]"
            onClick={toggleSidebar}
          >
            <Link href="/cv">Download CV</Link>
          </button>
        </div>
      </div>
    </>
  );
};
