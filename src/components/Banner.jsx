import React from "react";
import bannerImage from "../assets/bg-banner.png";
import bannerImg from "../assets/banner-img.png";
import buttonTop from "../assets/Group.png";
import buttonMiddle from "../assets/Group (2).png";
import buttonDown from "../assets/Group (1).png";
import { motion } from "framer-motion";
import TypingEffect from "react-typing-effect";

function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-5 lg:mx-24 grid grid-cols-8 gap-4 py-4 md:py-16">
        <div className="col-span-8 lg:col-span-5">
          <div className="flex justify-end">
            <img src={buttonTop} alt="animated" className="topimage" />
          </div>
          <div className="lg:mx-10">
            <h1
              data-aos="fade-up"
              data-aos-delay="0"
              className="font-bold text-[20px] md:text-[50px]"
            >
              Launch your future career by learning{" "}
              <span className="text-purple-500">
                <TypingEffect
                  text={["Product Design🚀", "Flutter"]}
                  speed={100}
                  eraseDelay={400}
                />
              </span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="my-5 text-[16px] lg:text-[20px] font-normal"
            >
              Learning tech skills from experts. Live tech bootcamps and online
              classes to kickstart or accelerate your career
            </p>

            <div data-aos="fade-up" data-aos-delay="700" className="flex gap-4">
              <button className="btn btn-sm md:btn-md text-white bg-gradient-to-r from-[#884AFF] to-[#C54AFF] hover:from-teal-400 hover:to-blue-500 px-5 md:px-12 py-2 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Live Bootcamp
              </button>
              <button className="btn btn-sm md:btn-md btn-outline btn-primary px-5 md:px-12 py-2 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white text-primary transition duration-300 ease-in-out transform hover:scale-105">
                Video Classes
              </button>
            </div>
          </div>
          <div className="flex justify-center ">
            <motion.img
              className="ml-36 hidden lg:block"
              src={buttonMiddle}
              alt="Animated"
              animate={{
                x: [20, 0],
                y: [0, -20],
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
          <div>
            <img src={buttonDown} alt="" className="bottomimage" />
          </div>
        </div>
        <div className="col-span-3 hidden lg:block" data-aos="fade-up">
          <motion.img
            src={bannerImg}
            alt="Rotating"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="m-8 md:my-16 w-[400px] "
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
