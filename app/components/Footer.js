import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[5rem]">
      <div className="bg-custom-light-orange flex flex-col items-center py-20">
        <figure>
          <Image src="/images/logo.png" alt="logo" width="165" height="165" />
        </figure>
        <div>
          <ul className="flex items-center gap-3">
            <li className="py-[10px] px-[14px]">
              <Link href="">Home</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="">About Me</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="">Services</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="">Projects</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="">Testimonials</Link>
            </li>
            <li className="py-[10px] px-[14px]">
              <Link href="">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
