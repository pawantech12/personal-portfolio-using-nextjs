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
          <ul className="flex items-center gap-3">
            <li className="py-[10px] px-[14px]">
              <Link href="/">Home</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="/">About Me</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="/">Services</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="/">Projects</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="/">Testimonials</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <ul className="flex gap-3 text-xl items-center">
          <li>
            <Link href="/">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaLinkedin />
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
