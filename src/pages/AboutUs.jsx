import React from "react";
import Instructor from "../components/Instructor";
import HomeInformation from "../components/HomeInformation";
import ContractUs from "../components/ContractUs";
import bannerImage from "../assets/bg-banner.png";
import flutterImage from "../assets/flutter.png";
import dartImage from "../assets/dart.png";
import firebaseImage from "../assets/firebase.png";
import sqliteImage from "../assets/Sqlite.png";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>About Us - Bright Future IT</title>
        <meta
          name="description"
          content="Learn more about Bright Future IT, our mission, vision, and the team behind our success."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bright-futureit.com/about-us" />
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex md:mx-16 lg:mx-36 py-16">
          <div className="hidden lg:block mx-2">
            <motion.img
              className="w-[150px] my-10"
              src={flutterImage}
              alt="Animated"
              animate={{
                x: [10, -10],
                y: [0, 0],
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.img
              className="w-[150px]"
              src={firebaseImage}
              alt="Animated"
              animate={{
                x: [-10, 10],
                y: [0, 0],
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
            <h2
              data-aos="fade-up"
              data-aos-delay="0"
              className="text-center mx-2 lg:mx-24 text-[18px] md:text-[30px] font-semibold text-[#C54AFF]"
            >
              With a strong focus on practical experience, our courses include a
              blend of in-depth lessons, interactive live sessions, and
              real-world projects.
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-center mx-4 mt-4 text-[12px] md:text-[15px] font-normal"
            >
              At Bright Future IT, we are passionate about shaping the future of
              technology by helping our students reach their full potential.
              Whether you’re just starting out or looking to enhance your
              skills, we’re here to guide you every step of the way. Join us and
              take the first step toward a bright future in IT.
            </p>
          </div>
          <div className="hidden lg:block mx-2">
            <motion.img
              className="w-[150px] my-10"
              src={dartImage}
              alt="Rotating"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            />
            <motion.img
              className="w-[150px]"
              src={sqliteImage}
              alt="Animated"
              animate={{
                x: [-10, 10],
                y: [0, 0],
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </div>
      </div>
      <HomeInformation />
      <Instructor />
      <ContractUs />
    </div>
  );
}

export default AboutUs;
