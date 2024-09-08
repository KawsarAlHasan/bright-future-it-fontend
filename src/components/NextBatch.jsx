import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCalendarCheck,
  faClock,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

function NextBatch() {
  return (
    <div className="bg-gradient-to-b from-[#884AFF] to-[#C54AFF] text-white py-8 md:py-12 lg:py-16">
      <h2
        data-aos="fade-up"
        data-aos-delay="0"
        className="text-center text-[24px] md:text-[40px] font-semibold "
      >
        Current Batch Schedule
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 md:mx-40">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="lg:items-center lg:justify-center flex"
        >
          <span className="text-[45px]">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </span>
          <div className="mx-3 mt-1">
            <h2 className="text-[18px] font-semibold text-gray-300">
              Enrollment Starts
            </h2>
            <h2 className="text-[22px] font-semibold mt-[-10px]">
              02 September, 2024
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="lg:items-center lg:justify-center flex"
        >
          <span className="text-[45px]">
            <FontAwesomeIcon icon={faCalendarCheck} />
          </span>
          <div className="mx-3 mt-1">
            <h2 className="text-[18px] font-semibold text-gray-300">
              Enrollment Ends
            </h2>
            <h2 className="text-[22px] font-semibold mt-[-10px]">
              25 September, 2024
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="lg:items-center lg:justify-center flex"
        >
          <span className="text-[45px]">
            <FontAwesomeIcon icon={faClock} />
          </span>
          <div className="mx-3 mt-1">
            <h2 className="text-[18px] font-semibold text-gray-300">
              Orientation Starts
            </h2>
            <h2 className="text-[22px] font-semibold mt-[-10px]">
              28 September, 2024
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="lg:items-center lg:justify-center flex"
        >
          <span className="text-[45px]">
            <FontAwesomeIcon icon={faSchool} />
          </span>
          <div className="mx-3 mt-1">
            <h2 className="text-[18px] font-semibold text-gray-300">
              Class Starts
            </h2>
            <h2 className="text-[22px] font-semibold mt-[-10px]">
              01 October, 2024
            </h2>
          </div>
        </div>
      </div>

      <p
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-center my-5 mx-4 text-[16px] md:text-[20px] font-normal text-gray-300"
      >
        If you are interested To enroll in 1st batch, register on the website
      </p>

      <div
        data-aos="fade-up"
        data-aos-delay="700"
        className="flex items-center justify-center"
      >
        <button className="text-2xl  btn text-white rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-10 transition duration-300 ease-in-out transform hover:scale-105">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default NextBatch;
