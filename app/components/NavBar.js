import Image from "next/image";
import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <>
      <header className="flex justify-between items-center py-10 px-20">
        <div>
          <figure>
            <Image src="/images/logo.png" width="165" height="165" alt="" />
          </figure>
        </div>
        <nav className="flex gap-4 items-center text-[21px]">
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
          <div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-[5px]">
              <Link href="">Download CV</Link>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
