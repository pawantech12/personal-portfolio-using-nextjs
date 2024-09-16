import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <section className="px-24 mt-[7rem]">
      <div className="text-center flex flex-col items-center">
        <h4 className="text-4xl font-semibold">Services</h4>
        <p className="w-1/2 mt-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className="mt-[3rem]">
        <ul className="grid grid-cols-4 gap-5">
          <li className="bg-custom-light-orange px-4 py-7 rounded-xl">
            <div className="text-center flex flex-col items-center justify-center gap-2">
              <figure className="flex justify-center items-center">
                <Image
                  src="/images/service1.png"
                  width="50"
                  height="50"
                  alt="Service img"
                />
              </figure>
              <h4 className="text-lg font-semibold">UI/UX Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </p>
            </div>
          </li>
          <li className="bg-custom-light-orange px-4 py-7 rounded-xl">
            <div className="text-center flex flex-col items-center justify-center gap-2">
              <figure className="flex justify-center items-center">
                <Image
                  src="/images/service2.png"
                  width="50"
                  height="50"
                  alt="Service img"
                />
              </figure>
              <h4 className="text-lg font-semibold">Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </p>
            </div>
          </li>
          <li className="bg-custom-light-orange px-4 py-7 rounded-xl">
            <div className="text-center flex flex-col items-center justify-center gap-2">
              <figure className="flex justify-center items-center">
                <Image
                  src="/images/service3.png"
                  width="30"
                  height="50"
                  alt="Service img"
                />
              </figure>
              <h4 className="text-lg font-semibold">App Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </p>
            </div>
          </li>
          <li className="bg-custom-light-orange px-4 py-7 rounded-xl">
            <div className="text-center flex flex-col items-center justify-center gap-2">
              <figure className="flex justify-center items-center">
                <Image
                  src="/images/service4.png"
                  width="50"
                  height="50"
                  alt="Service img"
                />
              </figure>
              <h4 className="text-lg font-semibold">Graphic Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
