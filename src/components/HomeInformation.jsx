import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import image1 from "../assets/Frame 67.png";
import image2 from "../assets/Frame 67 (1).png";
import image3 from "../assets/Frame 67 (2).png";
import image4 from "../assets/Frame 67 (3).png";

function HomeInformation() {
  const { ref: sectionRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-b from-[#884AFF] to-[#C54AFF] text-white py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 md:mx-40">
        <div className="lg:items-center lg:justify-center flex">
          <img src={image1} alt="" />
          <div className="mx-3">
            <h2 className="text-[32px] font-semibold">
              {isVisible && <CountUp start={0} end={4} duration={3} />}
            </h2>
            <h2 className="text-[20px] font-normal mt-[-13px]">Instructors</h2>
          </div>
        </div>
        <div className="lg:items-center lg:justify-center flex">
          <img src={image2} alt="" />
          <div className="mx-3">
            <h2 className="text-[32px] font-semibold flex">
              {isVisible && <CountUp start={0} end={45} duration={4} />}
              <span>+</span>
            </h2>
            <h2 className="text-[20px] font-normal mt-[-13px]">Students</h2>
          </div>
        </div>
        <div className="lg:items-center lg:justify-center flex">
          <img src={image3} alt="" />
          <div className="mx-3">
            <h2 className="text-[32px] font-semibold flex">
              {isVisible && <CountUp start={0} end={78} duration={3} />}
              <span>+</span>
            </h2>
            <h2 className="text-[20px] font-normal mt-[-13px]">Live Class</h2>
          </div>
        </div>
        <div className="lg:items-center lg:justify-center flex">
          <img src={image4} alt="" />
          <div className="mx-3">
            <h2 className="text-[32px] font-semibold flex">
              {isVisible && <CountUp start={0} end={6} duration={6} />}
              <span> Months </span>
            </h2>
            <h2 className="text-[20px] font-normal mt-[-13px]">
              Couse Duration
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeInformation;
