import Image from "next/image";
import React from "react";
import ProgressBar from "./ProgressBar";

export const About = () => {
  return (
    <section className="my-3 px-20 flex items-center justify-around mt-[5rem]">
      <div className="w-2/5">
        <figure className="relative">
          <Image
            src="/images/aboutme.png"
            width="538"
            height="317"
            alt="Hero img"
          />
          <div className="absolute top-[14%] left-[19%] bg-custom-orange opacity-60 w-72 h-16"></div>
        </figure>
      </div>
      <div className="w-1/2">
        <h4 className="text-5xl font-semibold">About Me</h4>
        <p className="mt-3 text-xl">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <div className="mt-4">
          <ul className="flex flex-col gap-3">
            <li>
              <ProgressBar labelName={"UI/UX"} progress={80} />
            </li>
            <li>
              <ProgressBar labelName={"JavaScript"} progress={60} />
            </li>
            <li>
              <ProgressBar labelName={"NextJS"} progress={30} />
            </li>
            <li>
              <ProgressBar labelName={"Tailwind"} progress={90} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
