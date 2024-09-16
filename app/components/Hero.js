import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="my-3 px-20 flex items-center">
      <div className="w-4/6">
        <span className="text-2xl font-semibold">Hi i am</span>
        <h1 className="text-custom-orange text-[32px] font-semibold">
          Pawan Kumavat
        </h1>
        <h3 className="text-[7rem] font-semibold leading-[7rem]">
          UI & UX <br /> <span className="ms-[10rem]">Designer</span>
        </h3>
        <p className="font-normal text-[21px] mt-10 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dolores
          eius quos dicta laudantium. Expedita harum odio architecto quia in
          minus iste quae reiciendis adipisci.
        </p>
        <button className="bg-custom-orange text-[21px]  text-white py-3 px-11 rounded-md">
          Hire me
        </button>
      </div>
      <div className="w-2/6">
        <figure className="relative">
          <Image
            src="/images/hero.png"
            width="538"
            height="317"
            alt="Hero img"
          />
          <div className="absolute top-[12%] left-[12%] bg-custom-orange opacity-60 w-72 h-16"></div>
        </figure>
      </div>
    </section>
  );
};
