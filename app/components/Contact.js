import React from "react";

const Contact = () => {
  return (
    <section className="px-24 mt-[8rem] flex flex-col items-center">
      <div className="text-center flex flex-col items-center">
        <h4 className="text-4xl font-semibold">Lets Design Together</h4>
        <p className="w-1/2 mt-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <form action="" className="mt-[3rem] w-1/2 flex gap-4">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email"
          className="bg-custom-light-orange border border-gray-200 rounded-md px-4 py-3 w-[70%] outline-none placeholder:text-sm"
        />
        <button className="bg-custom-orange text-white rounded-md px-4 py-3">
          Contact Me
        </button>
      </form>
    </section>
  );
};

export default Contact;
