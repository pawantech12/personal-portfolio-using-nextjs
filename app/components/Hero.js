import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="my-3 px-20 flex justify-around max-[1240px]:text-center max-[1240px]:px-5 items-center gap-5">
      <div className="w-1/2 max-[816px]:w-11/12">
        <span className="text-2xl font-semibold">Hi i am</span>
        <h1 className="text-custom-orange text-[32px] font-semibold">Mumair</h1>
        <h3 className="text-[5rem] max-[816px]:text-[4rem] font-semibold leading-[6rem] max-[816px]:leading-[4.5rem]">
          UI & UX <br />{" "}
          <span className="ms-[10rem] max-[1240px]:ms-0">Designer</span>
        </h3>
        <p className="font-normal text-lg mt-10 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dolores
          eius quos dicta laudantium. Expedita harum odio architecto quia in
          minus iste quae reiciendis adipisci.
        </p>
        <button className="bg-custom-orange text-[21px]  text-white py-3 px-11 rounded-md">
          Hire me
        </button>
      </div>
      <div className="w-2/6 max-[1240px]:hidden">
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
