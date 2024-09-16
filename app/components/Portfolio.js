import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section className="px-24 mt-[8rem]">
      <div className="text-center flex flex-col items-center">
        <h4 className="text-4xl font-semibold">My Portfolio</h4>
        <p className="w-1/2 mt-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className="mt-[2rem]">
        <ul className="flex justify-center gap-4 font-medium">
          <li>
            <button className="py-1 px-3 rounded-md bg-custom-light-orange border border-gray-200 hover:bg-custom-orange transition-all ease-in-out duration-200 hover:text-white hover:border-custom-orange">
              All
            </button>
          </li>
          <li>
            <button className="py-1 px-3 rounded-md bg-custom-light-orange border border-gray-200 hover:bg-custom-orange transition-all ease-in-out duration-200 hover:text-white hover:border-custom-orange">
              UX/UI
            </button>
          </li>
          <li>
            <button className="py-1 px-3 rounded-md bg-custom-light-orange border border-gray-200 hover:bg-custom-orange transition-all ease-in-out duration-200 hover:text-white hover:border-custom-orange">
              Web Design
            </button>
          </li>
          <li>
            <button className="py-1 px-3 rounded-md bg-custom-light-orange border border-gray-200 hover:bg-custom-orange transition-all ease-in-out duration-200 hover:text-white hover:border-custom-orange">
              App Design
            </button>
          </li>
          <li>
            <button className="py-1 px-3 rounded-md bg-custom-light-orange border border-gray-200 hover:bg-custom-orange transition-all ease-in-out duration-200 hover:text-white hover:border-custom-orange">
              Graphic Design
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-[3rem]">
        <ul className="flex justify-center gap-10">
          <li>
            <div>
              <figure className="mb-2">
                <Image
                  src="/images/portfolio1.png"
                  alt="Portfolio img"
                  width={300}
                  height={300}
                />
              </figure>
              <span className="text-custom-orange text-sm">Web Design</span>
              <h4 className="text-lg font-semibold">
                AirCalling Landing Page Design{" "}
              </h4>
            </div>
          </li>
          <li>
            <div>
              <figure className="mb-2">
                <Image
                  src="/images/portfolio2.png"
                  alt="Portfolio img"
                  width={300}
                  height={300}
                />
              </figure>
              <span className="text-custom-orange text-sm">Web Design</span>
              <h4 className="text-lg font-semibold">
                Business Landing Page Design{" "}
              </h4>
            </div>
          </li>
          <li>
            <div>
              <figure className="mb-2">
                <Image
                  src="/images/portfolio3.png"
                  alt="Portfolio img"
                  width={300}
                  height={300}
                />
              </figure>
              <span className="text-custom-orange text-sm">Web Design</span>
              <h4 className="text-lg font-semibold">Ecom Web Page Design </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
