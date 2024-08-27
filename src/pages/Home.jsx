import React from "react";
import Banner from "../components/Banner";
import HomeInformation from "../components/HomeInformation";
import EducatingIndustryleaders from "../components/EducatingIndustryleaders";
import HomeAboutInfo from "../components/HomeAboutInfo";
import CourseModules from "../components/CourseModules";
import Instructor from "../components/Instructor";
import Feedback from "../components/Feedback";
import "./Home.css";

function Home() {
  return (
    <div>
      <Banner />
      <HomeInformation />
      <EducatingIndustryleaders />
      <HomeAboutInfo />
      <CourseModules />
      <Instructor />
      <Feedback />
    </div>
  );
}

export default Home;
