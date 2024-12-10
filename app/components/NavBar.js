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
      <header className="flex justify-between items-center py-10 px-20 max-[1348px]:px-5">
        <div>
          <figure>
            <Image src="/images/logo.png" width="165" height="165" alt="logo" />
          </figure>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden min-[1348px]:flex gap-4 items-center text-xl">
          <ul className="flex items-center gap-3">
            <li className="py-[10px] px-[14px]">
              <Link
                href="/"
                className="hover:text-orange-400 transition-all ease-in-out duration-200"
              >
                Home
              </Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link
                href="/about"
                className="hover:text-orange-400 transition-all ease-in-out duration-200"
              >
                About Me
              </Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link
                href="/services"
                className="hover:text-orange-400 transition-all ease-in-out duration-200"
              >
                Services
              </Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link
                href="/projects"
                className="hover:text-orange-400 transition-all ease-in-out duration-200"
              >
                Projects
              </Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link
                href="/testimonials"
                className="hover:text-orange-400 transition-all ease-in-out duration-200"
              >
                Testimonials
              </Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link
                href="/contact"
                className="hover:text-orange-400 transition-all ease-in-out duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <button
              className="bg-custom-orange  text-white py-3 px-7 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-custom-orange/50 active:scale-95"
              onClick={toggleSidebar}
            >
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
        className={`fixed top-0 right-0 h-full w-[320px] bg-white z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 mt-10">
          <figure>
            <Image src="/images/logo.png" width="165" height="165" alt="logo" />
          </figure>
          <button onClick={toggleSidebar}>
            <FiX size={30} />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-4 mt-8 text-[21px]">
          <li className="py-[10px] px-[14px]">
            <Link
              href="/"
              onClick={toggleSidebar}
              className="hover:text-orange-400 transition-all ease-in-out duration-200"
            >
              Home
            </Link>
          </li>
          <li className="py-[10px] px-[14px]">
            <Link
              href="/"
              onClick={toggleSidebar}
              className="hover:text-orange-400 transition-all ease-in-out duration-200"
            >
              About Me
            </Link>
          </li>
          <li className="py-[10px] px-[14px]">
            <Link
              href="/"
              onClick={toggleSidebar}
              className="hover:text-orange-400 transition-all ease-in-out duration-200"
            >
              Services
            </Link>
          </li>
          <li className="py-[10px] px-[14px]">
            <Link
              href="/"
              onClick={toggleSidebar}
              className="hover:text-orange-400 transition-all ease-in-out duration-200"
            >
              Projects
            </Link>
          </li>
          <li className="py-[10px] px-[14px]">
            <Link
              href="/"
              onClick={toggleSidebar}
              className="hover:text-orange-400 transition-all ease-in-out duration-200"
            >
              Testimonials
            </Link>
          </li>
          <li className="py-[10px] px-[14px]">
            <Link
              href="/"
              onClick={toggleSidebar}
              className="hover:text-orange-400 transition-all ease-in-out duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex justify-center pt-8">
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-[5px] hover:bg-orange-200"
            onClick={toggleSidebar}
          >
            <Link href="/cv">Download CV</Link>
          </button>
        </div>
      </div>
    </>
  );
};
