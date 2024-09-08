import React from "react";
import CountUp from "react-countup";

function EducatingIndustryleaders() {
  return (
    <div className="text-center bg-black py-10 lg:py-16">
      <h2 className=" text-[32px] font-semibold text-white">
        What you will learn from this course?
      </h2>
      <h2 className="text-[32px] font-semibold text-[#C54AFF] justify-center flex">
        <div className="flex">
          <CountUp start={0} end={80} duration={3} />
          <span>+</span>
        </div>
        Moduls
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-4 md:mx-4 lg:mx-36 mt-5 mb-8 lg:mb-0">
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-gradient-to-r rounded-full py-3 text-center font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 from-teal-400 to-blue-500 text-white"
        >
          Dart
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-gradient-to-r rounded-full py-3 text-center font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 from-pink-500 to-orange-500 text-white"
        >
          OOP
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-gradient-to-r rounded-full py-3 text-center font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 from-teal-400 to-blue-500 text-white"
        >
          Problem Solving
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-gradient-to-r rounded-full py-3 text-center font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 from-pink-500 to-orange-500 text-white"
        >
          Flutter Basic
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-gradient-to-r rounded-full py-3 text-center font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 from-teal-400 to-blue-500 text-white"
        >
          Flutter Arcitecture
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="500"
          className="bg-gradient-to-r rounded-full py-3 text-center font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 from-pink-500 to-orange-500 text-white"
        >
          Flutter Widgets
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="600"
          className="bg-gradient-to-r rounded-full py-3 text-center font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 from-teal-400 to-blue-500 text-white"
        >
          Flutter Firebase
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="700"
          className="bg-gradient-to-r rounded-full py-3 text-center font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 from-pink-500 to-orange-500 text-white"
        >
          GetX
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="800"
          className="bg-gradient-to-r rounded-full py-3 text-center font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 from-teal-400 to-blue-500 text-white"
        >
          APIs Implementation
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="900"
          className="bg-gradient-to-r rounded-full py-3 text-center font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 from-pink-500 to-orange-500 text-white"
        >
          App Deployment
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="1000"
          className="bg-gradient-to-r rounded-full py-3 text-center font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 from-teal-400 to-blue-500 text-white"
        >
          Job Placement
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="1000"
          className="bg-gradient-to-r rounded-full py-3 text-center font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105 from-pink-500 to-orange-500 text-white"
        >
          Freelansing
        </h2>
      </div>
      {/* <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-4 mx-4 lg:mx-36 mt-5 ">
        <img
          data-aos="fade-up"
          data-aos-delay="0"
          className="w-[250px] h-[60px] lg:w-[306px] lg:h-[80px]"
          src={image1}
          alt="company"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-[250px] h-[60px] lg:w-[306px] lg:h-[80px]"
          src={image2}
          alt="company"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-[250px] h-[60px] lg:w-[306px] lg:h-[80px]"
          src={image3}
          alt="company"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          className="w-[250px] h-[60px] lg:w-[306px] lg:h-[80px]"
          src={image4}
          alt="company"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="400"
          className="w-[250px] h-[60px] lg:w-[306px] lg:h-[80px]"
          src={image5}
          alt="company"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="500"
          className="w-[250px] h-[60px] lg:w-[306px] lg:h-[80px]"
          src={image6}
          alt="company"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="600"
          className="w-[250px] h-[60px] lg:w-[306px] lg:h-[80px]"
          src={image7}
          alt="company"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="700"
          className="w-[250px] h-[60px] lg:w-[306px] lg:h-[80px]"
          src={image8}
          alt="company"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="800"
          className="w-[250px] h-[60px] lg:w-[306px] lg:h-[80px]"
          src={image10}
          alt="company"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="900"
          className="w-[250px] h-[60px] lg:w-[306px] lg:h-[80px] hidden md:block"
          src={image9}
          alt="company"
        />
      </div> */}
    </div>
  );
}

export default EducatingIndustryleaders;
