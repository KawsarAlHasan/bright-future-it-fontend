import React from "react";
import Banner from "../components/Banner";
import HomeInformation from "../components/HomeInformation";
import EducatingIndustryleaders from "../components/EducatingIndustryleaders";
import HomeAboutInfo from "../components/HomeAboutInfo";
import CourseModules from "../components/CourseModules";
import Instructor from "../components/Instructor";
// import Feedback from "../components/Feedback";
import "./Home.css";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Bright Future IT - Home</title>
        <meta
          name="description"
          content="Welcome to Bright Future IT, your one-stop solution for IT services."
        />
        <meta
          name="keywords"
          content="IT, Services, Web Development, SEO, React"
        />
        <link rel="canonical" href="https://bright-futureit.com/" />
      </Helmet>
      <Banner />
      <HomeInformation />
      <EducatingIndustryleaders />
      <HomeAboutInfo />
      <CourseModules />
      <div className="pb-10">
        <Instructor />
      </div>
      {/* <Feedback /> */}
    </div>
  );
}

export default Home;
