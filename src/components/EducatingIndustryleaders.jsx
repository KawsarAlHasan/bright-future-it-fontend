import React from "react";
import CountUp from "react-countup";
import image1 from "../assets/Frame 76 (1).png";
import image2 from "../assets/Frame 76.png";
import image3 from "../assets/Frame 75 (1).png";
import image4 from "../assets/Frame 75.png";
import image5 from "../assets/Frame 77 (1).png";
import image6 from "../assets/Frame 77.png";
import image7 from "../assets/Frame 78 (1).png";
import image8 from "../assets/Frame 78.png";
import image9 from "../assets/Frame 79 (1).png";
import image10 from "../assets/Frame 79.png";

function EducatingIndustryleaders() {
  return (
    <div className="text-center bg-black py-10 lg:py-16">
      <h2 className=" text-[32px] font-semibold text-white">
        Educating industry leaders in
      </h2>
      <h2 className="text-[32px] font-semibold text-[#C54AFF] justify-center flex">
        <div className="flex">
          <CountUp start={0} end={150} duration={3} />
          <span>+</span>
        </div>
        Countries
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-4 mx-4 lg:mx-36 mt-5 ">
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
      </div>
    </div>
  );
}

export default EducatingIndustryleaders;
