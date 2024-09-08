import React from "react";
import bannerImage from "../assets/bg-banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faProjectDiagram,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

function CoursInfo() {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-2 md:mx-16 mt-[-98px] md:mt-[-150px] lg:mt-[-240px] lg:mx-72">
        <iframe
          data-aos="fade-up"
          data-aos-delay="1100"
          width="100%"
          src="https://www.youtube.com/embed/ndAQfTzlVjc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg shadow-lg h-[196px] md:h-[300px] lg:h-[480px]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-5 md:mx-16 lg:mx-36 my-12 lg:my-16">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="card bg-base-100 w-full shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faVideo} />
            </h2>
            <h2 className="card-title">Live Class</h2>
            <p>
              Bright Future IT offers an immersive live Flutter course,
              featuring over 118+ interactive sessions and hands-on projects.
              This course covers every aspect of Flutter development, from the
              fundamentals to advanced concepts, ensuring a deep understanding
              of building cross-platform mobile applications. Whether you're a
              beginner looking to start your journey in app development or an
              experienced developer aiming to master Flutter, our live classes
              are tailored to meet all levels of expertise.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="card bg-base-100 w-full shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faProjectDiagram} />
            </h2>
            <h2 className="card-title">18+ Project</h2>
            <p>
              The Bright Future IT Flutter Course features 20 hands-on projects
              that allow students to apply their learning in real-world
              scenarios. These projects are carefully structured to start with
              basic tasks and gradually increase in complexity. This
              step-by-step approach ensures that students steadily build their
              skills and confidence, ultimately mastering the art of
              cross-platform app development with Flutter
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="card bg-base-100 w-full shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faCode} />
            </h2>
            <h2 className="card-title">12 Assignment</h2>
            <p>
              The Bright Future IT Flutter Course includes 12 strategically
              placed assignments designed to evaluate students' understanding
              and application of the material. These assignments are distributed
              throughout the course, ensuring that students not only grasp the
              concepts but also know how to effectively apply them in real-world
              scenarios
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursInfo;
