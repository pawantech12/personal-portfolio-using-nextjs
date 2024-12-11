"use client";
import Image from "next/image";

import React, { useState } from "react";

const portfolioData = [
  {
    id: 1,
    category: "Web Design",
    title: "AirCalling Landing Page Design",
    imgSrc: "/images/portfolio1.png",
  },
  {
    id: 2,
    category: "Web Design",
    title: "Business Landing Page Design",
    imgSrc: "/images/portfolio2.png",
  },
  {
    id: 3,
    category: "Web Design",
    title: "Ecom Web Page Design",
    imgSrc: "/images/portfolio3.png",
  },
  {
    id: 4,
    category: "UX/UI",
    title: "Mobile App UX Design",
    imgSrc: "/images/portfolio1.png",
  },
  {
    id: 5,
    category: "Graphic Design",
    title: "Brand Logo Design",
    imgSrc: "/images/portfolio2.png",
  },
  {
    id: 6,
    category: "App Design",
    title: "Finance App UI",
    imgSrc: "/images/portfolio3.png",
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter portfolio items based on the selected category
  const filteredPortfolio =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <section className="px-24 my-[8rem] max-[1240px]:px-5">
      <div className="text-center flex flex-col items-center">
        <h4 className="text-4xl font-semibold">My Portfolio</h4>
        <p className="w-1/2 mt-4 max-[1240px]:w-3/4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium.
        </p>
      </div>
      <div className="mt-[2rem]">
        <ul className="flex justify-center gap-4 font-medium overflow-x-auto whitespace-nowrap ">
          {["All", "UX/UI", "Web Design", "App Design", "Graphic Design"].map(
            (category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`py-1 px-3 rounded-md border transition-all ease-in-out duration-200 ${
                    selectedCategory === category
                      ? "bg-custom-orange text-white border-custom-orange"
                      : "bg-custom-light-orange border-gray-200 hover:bg-custom-orange hover:text-white hover:border-custom-orange"
                  }`}
                >
                  {category}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="mt-[3rem]">
        <ul className="grid grid-cols-4 max-[1120px]:grid-cols-3 max-[940px]:grid-cols-2 max-[650px]:grid-cols-1 gap-10 transition-all duration-500 ease-in-out">
          {filteredPortfolio.map((item) => (
            <li
              key={item.id}
              className="opacity-0 translate-y-4 animate-fade-in"
            >
              <div>
                <figure className="mb-2">
                  <Image
                    src={item.imgSrc}
                    alt="Portfolio img"
                    width={300}
                    height={300}
                    className="w-full"
                  />
                </figure>
                <span className="text-custom-orange text-sm">
                  {item.category}
                </span>
                <h4 className="text-lg font-semibold max-[912px]:text-xl">
                  {item.title}
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
