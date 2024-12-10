import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[5rem]">
      <div className="bg-custom-light-orange flex flex-col gap-[2rem] items-center py-20">
        <figure>
          <Image src="/images/logo.png" alt="logo" width="165" height="165" />
        </figure>
        <div>
          <ul className="flex items-center gap-3 max-[670px]:flex-col">
            <li className=" px-[14px]">
              <Link
                href="/"
                className="hover:text-orange-400 transition-all ease-in-out duration-200"
              >
                Home
              </Link>
            </li>
            <li className="px-[14px]">
              <Link
                href="/"
                className="hover:text-orange-400 transition-all ease-in-out duration-200"
              >
                About Me
              </Link>
            </li>
            <li className="px-[14px]">
              <Link
                href="/"
                className="hover:text-orange-400 transition-all ease-in-out duration-200"
              >
                Services
              </Link>
            </li>
            <li className="px-[14px]">
              <Link
                href="/"
                className="hover:text-orange-400 transition-all ease-in-out duration-200"
              >
                Projects
              </Link>
            </li>
            <li className="px-[14px]">
              <Link
                href="/"
                className="hover:text-orange-400 transition-all ease-in-out duration-200"
              >
                Testimonials
              </Link>
            </li>
            <li className="px-[14px]">
              <Link
                href="/"
                className="hover:text-orange-400 transition-all ease-in-out duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex gap-3 text-xl items-center">
          <li>
            <Link href="/">
              <FaFacebook className="hover:text-orange-400 hover:-translate-y-1 transition-all ease-in-out duration-200" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaTwitter className="hover:text-orange-400 hover:-translate-y-1 transition-all ease-in-out duration-200" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaInstagram className="hover:text-orange-400 hover:-translate-y-1 transition-all ease-in-out duration-200" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaLinkedin className="hover:text-orange-400 hover:-translate-y-1 transition-all ease-in-out duration-200" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-custom-light-black text-center text-gray-200 text-sm py-6">
        <p>
          © 2024{" "}
          <Link href="/" className="text-custom-orange font-medium">
            Mumair
          </Link>{" "}
          All Rights Reserved , Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
