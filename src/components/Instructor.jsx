import React from "react";
import nayon from "../assets/nayon-logo.png";
import person4 from "../assets/Rectangle 16 (3).png";
import shakib from "../assets/shakib-logo.png";
import kawsar from "../assets/kawsar-logo.png";

function Instructor() {
  return (
    <div>
      <div className="mt-10">
        <h2
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-center text-[24px] md:text-[28px] lg:text-[40px] font-semibold "
        >
          Meet Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#884AFF] to-[#C54AFF]">
            Team Member
          </span>
        </h2>
        {/* <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-center text-[16px] lg:text-[20px] font-normal mx-4"
        >
          Various versions have evolved over the years, sometimes by accident,
        </p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4 mx-5 md:mx-10 lg:mx-32">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="card bg-base-100 shadow-2xl"
        >
          <figure>
            <img
              className="p-4 w-[280px] h-[280px]"
              src={nayon}
              alt="instructor image"
            />
          </figure>
          <div className="text-center mt-3">
            <h2 className="text-[20px] font-normal">Nayon Coders</h2>
            <h4 className="text-[16px] font-normal mt-2">
              Senior Flutter Developer
            </h4>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="card bg-base-100 shadow-2xl"
        >
          <figure>
            <img
              className="p-4 w-[280px] h-[280px]"
              src={person4}
              alt="instructor image"
            />
          </figure>
          <div className="text-center mt-3">
            <h2 className="text-[20px] font-normal">Najmul Talukder</h2>
            <h4 className="text-[16px] font-normal mt-2 mb-2">
              Senior Flutter Developer
            </h4>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="card bg-base-100 shadow-2xl"
        >
          <figure>
            <img
              className="p-4  w-[280px] h-[280px]"
              src={shakib}
              alt="instructor image"
            />
          </figure>
          <div className="text-center mt-3">
            <h2 className="text-[20px] font-normal">Shakib Kabiraj</h2>
            <h4 className="text-[16px] font-normal mt-2">Flutter Developer</h4>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="card bg-base-100 shadow-2xl"
        >
          <figure className="">
            <img
              className="p-4 rounded-lg w-[280px] h-[280px]"
              src={kawsar}
              alt="instructor image"
            />
          </figure>
          <div className="text-center mt-3">
            <h2 className="text-[20px] font-normal">Kawsar Al Hasan</h2>
            <h4 className="text-[16px] font-normal mt-2">
              MERN Stack Developer
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
