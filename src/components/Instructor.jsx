import React from "react";
import person1 from "../assets/Rectangle 16.png";
import person2 from "../assets/Rectangle 16 (1).png";
import person3 from "../assets/Rectangle 16 (2).png";
import person4 from "../assets/Rectangle 16 (3).png";

function Instructor() {
  return (
    <div>
      <div className="mt-10">
        <h2
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-center text-[24px] md:text-[28px] lg:text-[40px] font-semibold "
        >
          Our Best{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#884AFF] to-[#C54AFF]">
            Instructor
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-center text-[16px] lg:text-[20px] font-normal mx-4"
        >
          Various versions have evolved over the years, sometimes by accident,
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4 mx-5 md:mx-10 lg:mx-32">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="card bg-base-100 shadow-2xl"
        >
          <figure>
            <img className="p-4" src={person1} alt="instructor image" />
          </figure>
          <div className="text-center mt-3">
            <h2 className="text-[20px] font-normal">Jacob Jones</h2>
            <h4 className="text-[16px] font-normal mt-2">
              UI-UX Design Expart
            </h4>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="card bg-base-100 shadow-2xl"
        >
          <figure>
            <img className="p-4" src={person2} alt="instructor image" />
          </figure>
          <div className="text-center mt-3">
            <h2 className="text-[20px] font-normal">Jacob Jones</h2>
            <h4 className="text-[16px] font-normal mt-2">
              UI-UX Design Expart
            </h4>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="card bg-base-100 shadow-2xl"
        >
          <figure>
            <img className="p-4" src={person3} alt="instructor image" />
          </figure>
          <div className="text-center mt-3">
            <h2 className="text-[20px] font-normal">Jacob Jones</h2>
            <h4 className="text-[16px] font-normal mt-2">
              UI-UX Design Expart
            </h4>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="card bg-base-100 shadow-2xl"
        >
          <figure>
            <img className="p-4" src={person4} alt="instructor image" />
          </figure>
          <div className="text-center mt-3">
            <h2 className="text-[20px] font-normal">Jacob Jones</h2>
            <h4 className="text-[16px] font-normal mt-2 mb-2">
              UI-UX Design Expart
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
